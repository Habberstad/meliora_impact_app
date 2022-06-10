import { Box, Button, InputAdornment, Modal, TextField } from "@mui/material";
import { subscribeModalStyle } from "../wrapped/share-modal-style";
import {
  allocationDonateButton,
  donateAmountButton,
  leftPaymentModalFreqBtn,
  leftSelectedPaymentModalFreqBtn,
  ReadMoreButtonB31,
  rightPaymentModalFreqBtn,
  rightSelectedPaymentModalFreqBtn,
  selectedDonateAmountButton,
} from "../../styles/button-style-config";
import * as React from "react";
import ErrorMessage from "../shared-components/ErrorMessage";
import SuccessMessage from "../shared-components/SuccessMessage";

function SubscriptionModal({
  open,
  onClose,
  paymentFrequency,
  addQuarterlyPaymentMethod,
  addMonthlyPaymentMethod,
  paymentAmount,
  add1000PaymentAmount,
  add2500PaymentMound,
  add5000PaymentAmount,
  addCustomPaymentAmount,
  handleSubmitSubscription,
  formError,
  invalidCustomAmount,
  registerError,
  registerSuccess,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={subscribeModalStyle}>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "30px",
            marginTop: "40px",
          }}
        >
          Become a partner
        </div>
        <div>
          <Button
            variant="contained"
            sx={
              paymentFrequency === "quarterly"
                ? leftSelectedPaymentModalFreqBtn
                : leftPaymentModalFreqBtn
            }
            onClick={addQuarterlyPaymentMethod}
          >
            Quarterly
          </Button>
          <Button
            sx={
              paymentFrequency === "monthly"
                ? rightSelectedPaymentModalFreqBtn
                : rightPaymentModalFreqBtn
            }
            onClick={addMonthlyPaymentMethod}
          >
            Monthly
          </Button>
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
          By becoming partner to this non-profit, you commit to a recurring
          contribution
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kr </InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">NOK</InputAdornment>,
            }}
            onChange={addCustomPaymentAmount}
          />
        </div>
        {formError && (
          <div style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>
            Please select payment method and amount.
          </div>
        )}
        {invalidCustomAmount && (
          <div style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>
            The minimum contribution amount is 1000kr.
          </div>
        )}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginTop: "40px",
            marginLeft: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Allocation <div className="badge-style">Coming soon</div>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            width: "300px",
            textAlign: "center",
          }}
          className="template-content-subtitle-modal"
        >
          Select how the donation is allocated between the different projects
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px 5px 0 5px",
            }}
          >
            <div className="template-content-subtitle">Project 1</div>
            <Button
              disabled={true}
              style={{ marginTop: "10px" }}
              sx={allocationDonateButton}
            >
              25%
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px 5px 0 5px",
            }}
          >
            <div className="template-content-subtitle">Project 2</div>
            <Button
              style={{ marginTop: "10px" }}
              disabled={true}
              sx={allocationDonateButton}
            >
              25%
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px 5px 0 5px",
            }}
          >
            <div className="template-content-subtitle">Project 3</div>
            <Button
              disabled={true}
              style={{ marginTop: "10px" }}
              sx={allocationDonateButton}
            >
              25%
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px 5px 0 5px",
            }}
          >
            <div className="template-content-subtitle">Project 4</div>
            <Button
              disabled={true}
              style={{ marginTop: "10px" }}
              sx={allocationDonateButton}
            >
              25%
            </Button>
          </div>
        </div>
        <Button
          onClick={handleSubmitSubscription}
          variant="contained"
          style={{ marginTop: "30px" }}
          sx={ReadMoreButtonB31}
        >
          Complete
        </Button>
        {registerError && (
          <ErrorMessage message="You are already a partner with this non-profit" />
        )}
        {registerSuccess && (
          <SuccessMessage message="You are now registered as a partner!" />
        )}
      </Box>
    </Modal>
  );
}

export default SubscriptionModal;
