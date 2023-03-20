import "./style.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '$2b$10$AEiR.TaIv2GSlz2Ln3fOhObcfcQmwcXGFgCfoA8U8LKtVy9vtpVzS';

const readBinData = async (binId) => {
  try {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    });

    const data = response.data.record;

    return data;
  } catch (error) {
    console.error('Failed to read bin data:', error);
  }
};

const updateBinData = async (binId, updatedData) => {
  try {
    await axios.put(
      `https://api.jsonbin.io/v3/b/${binId}`,
      updatedData,
      {
        headers: {
          'X-Master-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Bin data updated successfully');
  } catch (error) {
    console.error('Failed to update bin data:', error);
  }
};

const ProjectToDos = (props) => {
  const [data, setData] = useState({ todos: [] });
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const binId = props.data.jsonBinId;

  const handleRead = async () => {
    if (!binId) {
      console.error('No bin ID provided');
      return;
    }

    console.log('Reading bin data...');
    setLoading(true);

    const binData = await readBinData(binId);
    console.log('Bin data:', binData)
    setData(binData);
    setLoading(false);
  };

  const handleUpdate = async () => {
    if (!binId) {
      console.error('No bin ID provided');
      return;
    }

    console.log('Updating bin data...', binId, newTodo, data)

    const updatedData = { ...data, todos: [...data.todos, newTodo] };
    await updateBinData(binId, updatedData);
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
    setNewTodo('');
  };

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <div>
     {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div>
          {data.todos && data.todos.length > 0 ? (
            <ul>
              {data.todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          ) : (
            <div>No data</div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Add to-do:
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="new-todo-input"
          />
        </label>
        <button className="submit-btn" type="submit">Add to-do</button>
      </form>
    </div>
  );
};

export default ProjectToDos