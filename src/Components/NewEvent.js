import { TextField, Button } from "@mui/material";
import { useState } from "react";
import "./styles/NewEvent.css";

function NewEvent(props) {
  const [eventName, setEventName] = useState("");
  const [teamArray, setTeamArray] = useState([
    { name: "Ajax Dauerstramm", score: 0, numberGames: 0, difference: 0 },
    {
      name: "Dynamo Trinken",
      score: 0,
      numberGames: 0,
      difference: 0,
    },
  ]);
  const [participantArray, setParticipantArray] = useState([
    "Timmi Hendrix",
    "Benjamin",
  ]);
  const [trainerArray, setTrainerArray] = useState(["2 Pac", "50 Cent"]);
  const [newTeamTF, setNewTeamTF] = useState("");
  const [newParticipantTF, setNewParticipantTF] = useState("");
  const [newTrainerTF, setNewTrainerTF] = useState("");

  function handleEventNameChange(e) {
    setEventName(e.target.value);
  }

  function handleNewTeam() {
    for (let i = 0; i < teamArray.length; i++) {
      if (teamArray[i].name === newTeamTF) {
        alert("Dieses Team existiert schon");
        return;
      }
    }
    if (newTeamTF === "") {
      alert("Das Team muss einen Namen haben!");
    } else {
      setTeamArray([
        ...teamArray,
        { name: newTeamTF, score: 0, numberGames: 0, difference: 0 },
      ]);
    }
  }

  function handleNewParticipant() {
    if (participantArray.includes(newParticipantTF)) {
      alert("Diese Teilnehmer existiert schon!");
    } else {
      if (newParticipantTF === "") {
        alert("Der Teilnehmer muss einen Namen haben!");
      } else {
        setParticipantArray([...participantArray, newParticipantTF]);
      }
    }
  }

  function handleNewTrainer() {
    if (trainerArray.includes(newTrainerTF)) {
      alert("Dieser Trainer existiert schon!");
    } else {
      if (newTrainerTF === "") {
        alert("Der Trainer muss einen Namen haben!");
      } else {
        setTrainerArray([...trainerArray, newTrainerTF]);
      }
    }
  }

  function handleTeamnameTextfieldChange(e) {
    setNewTeamTF(e.target.value);
  }
  function handleParticipantTextfieldChange(e) {
    setNewParticipantTF(e.target.value);
  }
  function handleTrainerTextfieldChange(e) {
    setNewTrainerTF(e.target.value);
  }

  function handleDeleteTrainer(trainer) {
    for (var i = 0; i < trainerArray.length; i++) {
      if (trainerArray[i] === trainer) {
        trainerArray.splice(i, 1);
      }
    }
  }

  function handleDeleteTeam(team) {
    console.log("Dealeating" + team);
    for (var i = 0; i < teamArray.length; i++) {
      if (teamArray[i].name === team) {
        teamArray.splice(i, 1);
      }
    }
  }

  function handleDeleteparticipant(participant) {
    for (var i = 0; i < participantArray.length; i++) {
      if (participantArray[i] === participant) {
        participantArray.splice(i, 1);
      }
    }
  }

  function getGames() {
    if (teamArray.length < 3) {
      return [[teamArray[0].name, teamArray[1].name]];
    } else {
      return [
        [teamArray[0].name, teamArray[1].name],
        [teamArray[1].name, teamArray[2].name],
        [teamArray[2].name, teamArray[0].name],
      ];
    }
  }

  function handleNewEvent() {
    if (teamArray.length < 2) {
      alert("Hast du keine Freunde?");
      return;
    }
    const newEvent = {
      name: eventName,
      teams: teamArray,
      games: getGames(),
      participants: participantArray,
      trainer: trainerArray,
    };
    if (newEvent.name === "") {
      alert("Das Event braucht einen Namen!");
      return;
    }
    if (props.eventArr != null) {
      for (let i = 0; i < props.eventArr.length; i++) {
        if (props.eventArr[i].name === newEvent.name) {
          alert("Dieses Event existiert schon!");
          return;
        }
      }

      localStorage.setItem(
        "eventArr",
        JSON.stringify([...props.eventArr, newEvent])
      );
      props.setEventArr([...props.eventArr, newEvent]);
      props.setNewEntry();
    } else {
      localStorage.setItem("eventArr", JSON.stringify([newEvent]));
      props.setEventArr([newEvent]);
      props.setNewEntry();
    }
  }

  return (
    <div className="NewEventOuter">
      <div className="Flex-Row" style={{ paddingRight: "2vw" }}>
        <h1 className="Flex-grow">Neues Event erstellen</h1>
        <Button
          variant="outlined"
          onClick={() => {
            handleNewEvent();
          }}
        >
          Event Erstellen
        </Button>
      </div>

      <div className="Flex-Row">
        <div className="Flex-Col">
          <TextField
            className="textfield Col-Content"
            id="0"
            label="Eventname"
            variant="standard"
            onChange={handleEventNameChange}
          />
          <div className="Flex-Row Flex-start">
            <TextField
              className="textfield Col-Content"
              id="0"
              label="Teamname"
              variant="standard"
              onChange={handleTeamnameTextfieldChange}
            />
            <Button
              className="Col-Content"
              variant="outlined"
              onClick={() => {
                handleNewTeam();
              }}
            >
              Team Speichern
            </Button>
          </div>

          <div className="Flex-Row Flex-start">
            <TextField
              className="textfield Col-Content"
              id="0"
              label="Teilnehmer hinzufügen"
              variant="standard"
              onChange={handleParticipantTextfieldChange}
            />
            <Button
              className="Col-Content"
              variant="outlined"
              onClick={() => {
                handleNewParticipant();
              }}
            >
              Teilnehmer Speichern
            </Button>
          </div>
          <div className="Flex-Row Flex-start">
            <TextField
              className="textfield Col-Content"
              id="0"
              label="Trainer hinzufügen"
              variant="standard"
              onChange={handleTrainerTextfieldChange}
            />
            <Button
              className="Col-Content"
              variant="outlined"
              onClick={() => {
                handleNewTrainer();
              }}
            >
              Trainer Speichern
            </Button>
          </div>
          <h3>Trainer</h3>
          <ul className="u-List">
            {trainerArray.map((trainer) => (
              <li key={trainer}>
                <TextField
                  className="textfield Col-Content"
                  id="0"
                  label={trainer}
                  variant="standard"
                />
                <Button
                  className="Col-Content"
                  variant="outlined"
                  onClick={() => {
                    handleDeleteTrainer(trainer);
                  }}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="Flex-Col">
          <h3>Teams</h3>
          <ul className="u-List">
            {teamArray.map((team) => (
              <li key={team.name}>
                <TextField
                  className="textfield Col-Content"
                  id="0"
                  label={team.name}
                  variant="standard"
                />
                <Button
                  className="Col-Content"
                  variant="outlined"
                  onClick={() => {
                    handleDeleteTeam(team.name);
                  }}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>

          <h3>Teilnehmer</h3>
          <ul className="u-List">
            {participantArray.map((participant) => (
              <li key={participant}>
                <TextField
                  className="textfield Col-Content"
                  id="0"
                  label={participant}
                  variant="standard"
                />
                <Button
                  className="Col-Content"
                  variant="outlined"
                  onClick={() => {
                    handleDeleteparticipant(participant);
                  }}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
