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
      <div class="Header">
        <Header></Header>
      </div>
      <div class="Sidedrawer">
        <SideDrawer toggleNewEntry={toggleNewEntry}></SideDrawer>
      </div>
      <div class="Main">
        {newEntry && <MainSpace />}
        {!newEntry && <NewEvent></NewEvent>}
      </div>
      <div class="Ads">
        <h2> Hier könnte ihre Werbung stehen</h2>
        <Button variant="primary" onClick={dummy}>
          Dummy
        </Button>
      </div>
    </div>
  );
}

export default App;
