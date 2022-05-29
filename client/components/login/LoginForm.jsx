import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import GoogleIcon from "../../media/google_icon.png";
import { BackButton } from "./BackButton";

export function LoginForm(props) {
  return (
    <div className={"login-content"}>
      <BackButton />
      <div className={"login-content-header"}>
        <h1>Login</h1>
        <p>Log in with:</p>
      </div>
      <div>
        <div onClick={props.google} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              mb: "22px",
              borderColor: "#637381",
              "&:hover": {
                borderColor: "#000",
                backgroundColor: "#FFF",
                color: "#637381",
              },
            }}
            fullWidth
            variant={"outlined"}
            size={"large"}
          >
            <img style={{ height: "25px" }} src={GoogleIcon} alt="GoogleIcon" />
          </Button>
        </div>
      </div>
      <Divider style={{ width: "100%" }}>OR</Divider>
      <form className="login-form">
        <FormControl className="login-form">
          <TextField
            fullWidth
            sx={{
              mt: "22px",
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.7)",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "rgba(0, 0, 0, 0.7)",
              },
            }}
            label="Email-address"
            variant="outlined"
          />
          <TextField
            fullWidth
            sx={{
              my: "22px",
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.7)",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "rgba(0, 0, 0, 0.7)",
              },
            }}
            label="Password"
            variant="outlined"
            type="password"
          />
          <FormGroup
            row
            sx={{
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <a href={"/"}>Forgot password?</a>
          </FormGroup>
          <Button
            className={"form-button"}
            sx={{
              mt: 1,
              backgroundColor: "#A400FF",
              "&:hover": {
                backgroundColor: "#aa55d9",
                color: "#FFF",
              },
            }}
            variant="contained"
            size="large"
          >
            Log in
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
