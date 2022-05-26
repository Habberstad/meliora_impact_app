import dnbNewsletter from "./media/dnb_newsletter.png";
import dnbLogo from "./media/dnb-logo.png";
import dnbPalette from "./media/dnb-palette.png";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import EditIcon from "@mui/icons-material/Edit";

import "../../styles/template-styles/template-styles.css";

export const CustomizeStep = () => {
  return (
    <div>
      <div className="template-content-title">
        <div>Customize</div>
      </div>
      <div className="template-content-subtitle">
        Personalize your newsletter.
      </div>
      <div className="template-content-subtitle">
        Upload company logo, select font settings and pick color palette.
      </div>
      <div>
        <div className="customize-container">
          <div className="newsletter-left-section">
            <img
              style={{ width: "530px", height: "690px" }}
              src={dnbNewsletter}
              alt="newsletter"
            />
          </div>
          <div className="newsletter-right-section">
            <div style={{ marginTop: "50px" }}>
              <div className="customize-editor-title">Upload logo</div>
              <img src={dnbLogo} alt="logo" />
            </div>
            <div style={{ marginTop: "50px" }}>
              <div className="customize-editor-title">Select font</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TextFieldsIcon sx={{ fontSize: "50px" }} />
                <EditIcon sx={{ marginTop: "17px" }} />
                <div style={{ marginTop: "24px" }}>Montserrat</div>
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <div className="customize-editor-title">Select palette</div>
              <img src={dnbPalette} alt="palette" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
