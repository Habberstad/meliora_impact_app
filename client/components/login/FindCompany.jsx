import { BackButton } from "./BackButton";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";

export const FindCompany = (props) => {
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={"login-content"}>
      <BackButton />
      <div>
        <h1>Find Your Company</h1>
        <p>{props.subscriptionType}</p> {/* Todo subscription selected */}
      </div>
      <TextField
        onChange={onChangeHandler}
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
        label="Organizational Number / Company Name"
        variant="outlined"
      />
      <div className="company-search-list">hei</div>
      <Button
        onClick={() => {
          navigate("/select-payment-method");
        }}
        className={"form-button"}
        sx={{
          mt: 1,
          backgroundColor: "#551477",
          "&:hover": {
            backgroundColor: "#aa55d9",
            color: "#FFF",
          },
        }}
        variant="contained"
        size="large"
      >
        Next
      </Button>
    </div>
  );
};
