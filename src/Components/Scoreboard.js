import { Button } from "@mui/material";
import "./styles/Scoreboard.css";

function Scoreboard(props) {
  return (
    <div>
      <h4>Tabelle</h4>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>TeamName</div>
        <div style={{ width: "20%" }}>Differenz</div>
        <div style={{ width: "30%" }}>Punkte</div>
      </div>

      <ul className="u-List">
        {props.activeEvent.teams.map((e) => (
          <li key={e.name}>
            <Button
              className="ButtonAsH2 Width50"
              onClick={() => console.log(e.name)}
            >
              {e.name}
            </Button>
            <Button
              className="ButtonAsH2 Width20"
              onClick={() => console.log(props.activeEvent)}
            >
              {e.difference}
            </Button>
            <Button
              className="ButtonAsH2 Width30"
              onClick={() => console.log(props.activeEvent)}
            >
              {e.score}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scoreboard;
