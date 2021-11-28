import { TextField } from "@mui/material";
import "./styles/SideDrawer.css";

function NewEvent() {
  return (
    <div>
      <h1>Neues Event erstellen</h1>
      <TextField
        id="Test"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
    </div>
  );
}

export default NewEvent;
