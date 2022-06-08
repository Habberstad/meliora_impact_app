import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { FormTermsOfServiceText } from "./loginCommonComponents/FormTermsOfServiceText";
import { BackButton } from "./loginCommonComponents/BackButton";
import { registerButtonStyle } from "./login-styles";

export function RegisterForm() {
  return (
    <div className={"login-content"}>
      <BackButton />
      <div className={"login-content-header"}>
        <div>Register Manually</div>
        <p>Please provide the following information</p>
      </div>
      <FormControl className="login-form">
        <FormGroup row>
          <TextField
            sx={{
              mr: "7.5px",
              width: "calc(50% - 7.5px)",
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
            label="First name"
            variant="outlined"
          />
          <TextField
            sx={{
              ml: "7.5px",
              width: "calc(50% - 7.5px)",
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
            label="Last name"
            variant="outlined"
          />
        </FormGroup>
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
          label="E-mail address"
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
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#551477",
                  "&:hover": {
                    color: "#AA55D9",
                  },
                }}
              />
            }
            label="Remember me"
          />
        </FormGroup>
        <Button
          className={"form-button"}
          sx={registerButtonStyle}
          variant="contained"
          size="large"
        >
          Register
        </Button>
        <FormTermsOfServiceText />
      </FormControl>
    </div>
  );
}
