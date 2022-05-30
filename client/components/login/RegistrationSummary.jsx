import { Button } from "@mui/material";

export const RegistrationSummary = () => {
  return (
    <div className="login-content">
      <div className="login-content-header">
        <h1>Welcome to Meliora Impact</h1>
        <h3>Check if the information under is correct:</h3>
      </div>
      <div className={"login-content-main"}>
        <h4>Amin</h4>
        <p>navn</p>
        <p>epost</p>
        <h3>Company</h3>
        <p>company name</p>
        <p>adresse</p>
        <h4>Account</h4>
        <p>subscription type tag</p>
        <h4>payment method</h4>
        <p>metode</p>
      </div>
      <Button>Get started, bitch</Button>
    </div>
  );
};
