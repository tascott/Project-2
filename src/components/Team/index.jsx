import "./style.css";
import TeamMember from "../TeamMember";
import team from "../../data/team.json";

function Team() {
  return (
    <div className="team">
      <h1>Team</h1>
      <div className="team-members">
        {team.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
        </div>
    </div>
  );
}

export default Team;
