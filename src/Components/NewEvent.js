import { TextField } from "@mui/material";
import "./styles/SideDrawer.css";

function NewEvent() {
  return (
    <div>
      <h1>H1</h1>
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
