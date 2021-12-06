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

  function comp(team1, team2) {
    if (team1.score > team2.score) return -1;
    if (team1.score < team2.score) return 1;
    if (team1.score === team2.score) {
      if (team1.difference > team2.difference) return -1;
      if (team1.difference < team2.difference) return 1;
    }
    return 0;
  }

  function addResult(team1, team2) {
    let indexT1 = null;
    let indexT2 = null;

    for (let i = 0; i < props.activeEvent.teams.length; i++) {
      if (props.activeEvent.teams[i].name === team1) indexT1 = i;
      if (props.activeEvent.teams[i].name === team2) indexT2 = i;
    }
    if (indexT1 === null || indexT2 === null) return;

    let arr = props.eventArr;
    let eventIndex = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === props.activeEvent.name) {
        eventIndex = i;
        continue;
      }
    }
    let t1 = arr[eventIndex].teams[indexT1];
    let t2 = arr[eventIndex].teams[indexT2];
    t1.difference =
      parseInt(t1.difference) + parseInt(textfield1) - parseInt(textfield2);
    t1.numberGames = t1.numberGames + 1;
    t2.difference = t2.difference + parseInt(textfield2) - parseInt(textfield1);
    t2.numberGames = t2.numberGames + 1;
    if (parseInt(textfield1) > parseInt(textfield2)) {
      t1.score = t1.score + 3;
      arr[eventIndex].teams[indexT1] = t1;
      arr[eventIndex].teams[indexT2] = t2;
    } else if (parseInt(textfield1) < parseInt(textfield2)) {
      t2.score = t2.score + 3;
      arr[eventIndex].teams[indexT1] = t1;
      arr[eventIndex].teams[indexT2] = t2;
    } else if (parseInt(textfield1) === parseInt(textfield2)) {
      t1.score = t1.score + 1;
      t2.score = t2.score + 1;
      arr[eventIndex].teams[indexT1] = t1;
      arr[eventIndex].teams[indexT2] = t2;
    }
    for (let i = 0; i < arr[eventIndex].games.length; i++) {
      if (
        team1 === arr[eventIndex].games[i][0] &&
        team2 === arr[eventIndex].games[i][1]
      ) {
        console.log("Found it");
        arr[eventIndex].games[i][2] = textfield1;
        arr[eventIndex].games[i][3] = textfield2;
      }
    }
    arr[eventIndex].teams.sort(comp);
    props.setEventArr(arr);
    localStorage.setItem("eventArr", JSON.stringify(arr));
    setTextfield1(0);
    setTextfield2(0);
    setActiveEdit("");
    props.rend();
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
                  size="small"
                  value={e[2]}
                  style={{ width: "35%", paddingRight: "2%" }}
                ></TextField>
                <TextField
                  value={e[3]}
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
