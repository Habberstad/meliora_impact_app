import { Box, Modal } from "@mui/material";
import { consentAndAuthorityModalStyle } from "../../wrapped/modal-style";

export function ConsentModal(props) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={consentAndAuthorityModalStyle}>
        <div className="consent-and-authority-modal-container">
          <h1>Authority and consent</h1>
          <p style={{ fontSize: "18px" }}>
            By signing up, I, <strong> {props.userName}</strong> from{" "}
            <strong> {props.orgName}</strong>, hereby consent that all provided
            information is correct and legitimate.
          </p>
          <p style={{ fontSize: "18px" }}>
            I consent that the account information provided by Google (name,
            email, address and postal code), to be handled and stored by{" "}
            <strong>Student Group 38</strong> for the duration of Høyskolen
            Kristiania - PRO201-1 21H, including evaluation.
          </p>
        </div>
      </Box>
    </Modal>
  );
}
