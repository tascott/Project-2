import "../../scss/style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Hard to hardcode the API key in the code, as the dollar signs were breaking netlify, and and I couldn't find a way to escape them without breaking the code.
// const API_KEY = import.meta.env.VITE_JSBIN_KEY ?? "";
const API_KEY = "$2b$10$rN8xKdFu0OpSxRIcEhTv8OE2Gsr.V1F3riFhtRiq4z2qOLRjMpAMq"

const readBinData = async (binId) => {
  try {
    const response = await axios.get(
      `https://api.jsonbin.io/v3/b/${binId}/latest`,
      {
        headers: {
          "X-Master-Key": API_KEY,
        },
      }
    );

    const data = response.data.record;

    return data;
  } catch (error) {
    console.error('Failed to read bin data:', error);
    return null;
  }
};

const updateBinData = async (binId, updatedData) => {
  // Update the bin data using 'put' (like update), hardcoded binid in json data in props
  try {
    await axios.put(`https://api.jsonbin.io/v3/b/${binId}`, updatedData, {
      headers: {
        "X-Master-Key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    console.log('Bin data updated successfully');
  } catch (error) {
    console.error('Failed to update bin data:', error);
    return null
  }
};

const ProjectToDos = (props) => {
  const [data, setData] = useState({ todos: [] });
  // shows the loading spinner as the calls are kind of slow
  const [loading, setLoading] = useState(false);
  let [newTodo, setNewTodo] = useState("");

  const binId = props.data.jsonBinId;

  const handleRead = async () => {
    if (!binId) {
      console.error('No bin ID provided');
      return;
    }

    setLoading(true);
    const binData = await readBinData(binId);
    setData(binData);
    if (binData !== null) {
      // If the bin data is not null, set the data to the bin data - this was causing an error before, as the bin data was null, and the data was being set to null, which was causing the map function to break
      setData(binData);
    }
    setLoading(false);
  };

  const handleCheckboxChange = async (e) => {
    const { checked, value } = e.target;
    const { todotoupdate } = e.target.dataset;
    setLoading(true);

    //loop over each todo, parse it, and if the title matches todotoupdate, update the completed value then stringify it and push it to the new array
    const updatedTodos = data.todos.map((todo) => {
      // Remember to parse the todo before you can access the title, comes through as json string
      const parsedTodo = JSON.parse(todo);
      if (parsedTodo.title === todotoupdate) {
        parsedTodo.completed = checked;
      }
      return JSON.stringify(parsedTodo);
    });

    const updatedData = { ...data, todos: updatedTodos };
    await updateBinData(binId, updatedData);
    setData(updatedData);
    setLoading(false);
  };

  const handleUpdate = async () => {
    if (!binId) {
      console.error("No bin ID provided");
      return;
    }

    newTodo = JSON.stringify({ title: newTodo, completed: false });

    const updatedData = { ...data, todos: [...data.todos, newTodo] };
    await updateBinData(binId, updatedData);
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the bin data then reset the new todo input
    handleUpdate();
    setNewTodo("");
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
          {data && data.todos && data.todos.length > 0 ? (
            <ul>
              {data.todos.map((todo, index) => {
                const parsedTodo = JSON.parse(todo);
                console.log(parsedTodo)
                return (
                  <>{parsedTodo.title &&
                    <li key={index}>
                      {parsedTodo.title}
                      <input
                        className="to-do-check"
                        data-todotoupdate={parsedTodo.title}
                        checked={parsedTodo.completed}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                      />
                    </li>
                  }</>
                );
              })}
            </ul>
          ) : (
            <div className="no-to-data">No to-dos yet!</div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Add a new to-do"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="new-todo-input"
          />
        </label>
        <button className="submit-btn" type="submit">
          Add to-do
        </button>
      </form>
    </div>
  );
};

export default ProjectToDos;