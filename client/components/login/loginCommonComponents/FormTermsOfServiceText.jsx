import { Link } from "react-router-dom";

export function FormTermsOfServiceText() {
  return (
    <div className={"bottom-text-container"}>
      {/*Links does not work because of logic to force user into login*/}
      <p className={"bottom-text"}>
        By registering, I agree to Minimal
        <Link
          to="/terms-of-service"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <strong> Terms of Service</strong>{" "}
        </Link>
        and
        <Link
          to="/privacy-policy"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <strong> Privacy Policy.</strong>{" "}
        </Link>
      </p>
    </div>
  );
}
