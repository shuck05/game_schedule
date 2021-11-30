import { Button } from "@mui/material";
import "./styles/SideDrawer.css";

function Sidedrawer(props) {
  function toggleNewEntry() {
    props.toggleNewEntry();
  }
  return (
    <div className="SideDrawer">
      <div className="Sidedrawer-Button">
        <Button className="ButtonAsH2" onClick={toggleNewEntry}>
          Neues Event
        </Button>
      </div>

      <h2 className="Side-h2">Event 1</h2>
      <h2 className="Side-h2">Event 2</h2>
      <h2 className="Side-h2">Event 3</h2>
    </div>
  );
}

export default Sidedrawer;
