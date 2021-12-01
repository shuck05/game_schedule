import { Button } from "@mui/material";
import { useState } from "react";
import "./styles/SideDrawer.css";

function Sidedrawer(props) {
  // eslint-disable-next-line
  const [eventArr, setEventArr] = useState(
    JSON.parse(localStorage.getItem("eventArr"))
  );

  function toggleNewEntry() {
    props.toggleNewEntry();
  }
  function logShit() {
    console.log(eventArr);
  }

  function setActiveEvent(name) {
    for (let i = 0; i < eventArr.length; i++) {
      if (eventArr[i].name === name) {
        props.setActiveEvent(eventArr[i]);
        return;
      }
    }
  }

  return (
    <div className="SideDrawer">
      <div className="Sidedrawer-Button">
        <Button className="ButtonAsH2" onClick={toggleNewEntry}>
          Neues Event
        </Button>
      </div>
      <ul className="u-List">
        {eventArr === null ? (
          <h6>Noch keine Events</h6>
        ) : (
          eventArr.map((e) => (
            <li key={e.name}>
              <Button
                className="ButtonAsH2"
                onClick={() => setActiveEvent(e.name)}
              >
                {e.name}
              </Button>
            </li>
          ))
        )}
      </ul>
      <Button className="ButtonAsH2" onClick={logShit}>
        Log Shit
      </Button>
    </div>
  );
}

export default Sidedrawer;
