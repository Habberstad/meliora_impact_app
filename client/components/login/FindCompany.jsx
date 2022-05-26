import { BackButton } from "./BackButton";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const FindCompany = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const url =
      "https://data.brreg.no/enhetsregisteret/api/enheter?navn=dnb&konkurs=false";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    let url = `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${e.target.value}&konkurs=false&organisasjonsform=AS,ENK,ANS,DA`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
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
          navigate("/select-subscription");
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
