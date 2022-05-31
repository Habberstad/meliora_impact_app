import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
      <div className="login-content-main">heii</div>
    </div>
  );
};
