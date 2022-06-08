import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { postLoginButtonBook, postLoginButtonExplore } from "./login-styles";

export const PostLoginIntroSelection = (props) => {
  return (
    <div className={"login-content"}>
      <div className="login-content-header">
        <div>Let’s get Started!</div>

        <div
          className={`login-content-header-subscription-tag ${
            props.subscriptionType === "premium" ? "premium" : "freemium"
          }`}
        >
          <p>
            {props.subscriptionType === "premium"
              ? "Meliora Partner"
              : "Freemium"}
          </p>
          <CheckCircleIcon />
        </div>
        <p>
          It's time to get <strong> involved!</strong>
        </p>
        <p>What would you like to do next?</p>
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
          <div className={"subscription-type-info-badge"}>
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
