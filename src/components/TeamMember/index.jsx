import "./style.css";

function TeamMember(props) {
  console.log(props);
  return (
    <div className="TeamMember">
      <h1>---</h1>
      <h2>Name: {props.name}</h2>
      <h3>Title: {props.job_title}</h3>
      <p>Location: {props.location}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default TeamMember;
