import { Button } from "@mui/material";
import "./styles/SideDrawer.css";

function Sidedrawer(props) {
  function toggleNewEntry() {
    props.toggleNewEntry();
  }
  return (
    <div className="SideDrawer">
      <div className="Sidedrawer-Button">
        <Button onClick={toggleNewEntry}>Neues Event</Button>
      </div>

      <h2 className="Side-h2">Opt2</h2>
    </div>
  );
}

export default Sidedrawer;
