import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainSpace from "./Components/MainSpace";
import NewEvent from "./Components/NewEvent";
import SideDrawer from "./Components/SideDrawer";

function App() {
  const [newEntry, setNewEntry] = useState(false);
  // eslint-disable-next-line
  const [eventArr, setEventArr] = useState(
    JSON.parse(localStorage.getItem("eventArr"))
  );
  const [activeEvent, setActiveEvent] = useState(null);

  function toggleNewEntry() {
    setNewEntry(!newEntry);
  }

  function dummy() {
    if (activeEvent != null) alert(activeEvent.name);
  }

  function dummy2() {
    localStorage.clear();
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
        ></SideDrawer>
      </div>
      <div className="Main">
        {!newEntry && (
          <MainSpace
            activeEvent={activeEvent}
            setActiveEvent={setActiveEvent}
          ></MainSpace>
        )}
        {newEntry && <NewEvent></NewEvent>}
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
