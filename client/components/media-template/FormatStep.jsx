import { Button } from "@mui/material";
import { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import ShortTextIcon from "@mui/icons-material/ShortText";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  selectedSocialMediaButton,
  selectedTemplateCard,
  selectedTemplateFormatButton,
  socialMediaButton,
  templateCard,
  templateCardIconStyle,
  templateFormatButton,
} from "../../styles/button-style-config";

const formats = ["Coming soon", "Coming soon", "Coming soon", "Coming soon"];
const cards = ["Twitter", "Facebook", "Instagram", "Newsletter", "Newsletter"];
const templateFormats = ["Text", "Visual Data", "Updates"];

const FormatStep = () => {
  const [isPlatformSelected, setIsPlatformSelected] = useState(false);
  const [isFormatSelected, setIsFormatSelected] = useState(false);
  const [isTemplateCardSelected, setIsTemplateCardSelected] = useState(false);

  const handleShowFormatButtons = () => {
    setIsPlatformSelected((prevState) => !prevState);
  };
  const handleShowTemplateCards = () => {
    setIsFormatSelected((prevState) => !prevState);
  };

  const handleShowSelectedCard = () => {
    setIsTemplateCardSelected((prevState) => !prevState);
  };

  return (
    <div>
      <div className="template-content-title">
        <div>Select Format</div>
      </div>
      <div className="template-content-subtitle">
        Select media platform and draft template.
      </div>
      <div className="template-step-main-container">
        <div className="template-format-buttons">
          {formats.map((x) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                disabled={true}
                sx={{
                  width: "53px",
                  height: "53px",
                  borderRadius: "8px",
                  backgroundColor: "#FFF",
                  boxShadow: "0 0 50px rgba(145, 158, 171, 0.05)",
                  margin: "0 12px 0 12px",
                  border: "solid 1px #637381",
                }}
              ></Button>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#464D51",
                  margin: "5px",
                  textAlign: "center",
                }}
              >
                {x}
              </div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleShowFormatButtons}
              variant="outlined"
              sx={
                isPlatformSelected
                  ? selectedSocialMediaButton
                  : socialMediaButton
              }
            >
              <TextSnippetIcon sx={{ fontSize: "30px", color: "#000" }} />
            </Button>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#464D51",
                margin: "5px",
              }}
            >
              Newsletter
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            marginRight: "190px",
          }}
        >
          <div className="template-left-section">
            <Button
              variant="contained"
              disabled={!isPlatformSelected}
              onClick={handleShowTemplateCards}
              sx={
                isFormatSelected
                  ? selectedTemplateFormatButton
                  : templateFormatButton
              }
            >
              Infographic
            </Button>
            {templateFormats.map((x) => (
              <Button
                variant="contained"
                disabled={true}
                sx={templateFormatButton}
              >
                {x}
              </Button>
            ))}
          </div>

          <div className="template-right-section">
            {isPlatformSelected && isFormatSelected ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: "50px",
                }}
              >
                <Button
                  onClick={handleShowSelectedCard}
                  sx={
                    isTemplateCardSelected ? selectedTemplateCard : templateCard
                  }
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <ImageIcon sx={templateCardIconStyle} />
                      <ImageIcon sx={templateCardIconStyle} />
                    </div>

                    <div>
                      <ShortTextIcon sx={templateCardIconStyle} />
                      <ShortTextIcon sx={templateCardIconStyle} />
                    </div>
                    <div>
                      <ShortTextIcon sx={templateCardIconStyle} />
                      <ImageIcon sx={templateCardIconStyle} />
                    </div>
                  </div>
                </Button>
                {cards.map((x) => (
                  <Button disabled={true} sx={templateCard}>
                    Coming soon
                  </Button>
                ))}
              </div>
            ) : (
              <div style={{ marginTop: "100px" }}>
                Please select platform & format
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatStep;
