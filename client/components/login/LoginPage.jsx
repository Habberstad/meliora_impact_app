import MelioraIcon from "../../media/meliora_logo.png";
import LoginCardImage from "../../media/login_card_img.png";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

export const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-left-card">
        <img
          className="login-left-card-icon"
          src={MelioraIcon}
          alt="company-icon"
        />
        <div className="login-left-card-content">
          <h1>Meliora Connect</h1>
          <h1>Together We Can Change The World</h1>
          <img src={LoginCardImage} alt="company-icon" />
        </div>
      </div>
      <div className="login-container">
        <div className={"login-content"}>
          <FormControl>
            <TextField
              label="Outlined secondary"
              color="secondary"
              focused
              size="small"
            />
            <TextField
              label="Outlined secondary"
              color="secondary"
              focused
              size="small"
            />
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
            <Button variant="contained">Log in</Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
