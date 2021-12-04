import { IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import "./styles/Schedule.css";
import { useState } from "react";

function Schedule(props) {
  const [activeEdit, setActiveEdit] = useState("");
  const [textfield1, setTextfield1] = useState(0);
  const [textfield2, setTextfield2] = useState(0);

  function handleTF1change(e) {
    setTextfield1(e.target.value);
  }

  function handleTF2change(e) {
    setTextfield2(e.target.value);
  }

  function addResult(team1, team2) {
    console.log("Team1:" + team1 + " Team2:" + team2);
    let indexT1 = null;
    let indexT2 = null;

    for (let i = 0; i < props.activeEvent.teams.length; i++) {
      if (props.activeEvent.teams[i].name === team1) indexT1 = i;
      if (props.activeEvent.teams[i].name === team2) indexT2 = i;
    }
    console.log(props.activeEvent.teams[indexT1].difference);
    console.log(props.activeEvent.teams[indexT1]);
    console.log(props.activeEvent.teams[indexT2]);
    if (indexT1 === null || indexT2 === null) return;

    let temp = props.activeEvent;
    if (textfield1 > textfield2) {
      temp.teams[indexT1].score = temp.score + 3;
      temp.teams[indexT1].difference =
        temp.teams[indexT1].difference + textfield1 - textfield2;
      temp.teams[indexT1].numberGames = temp.teams[indexT1].numberGames + 1;

      temp.teams[indexT2].difference =
        temp.teams[indexT2].difference + textfield2 - textfield1;
      temp.teams[indexT2].numberGames = temp.teams[indexT2].numberGames + 1;
      props.setActiveEvent(temp);
      let arr = JSON.parse(localStorage.getItem("eventArr"));
      localStorage.setItem("eventArr", JSON.stringify(temp));
    } else if (textfield1 < textfield2) {
    }
    setTextfield1(0);
    setTextfield2(0);
    setActiveEdit("");
  }
  return (
    <div>
      <h4>Spielplan</h4>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>Team 1</div>
        <div style={{ width: "30%" }}>Team 2</div>
        <div style={{ width: "15%" }}>Punkte Team 1</div>
        <div style={{ width: "15%" }}>Punkte Team 2</div>
        <div style={{ width: "10%" }}></div>
      </div>

      <ul className="u-List">
        {props.activeEvent.games.map((e) => (
          <li key={e[0] + e[1]} style={{ display: "flex" }}>
            <div style={{ width: "28%", padding: "1%" }}>{e[0]}</div>
            <div style={{ width: "28%", padding: "1%" }}>{e[1]}</div>

            {!(activeEdit === e[0] + e[1]) && (
              <div>
                <TextField
                  disabled
                  size="small"
                  style={{ width: "35%", paddingRight: "2%" }}
                ></TextField>
                <TextField
                  disabled
                  size="small"
                  style={{ width: "35%", paddingRight: "2%" }}
                ></TextField>
                <IconButton onClick={() => setActiveEdit(e[0] + e[1])}>
                  <EditIcon style={{ color: "white" }} />
                </IconButton>
              </div>
            )}
            {activeEdit === e[0] + e[1] && (
              <div>
                <TextField
                  size="small"
                  style={{ width: "35%", paddingRight: "2%" }}
                  onChange={handleTF1change}
                ></TextField>
                <TextField
                  size="small"
                  style={{ width: "35%", paddingRight: "2%" }}
                  onChange={handleTF2change}
                ></TextField>
                <IconButton onClick={() => addResult(e[0], e[1])}>
                  <CheckIcon style={{ color: "white" }} />
                </IconButton>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
