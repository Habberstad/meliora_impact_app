import { Button } from "@mui/material";
import { companyListItem, selectedCompanyListItem } from "../login-styles";

export function CompanySearchListItem(props) {
  return (
    <Button
      sx={
        props.selectedCompany === props.company.organisasjonsnummer
          ? selectedCompanyListItem
          : companyListItem
      }
      onClick={() => {
        props.onClick(
          props.company.organisasjonsnummer,
          props.company.navn,
          props.company.forretningsadresse.adresse,
          props.company.forretningsadresse.postnummer,
          props.company.forretningsadresse.poststed
        );
      }}
    >
      <div className="company-list-item">
        <div>{props.company.navn}</div>
        <div style={{ fontSize: "12px" }}>
          {props.company.organisasjonsnummer}
        </div>
      </div>
    </Button>
  );
}
