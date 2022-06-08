import { Button } from "@mui/material";
import { useState } from "react";
import * as PropTypes from "prop-types";
import { TermsModal } from "../Modals/TermsModal";
import { PolicyModal } from "../Modals/PolicyModal";

PolicyModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

TermsModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export function FormTermsOfServiceText() {
  const [policy, setPolicy] = useState(false);
  const policyHandleOpen = () => setPolicy(true);
  const policyHandleClose = () => setPolicy(false);

  const [terms, setTerms] = useState(false);
  const termsHandleOpen = () => setTerms(true);
  const termsHandleClose = () => setTerms(false);

  return (
    <div className={"bottom-text-container"}>
      <p className={"bottom-text"}>
        By registering, I agree to Minimal
        <Button
          onClick={termsHandleOpen}
          sx={{ textDecoration: "none", color: "#000" }}
        >
          <strong> Terms of Service</strong>{" "}
        </Button>
        and
        <Button
          onClick={policyHandleOpen}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <strong> Privacy Policy.</strong>{" "}
        </Button>
      </p>

      <PolicyModal open={policy} onClose={policyHandleClose} />

      <TermsModal open={terms} onClose={termsHandleClose} />
    </div>
  );
}
