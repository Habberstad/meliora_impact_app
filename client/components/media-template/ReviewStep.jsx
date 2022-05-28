import dnbNewsletter from "./media/dnb_newsletter.png";

import "../../styles/template-styles/template-styles.css";

const ReviewStep = () => {
  return (
    <div>
      <div className="template-content-title">
        <div>Review draft</div>
      </div>

      <div className="template-content-subtitle">
        You can download the newsletter as PDF or share on social media
      </div>
      <div>
        <div className="customize-container">
          <img
            style={{ width: "530px", height: "690px" }}
            src={dnbNewsletter}
            alt="newsletter"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
