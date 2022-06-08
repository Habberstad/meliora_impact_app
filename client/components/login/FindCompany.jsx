import { BackButton } from "./loginCommonComponents/BackButton";
import { Button, InputAdornment, TextField, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import * as React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { companyListItem, selectedCompanyListItem } from "./login-styles";
import { LoginNextButtonB41 } from "../../styles/button-style-config";
import { UserApiContext } from "../../api-client/userApiContext";
import ErrorMessage from "../shared-components/ErrorMessage";

export const FindCompany = ({ handleCompanyInfo }) => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState();
  const [showError, setShowError] = useState(false);
  const [companyId, setCompanyId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [txtFieldValue, setTxtFieldValue] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [fullCompanyAdress, setFullCompanyAdress] = useState("");
  const { checkIsOrgRegistered } = React.useContext(UserApiContext);
  const [showList, setShowList] = useState(false);

  const getCompanies = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const array = [...json._embedded.enheter];
      setCompanies(array);
      if (array.length > 0) setShowList(true);
      setSelectedCompany();
    } catch (error) {}
  };

  const handleSelectCompany = (id, name, adress, postalCode, city) => {
    setCompanyId(id);
    setCompanyName(name);
    setTxtFieldValue(`${name}, ${id}`);
    setAdress(...adress);
    setPostalCode(postalCode);
    setCity(city);
    setFullCompanyAdress(`${adress}, ${postalCode} ${city}`);

    setShowList(false);

    if (selectedCompany === id) setSelectedCompany();
    if (selectedCompany !== id) setSelectedCompany(id);
  };

  const handleSendCompanyInfo = async () => {
    const data = await checkIsOrgRegistered({ org_number: companyId });

    if (data.isRegistered) {
      setShowError(true);
    } else {
      handleCompanyInfo(
        companyName,
        companyId,
        fullCompanyAdress,
        adress,
        postalCode,
        city
      );
      setShowError(false);
      navigate("/select-subscription");
    }
  };

  const onChangeHandler = (e) => {
    setTxtFieldValue(e.target.value);
    let url = `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${e.target.value}&konkurs=false&organisasjonsform=AS,ENK,ANS,DA,STI`;
    setShowError(false);

    if (
      //Checks if input length is 9 and only numbers, orgnumber
      e.target.value.trim().length === 9 &&
      /^\d+$/.test(e.target.value.trim())
    ) {
      url = `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=${e.target.value}&konkurs=false`;
      getCompanies(url);
    }
    if (e.target.value.trim().length === 0) {
      setCompanies([]);
      setShowList(false);
      setCompanyName(null);
      setSelectedCompany(setSelectedCompany);
    } else {
      getCompanies(url);
    }
  };

  return (
    <div className={"login-content"}>
      <BackButton />
      <div className={"login-content-header"}>
        <div>
          Find Your <br />
          Company
        </div>
        <p>
          Let's <strong>connect</strong> to your company! <br />
          Search on name or <strong>organizational</strong> number
        </p>
      </div>
      <TextField
        onChange={onChangeHandler}
        value={txtFieldValue}
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
        label="Company Name / Organization Number"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {showError && <ErrorMessage message="This organization already exist" />}
      {showList ? (
        <div>
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

      {!showList && (
        <Tooltip
          style={{ display: "flex", justifyContent: "center" }}
          title={!selectedCompany ? "Select your organization" : ""}
          leaveDelay={1000}
        >
          <span>
            <Button
              disabled={!selectedCompany}
              onClick={handleSendCompanyInfo}
              sx={{ ...LoginNextButtonB41, marginTop: "80px" }}
              variant="contained"
            >
              Next
            </Button>
          </span>
        </Tooltip>
      )}
    </div>
  );
};
