import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./styles/Header.css";

function Header() {
  function logout() {
    alert("Loged out");
  }

  function settings() {
    alert("settings");
  }
  return (
    <div className="Background">
      <h2>Spielplan Schosch</h2>
      <div className="Button-Row">
        <IconButton onClick={settings}>
          <CheckIcon sx={{ color: "white" }}></CheckIcon>
        </IconButton>
        <IconButton onClick={logout}>
          <CheckIcon sx={{ color: "white" }}></CheckIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
