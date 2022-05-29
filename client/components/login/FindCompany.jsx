import { BackButton } from "./BackButton";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import * as React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { companyListItem, selectedCompanyListItem } from "./login-styles";
import { UserApiContext } from "../../api-client/userApiContext";
import fetchJSON from "../../helpers/fetchJSON";
import ErrorMessage from "../shared-components/ErrorMessage";

export const FindCompany = ({ handleCompanyInfo }) => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState();
  const [showError, setShowError] = useState(false);
  const [companyId, setCompanyId] = useState(null);
  const [companyName, setCompanyName] = useState(null);

  const { checkIsOrgRegistered } = React.useContext(UserApiContext);

  const getCompanies = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const array = [...json._embedded.enheter];
      setCompanies(array);
      setSelectedCompany();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSelectCompany = (id, name) => {
    setCompanyId(id);
    setCompanyName(name);

    if (selectedCompany === id) setSelectedCompany();
    if (selectedCompany !== id) setSelectedCompany(id);
  };

  const handleSendCompanyInfo = async () => {
    const data = await checkIsOrgRegistered({ org_number: companyId });

    if (data.isRegistered) {
      setShowError(true);
    } else {
      handleCompanyInfo(companyName, companyId);
      setShowError(false);
      navigate("/select-subscription");
    }
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
        <div>
          {showError && (
            <ErrorMessage message="This organization already exist" />
          )}
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
                    handleSelectCompany(
                      company.organisasjonsnummer,
                      company.navn
                    )
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
        </div>
      ) : null}

      <Button
        disabled={!selectedCompany}
        onClick={handleSendCompanyInfo}
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
