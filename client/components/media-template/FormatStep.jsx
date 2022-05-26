import { Button } from "@mui/material";
import { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import ShortTextIcon from "@mui/icons-material/ShortText";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import {
  selectedSocialMediaButton,
  selectedTemplateCard,
  selectedTemplateFormatButton,
  socialMediaButton,
  templateCard,
  templateCardIconStyle,
  templateFormatButton,
} from "../../styles/button-style-config";
import { SoMeTemplateSelectButtons } from "./SoMeTemplateSelectButtons";

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
          <SoMeTemplateSelectButtons />
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
