import "../../styles/melioraWrapped.css";
import melioraWrappedTop from "../../media/group3.png";
import melioraWrappedLeft from "../../media/group1.png";
import melioraWrappedRight from "../../media/group2.png";
import melioraLogo from "../../media/meliora_logo_transparent.png";
import linkedinLogo from "../../media/linkedin_logo.png";
import twitterLogo from "../../media/twitter_logo.png";
import facebookLogo from "../../media/facebook_logo.png";
import instagramLogo from "../../media/instragram_logo.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import { modalStyle } from "./modal-style";
import { useState } from "react";

const MelioraWrapped = () => {
  const [viewIsOpen, viewSetOpen] = React.useState(false);
  const viewHandleOpen = () => viewSetOpen(true);
  const viewHandleClose = () => viewSetOpen(false);

  const [shareIsOpen, shareSetOpen] = React.useState(false);
  const shareHandleOpen = () => shareSetOpen(true);
  const shareHandleClose = () => shareSetOpen(false);

  const [fieldPlaceholder, setFieldPlaceholder] = useState(
    "Where would you like to share to?"
  );
  const [copiedText, setCopiedText] = useState();

  const facebookPlaceholder = "Share on Facebook...";
  const linkedInPlaceholder = "Share on Linked-in...";
  const twitterPlaceholder = "Share on Twitter...";
  const instagramPlaceholder = "Share on Instagram...";
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./download.txt";
    link.click();
  };

  return (
    <div className="meliora-wrapped-container">
      <div className="meliora-wrapped-images">
        <div className="meliora-wrapped-left">
          <img src={melioraWrappedLeft} alt="backgroundimage" />
        </div>
        <div className="meliora-wrapped-top">
          <img src={melioraWrappedTop} alt="backgroundimage" />
        </div>
        <div className="meliora-wrapped-right">
          <img src={melioraWrappedRight} alt="backgroundimage" />
        </div>
      </div>

      <div className="meliora-wrapped-content">
        <div className="meliora-wrapped-title">
          <img src={melioraLogo} alt="logo" />
          <div>Meliora Wrapped</div>
        </div>
        <div className="meliora-wrapped-buttons">
          <Button
            className="button"
            variant={"contained"}
            onClick={() => {
              viewHandleOpen();
            }}
          >
            <PlayArrowOutlinedIcon sx={{ fontSize: 50 }} />
            <div>View</div>
          </Button>

          <Button
            className="button"
            variant={"contained"}
            onClick={() => {
              shareHandleOpen();
            }}
          >
            <IosShareOutlinedIcon
              sx={{ fontSize: 35 }}
              style={{ paddingRight: 10 }}
            />
            <div>Share</div>
          </Button>

          <Modal open={viewIsOpen} onClose={viewHandleClose}>
            <Box sx={modalStyle} style={{ width: 800 }}>
              <div className="meliora-wrapped-view-modal">
                Let's go Meliora!
              </div>

              <iframe
                className="video-player"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Modal>

          <Modal open={shareIsOpen} onClose={shareHandleClose}>
            <Box sx={modalStyle}>
              <div className="meliora-wrapped-share-modal">
                <h1>Share</h1>
                <div className="meliora-wrapped-share-modal-buttons">
                  <Button
                    onClick={() => {
                      setFieldPlaceholder(linkedInPlaceholder);
                    }}
                  >
                    <img src={linkedinLogo} />
                  </Button>
                  <Button
                    onClick={() => {
                      setFieldPlaceholder(twitterPlaceholder);
                    }}
                  >
                    <img src={twitterLogo} />
                  </Button>
                  <Button
                    onClick={() => {
                      setFieldPlaceholder(facebookPlaceholder);
                    }}
                  >
                    <img src={facebookLogo} />
                  </Button>
                  <Button
                    onClick={() => {
                      setFieldPlaceholder(instagramPlaceholder);
                    }}
                  >
                    <img src={instagramLogo} />
                  </Button>
                </div>
                <TextField
                  className="meliora-wrapped-share-modal-textfield"
                  placeholder={fieldPlaceholder}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip
                          title={
                            copiedText === fieldPlaceholder
                              ? "Copied!"
                              : "Copy To Clipboard"
                          }
                          placement="top"
                        >
                          <IconButton
                            onClick={() => {
                              navigator.clipboard.writeText(fieldPlaceholder);
                              setCopiedText(fieldPlaceholder);
                            }}
                          >
                            <ContentCopyIcon />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="meliora-wrapped-share-modal-buttons-bot">
                  <Button
                    className="button"
                    variant={"contained"}
                    onClick={onDownload}
                  >
                    Download
                  </Button>
                  <Button className="button" variant={"contained"}>
                    Share
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="meliora-wrapped-punchline">
          <div>2021 Wrapped</div>
        </div>
        <div className="meliora-wrapped-info">
          <div>
            We have created a video with highlights of the people & projects
            your donations have touched.
            <br></br>
            <br></br>
            Thank you for your contribution!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MelioraWrapped;
