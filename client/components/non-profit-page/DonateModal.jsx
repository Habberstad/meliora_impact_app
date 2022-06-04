import { Box, Button, Modal, TextField } from "@mui/material";
import { donateModalStyle } from "../wrapped/modal-style";
import {
  donateAmountButton,
  greenWidePlatformButton,
  selectedDonateAmountButton,
} from "../../styles/button-style-config";
import * as React from "react";
import SuccessMessage from "../shared-components/SuccessMessage";

function DonateModal({
  open,
  onClose,
  paymentAmount,
  add1000PaymentAmount,
  add2500PaymentMound,
  add5000PaymentAmount,
  addCustomPaymentAmount,
  handleSubmitDonation,
  formError,
  invalidCustomAmount,
  registerSuccess,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={donateModalStyle}>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "30px",
            marginTop: "40px",
          }}
        >
          Make a donation
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: "700",
            marginTop: "40px",
            marginBottom: "10px",
          }}
        >
          Select amount
        </div>
        <div
          style={{
            width: "300px",
            textAlign: "center",
            marginBottom: "10px",
          }}
          className="template-content-subtitle-modal"
        >
          As a loyal partner, you can make additional individual donations to
          this organization.
        </div>
        <div>
          <Button
            sx={
              paymentAmount === 1000
                ? selectedDonateAmountButton
                : donateAmountButton
            }
            onClick={add1000PaymentAmount}
          >
            1000kr
          </Button>
          <Button
            sx={
              paymentAmount === 2500
                ? selectedDonateAmountButton
                : donateAmountButton
            }
            onClick={add2500PaymentMound}
          >
            2500kr
          </Button>
          <Button
            sx={
              paymentAmount === 5000
                ? selectedDonateAmountButton
                : donateAmountButton
            }
            onClick={add5000PaymentAmount}
          >
            5000kr
          </Button>
        </div>
        <div>
          <TextField
            color="secondary"
            value={paymentAmount}
            sx={{
              width: "395px",
              bgcolor: "#FFF",
              borderRadius: "8px",
              border: "0px",
              marginTop: "10px",
              boxShadow:
                "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.05)",
            }}
            onChange={addCustomPaymentAmount}
          />
        </div>

        {invalidCustomAmount && (
          <div style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>
            The minimum contribution amount is 1000kr.
          </div>
        )}

        <Button
          onClick={handleSubmitDonation}
          variant="contained"
          style={{ marginTop: "30px" }}
          sx={greenWidePlatformButton}
        >
          Complete
        </Button>

        {registerSuccess && (
          <SuccessMessage message="Thank you! Your donation has been registered" />
        )}
      </Box>
    </Modal>
  );
}

export default DonateModal;
