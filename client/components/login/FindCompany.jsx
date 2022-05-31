import { BackButton } from "./BackButton";
import { Button, InputAdornment, TextField, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import * as React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  companyListItem,
  selectedCompanyListItem,
  submitButtonStyle,
} from "./login-styles";
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
  const [companyAdress, setCompanyAdress] = useState(null);
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

  const handleSelectCompany = (id, name, adress, postalCode, city) => {
    setCompanyId(id);
    setCompanyName(name);
    setCompanyAdress(`${adress}, ${postalCode} ${city}`);

    if (selectedCompany === id) setSelectedCompany();
    if (selectedCompany !== id) setSelectedCompany(id);
  };

  const handleSendCompanyInfo = async () => {
    const data = await checkIsOrgRegistered({ org_number: companyId });

    if (data.isRegistered) {
      setShowError(true);
    } else {
      handleCompanyInfo(companyName, companyId, companyAdress);
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
    if (e.target.value.trim().length === 0)
      setSelectedCompany(setSelectedCompany);
  };

  return (
    <div className={"login-content"}>
      <BackButton />
      <div className={"login-content-header"}>
        <div>
          Find Your <br></br>Company
        </div>
        <p>
          Let's <strong>connect</strong> to your company! <br></br>
          Search on name or <strong>organizational</strong> number
        </p>
      </div>
      <TextField
        onChange={onChangeHandler}
        sx={{
          width: "100%",
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
                      company.navn,
                      company.forretningsadresse.adresse,
                      company.forretningsadresse.postnummer,
                      company.forretningsadresse.poststed
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
      <Tooltip
        title={!selectedCompany ? "Select your organization" : ""}
        leaveDelay={1500}
      >
        <span>
          <Button
            disabled={!selectedCompany}
            onClick={handleSendCompanyInfo}
            sx={{ ...submitButtonStyle, marginTop: "30px" }}
            variant="contained"
          >
            Next
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};
