import { BackButton } from "./BackButton";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export const FindCompany = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

  const fetchData = async () => {
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
    let value = e.target.value;
    setUrl(
      `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${value}&konkurs=false`
    );
    if (value.trim().length === 9 && /^\d+$/.test(value.trim())) {
      console.log("orgnumber true");
      setUrl(
        `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=${value}&konkurs=false`
      );
    }
    if (value.trim().length === 0) {
      setData([]);
      console.log(value);
      console.log(data);
    }

    fetchData();
  };

  return (
    <div className={"login-content"}>
      <BackButton />
      <div>
        <h1>Find Your Company</h1>
        <p>{props.subscriptionType}</p>
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
