import "../../scss/style.css";
import TeamMember from "../TeamMember";
import team from "../../data/team.json";
import WeatherProvider from "../weatherAPI/WeatherProvider";
import WeatherDisplay from "../weatherAPI/WeatherDisplay";

function Team() {
  return (
    <div className="team">
      <h1>Team</h1>
      <div className="team-members">
        {team.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
        <WeatherProvider>
          <WeatherDisplay />
        </WeatherProvider>
      </div>
    </div>
  );
}

export default Team;
