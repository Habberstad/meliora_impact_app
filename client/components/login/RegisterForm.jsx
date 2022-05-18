import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

export function RegisterForm() {
  return (
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
        Register
      </Button>
    </FormControl>
  );
}
