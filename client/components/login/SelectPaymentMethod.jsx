import { BackButton } from "./BackButton";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from "react-router";

export const SelectPaymentMethod = () => {
  const navigate = useNavigate();
  return (
    <div className="login-content">
      <BackButton />
      <div>
        <h1>Payment method</h1>
        <p>Meliora Partner (check)</p> {/* Todo subscription selected */}
        <p>Welcom back, (company)</p> {/* Todo add company name dynamic */}
      </div>
      <div className={"payment-options-container"}>
        <div className={"payment-option-container"}>
          <img
            src="https://www.elkjop.no/resource/responsive-image/1744350/hero/mobile/3/750/562/ccc-payment-klarna-logo-on-pink-background-mobile.png"
            alt="png"
          />
          <Checkbox />
        </div>
      </div>
      <Button
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
