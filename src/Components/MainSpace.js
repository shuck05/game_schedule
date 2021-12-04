// import { useState } from "react";
import "./styles/MainSpace.css";
import Scoreboard from "./Scoreboard";
import Schedule from "./Schedule";

function MainSpace(props) {
  return (
    <div>
      {props.activeEvent === null ? (
        <div className="NewEventOuter">
          <div className="Flex-Row" style={{ paddingRight: "2vw" }}>
            <h1 className="Flex-grow">Noch keine Events hier ...</h1>
          </div>
        </div>
      ) : (
        <div className="NewEventOuter">
          <div>
            <h1 className="Flex-grow" style={{ paddingBottom: "2vw" }}>
              {props.activeEvent.name}{" "}
            </h1>
            <Scoreboard
              activeEvent={props.activeEvent}
              setActiveEvent={props.setActiveEvent}
            ></Scoreboard>
            <div style={{ paddingBottom: "4vw" }}></div>
            <Schedule
              activeEvent={props.activeEvent}
              setActiveEvent={props.setActiveEvent}
            ></Schedule>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainSpace;
