import "../../styles/melioraWrapped.css";
import melioraWrappedTop from "../../media/group3.png";
import melioraWrappedLeft from "../../media/group1.png";
import melioraWrappedRight from "../../media/group2.png";
import melioraLogo from "../../media/meliora_logo_transparent.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
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
import {
  CreateTemplateButtonB32,
  purplePlatformButton,
  ReadMoreButtonB31,
} from "../../styles/button-style-config";

const MelioraWrapped = () => {
  {
    /* MODAL METHODS */
  }
  const [view, setView] = React.useState(false);
  const viewHandleOpen = () => setView(true);
  const viewHandleClose = () => setView(false);

  const [share, setShare] = React.useState(false);
  const shareHandleOpen = () => setShare(true);
  const shareHandleClose = () => setShare(false);

  {
    /* SHARE METHODS */
  }
  const [sharePlaceholder, setSharePlaceholder] = useState(
    "Where would you like to share to?"
  );
  const [copiedText, setCopiedText] = useState();
  const [shareLink, setShareLink] = useState("");

  const ahref = "https://youtu.be/DmQ4Dqxs0HI";
  const encodedAhref = encodeURIComponent(ahref);
  const facebookPlaceholder = "Share on Facebook...";
  const linkedInPlaceholder = "Share on Linked-in...";
  const twitterPlaceholder = "Share on Twitter...";
  const instagramPlaceholder = "Share on Instagram...";

  const handleShare = () => {
    if (shareLink == "") alert("Unavailable");
    else open(shareLink);
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.download = `download.txt`;
    downloadLink.href = "./download.txt";
    downloadLink.click();
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
        <div>Powered by SEEN.io</div>
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

          <Modal open={view} onClose={viewHandleClose}>
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

          <Modal open={share} onClose={shareHandleClose}>
            <Box sx={modalStyle}>
              <div className="meliora-wrapped-share-modal">
                <h1>Share</h1>
                <div className="meliora-wrapped-share-modal-buttons">
                  <Button
                    variant={"outlined"}
                    onClick={() => {
                      setSharePlaceholder(linkedInPlaceholder);
                      setShareLink(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodedAhref}`
                      );
                      console.log(shareLink);
                    }}
                  >
                    <div>
                      <LinkedInIcon sx={{ fontSize: 50 }} />
                    </div>
                  </Button>
                  <Button
                    variant={"outlined"}
                    onClick={() => {
                      setSharePlaceholder(twitterPlaceholder);
                      setShareLink(
                        `https://twitter.com/intent/tweet?url=${encodedAhref}`
                      );
                      console.log(shareLink);
                    }}
                  >
                    <div>
                      <TwitterIcon sx={{ fontSize: 50 }} />
                    </div>
                  </Button>
                  <Button
                    variant={"outlined"}
                    onClick={() => {
                      setSharePlaceholder(facebookPlaceholder);
                      setShareLink(
                        `https://www.facebook.com/sharer/sharer.php?u=${ahref}`
                      );
                      console.log(shareLink);
                    }}
                  >
                    <div>
                      <FacebookIcon sx={{ fontSize: 50 }} />
                    </div>
                  </Button>
                  <Tooltip
                    title={"Not available at this moment!"}
                    placement="top"
                  >
                    <Button
                      variant={"outlined"}
                      onClick={() => {
                        setSharePlaceholder(instagramPlaceholder);
                        setShareLink(``);
                        console.log(shareLink);
                      }}
                    >
                      <div>
                        <InstagramIcon sx={{ fontSize: 50 }} />
                      </div>
                    </Button>
                  </Tooltip>
                </div>
                <TextField
                  className="meliora-wrapped-share-modal-textfield"
                  disabled={true}
                  placeholder={sharePlaceholder}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip
                          title={
                            copiedText === sharePlaceholder
                              ? "Copied!"
                              : "Copy To Clipboard"
                          }
                          placement="top"
                        >
                          <IconButton
                            onClick={() => {
                              navigator.clipboard.writeText(sharePlaceholder);
                              setCopiedText(sharePlaceholder);
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
                    variant={"contained"}
                    sx={ReadMoreButtonB31}
                    style={{ margin: "20px 5px 0px 0px" }}
                    onClick={handleDownload}
                  >
                    Download
                  </Button>
                  <Button
                    variant={"contained"}
                    sx={ReadMoreButtonB31}
                    style={{ margin: "20px 0px 0px 5px" }}
                    onClick={handleShare}
                  >
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
