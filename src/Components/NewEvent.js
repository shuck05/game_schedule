import { TextField, Button } from "@mui/material";
import { useState } from "react";
import "./styles/NewEvent.css";

function NewEvent() {
  const [eventName, setEventName] = useState("");
  const [teamArray, setTeamArray] = useState([
    "Ajax Dauerstramm",
    "Dynamo Trinken",
    "Alminia Bielefeld",
    "Herke BSC",
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
    if (teamArray.includes(newTeamTF)) {
      alert("Dieses Team existiert schon!");
    } else {
      if (newTeamTF === "") {
        alert("Das Team muss einen Namen haben!");
      } else {
        setTeamArray([...teamArray, newTeamTF]);
      }
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
      if (teamArray[i] === team) {
        teamArray.splice(i, 1);
      }
    }
    console.log(teamArray);
  }
  function handleDeleteparticipant(participant) {
    for (var i = 0; i < participantArray.length; i++) {
      if (participantArray[i] === participant) {
        participantArray.splice(i, 1);
      }
    }
  }

  function handleNewEvent() {
    const event = {
      name: eventName,
      teams: teamArray,
      participants: participantArray,
      trainer: trainerArray,
    };
    /*
    if (localStorage.getItem("myEvents") != null) {
      localStorage.setItem("myEvents", [
        ...localStorage.getItem("myEvents"),
        event,
      ]);
    } else {
      localStorage.setItem("myEvents", event);
    }
    */
    console.log(event);
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
            {teamArray.map((teamname) => (
              <li key={teamname}>
                <TextField
                  className="textfield Col-Content"
                  id="0"
                  label={teamname}
                  variant="standard"
                />
                <Button
                  className="Col-Content"
                  variant="outlined"
                  onClick={() => {
                    handleDeleteTeam(teamname);
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
