import { BackButton } from "./BackButton";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import SearchIcon from "@mui/icons-material/Search";
import { companyListItem, selectedCompanyListItem } from "./login-styles";

export const FindCompany = ({ handleCompanyInfo }) => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState();

  const getCompanies = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const array = [...json._embedded.enheter];
      setCompanies(array);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSelectCompany = (id, name) => {
    console.log("tester handler", id, name);
    setSelectedCompany(id);
  };

  const onChangeHandler = (e) => {
    let url = `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${e.target.value}&konkurs=false&organisasjonsform=AS,ENK,ANS,DA,STI`;

    if (
      e.target.value.trim().length === 9 &&
      /^\d+$/.test(e.target.value.trim())
    ) {
      url = `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=${e.target.value}&konkurs=false`;
      getCompanies(url);
    }
    if (e.target.value.trim().length === 0) {
      setCompanies([]);
    } else {
      getCompanies(url);
    }
  };
  console.log("companies", companies);

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
              borderColor: "#7209B7",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#7209B7",
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
      {companies.length > 0 ? (
        <div className="company-search-list">
          {companies.map((company) => {
            return (
              <Button
                key={company.organisasjonsnummer}
                sx={
                  selectedCompany === company.organisasjonsnummer
                    ? selectedCompanyListItem
                    : companyListItem
                }
                onClick={() =>
                  handleSelectCompany(company.organisasjonsnummer, company.navn)
                }
              >
                <div className="company-list-item">
                  <div>{company.navn}</div>
                  <div style={{ fontSize: "12px" }}>
                    {company.organisasjonsnummer}
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      ) : null}

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
