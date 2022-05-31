import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { postLoginButtonBook, postLoginButtonExplore } from "./login-styles";

export const PostLoginIntroSelection = (props) => {
  return (
    <div className={"login-content"}>
      <div className="login-content-header">
        <h1>Let’s get Started!</h1>
        <div
          className={`login-content-header-subscription-tag ${
            props.subscriptionType === "premium" ? "premium" : "freemium"
          }`}
        >
          <p>
            {props.subscriptionType === "premium"
              ? "Meliora Parnter"
              : "Freemium"}
          </p>
          <CheckCircleIcon />
        </div>
      </div>
      <div className="login-content-main">
        <Button
          disabled
          sx={postLoginButtonBook}
          fullWidth
          variant={"outlined"}
          size={"large"}
        >
          Book an appointment with Meliora Impact
          <div className={"subsctiption-type-info-badge"}>
            <p>coming soon</p>
          </div>
        </Button>
        <Button
          onClick={props.google}
          sx={postLoginButtonExplore}
          fullWidth
          variant={"outlined"}
          size={"large"}
        >
          Start Exploring the Platform
        </Button>
      </div>
    </div>
  );
};
