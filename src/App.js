import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainSpace from "./Components/MainSpace";
import NewEvent from "./Components/NewEvent";
import SideDrawer from "./Components/SideDrawer";

function App() {
  const [newEntry, setNewEntry] = useState(false);

  function toggleNewEntry() {
    setNewEntry(!newEntry);
  }

  function dummy() {
    console.log("Dummy");
  }

  return (
    <div className="App">
      <div className="Header">
        <Header></Header>
      </div>
      <div className="Sidedrawer">
        <SideDrawer toggleNewEntry={toggleNewEntry}></SideDrawer>
      </div>
      <div className="Main">
        {newEntry && <MainSpace />}
        {!newEntry && <NewEvent></NewEvent>}
      </div>
      <div className="Ads">
        <h2> Hier könnte ihre Werbung stehen</h2>
        <Button variant="primary" onClick={dummy}>
          Dummy
        </Button>
      </div>
    </div>
  );
}

export default App;
