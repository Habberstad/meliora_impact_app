import { BackButton } from "./BackButton";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import SearchIcon from "@mui/icons-material/Search";

export const FindCompany = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const array = [...json._embedded.enheter];
      setData(array);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onChangeHandler = (e) => {
    let url = `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${e.target.value}&konkurs=false&organisasjonsform=AS,ENK,ANS,DA,STI`;

    if (
      e.target.value.trim().length === 9 &&
      /^\d+$/.test(e.target.value.trim())
    ) {
      url = `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=${e.target.value}&konkurs=false`;
      fetchData(url);
    }
    if (e.target.value.trim().length === 0) {
      setData([]);
    } else {
      console.log(e.target.value);
      console.log(url);
      fetchData(url);
    }
  };

  return (
    <div className={"login-content"}>
      <BackButton />
      <div className={"login-content-header"}>
        <h1>Find Your Company</h1>
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="company-search-list">
        {data.map((company) => {
          return (
            <div
              key={company.organisasjonsnummer}
              className={"company-list-item"}
            >
              <p>{company.navn} </p>
              <button
                onClick={() => {
                  props.handleCompanyInfo(
                    company.navn,
                    company.organisasjonsnummer
                  );
                }}
              >
                select
              </button>
            </div>
          );
        })}
      </div>
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
