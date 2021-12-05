import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainSpace from "./Components/MainSpace";
import NewEvent from "./Components/NewEvent";
import SideDrawer from "./Components/SideDrawer";

const dummyData = [
  {
    name: "VBT",
    teams: [
      {
        name: "EstA",
        score: 0,
        numberGames: 0,
        difference: 0,
      },
      {
        name: "Talf",
        score: 0,
        numberGames: 0,
        difference: 0,
      },
      {
        name: "Splif",
        score: 0,
        numberGames: 0,
        difference: 0,
      },
    ],
    games: [
      ["EstA", "Talf", 0, 0],
      ["Talf", "Splif", 0, 0],
      ["Splif", "EstA", 0, 0],
    ],
    participants: ["Timmi Hendrix", "Benjamin"],
    trainer: ["2 Pac", "50 Cent"],
  },
  {
    name: "Revival",
    teams: [
      {
        name: "Unknown4",
        score: 0,
        numberGames: 0,
        difference: 0,
      },
      {
        name: "Allstars",
        score: 0,
        numberGames: 0,
        difference: 0,
      },
      {
        name: "Tribe of Beni",
        score: 0,
        numberGames: 0,
        difference: 0,
      },
    ],
    games: [
      ["Unknown4", "Allstars", 0, 0],
      ["Allstars", "Tribe of Beni", 0, 0],
      ["Tribe of Beni", "Unknown4", 0, 0],
    ],
    participants: ["Timmi Hendrix", "Benjamin"],
    trainer: ["2 Pac", "50 Cent"],
  },
];

function App() {
  useEffect(() => {});

  const [newEntry, setNewEntry] = useState(false);
  const [eventArr, setEventArr] = useState(
    JSON.parse(localStorage.getItem("eventArr"))
  );
  const [activeEvent, setActiveEvent] = useState(null);

  function toggleNewEntry() {
    setNewEntry(!newEntry);
  }

  function dummy() {
    setEventArr(dummyData);
    localStorage.setItem("eventArr", JSON.stringify(dummyData));
  }

  function dummy2() {
    setEventArr([]);
    localStorage.clear();
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className="Header">
        <Header></Header>
      </div>
      <div className="Sidedrawer">
        <SideDrawer
          toggleNewEntry={toggleNewEntry}
          setActiveEvent={setActiveEvent}
          setEventArr={setEventArr}
          eventArr={eventArr}
        ></SideDrawer>
      </div>
      <div className="Main">
        {!newEntry && (
          <MainSpace
            activeEvent={activeEvent}
            setEventArr={setEventArr}
            eventArr={eventArr}
          ></MainSpace>
        )}
        {newEntry && (
          <NewEvent
            setNewEntry={setNewEntry}
            setEventArr={setEventArr}
            eventArr={eventArr}
          ></NewEvent>
        )}
      </div>
      <div className="Ads">
        <h2> Hier könnte ihre Werbung stehen</h2>
        <Button variant="primary" onClick={dummy}>
          Dummy
        </Button>
        <Button variant="primary" onClick={dummy2}>
          Clear Storage
        </Button>
      </div>
    </div>
  );
}

export default App;
