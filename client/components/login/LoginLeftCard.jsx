import MelioraIcon from "../../media/meliora_logo.png";
import LoginCardImage from "../../media/login_card_img.png";

export function LoginLeftCard() {
  return (
    <div className="login-left-card">
      <img
        className="login-left-card-icon"
        src={MelioraIcon}
        alt="company-icon"
      />
      <div className="login-left-card-content">
        <h1>
          Meliora <span style={{ color: "#7209B7" }}>Connect</span>
        </h1>
        <h1>Together We Can Change The World</h1>
        <img src={LoginCardImage} alt="company-icon" />
      </div>
    </div>
  );
}
