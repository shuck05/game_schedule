// import { useState } from "react";
import "./styles/MainSpace.css";

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
          <div className="Flex-Row" style={{ paddingRight: "2vw" }}>
            <h1 className="Flex-grow">{props.activeEvent.name}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainSpace;
