import "../../styles/melioraWrapped.css";
import melioraWrappedTop from "../../media/wrapped/group3.png";
import melioraWrappedLeft from "../../media/wrapped/group1.png";
import melioraWrappedRight from "../../media/wrapped/group2.png";
import melioraLogo from "../../media/meliora_logo_transparent.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import * as PropTypes from "prop-types";
import { ShareModal } from "./ShareModal";
import { ViewModal } from "./ViewModal";

ShareModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func,
  onClick3: PropTypes.func,
  placeholder: PropTypes.string,
  copiedText: PropTypes.func,
  onClick4: PropTypes.func,
  onClick5: PropTypes.func,
  onClick6: PropTypes.func,
};

ViewModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
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

          <ViewModal open={view} onClose={viewHandleClose} />

          <ShareModal
            open={share}
            onClose={shareHandleClose}
            onClick={() => {
              setSharePlaceholder(linkedInPlaceholder);
              setShareLink(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedAhref}`
              );
            }}
            onClick1={() => {
              setSharePlaceholder(twitterPlaceholder);
              setShareLink(
                `https://twitter.com/intent/tweet?url=${encodedAhref}`
              );
            }}
            onClick2={() => {
              setSharePlaceholder(facebookPlaceholder);
              setShareLink(
                `https://www.facebook.com/sharer/sharer.php?u=${ahref}`
              );
            }}
            onClick3={() => {
              setSharePlaceholder(instagramPlaceholder);
              setShareLink(``);
            }}
            placeholder={sharePlaceholder}
            copiedText={copiedText}
            onClick4={() => {
              navigator.clipboard.writeText(sharePlaceholder);
              setCopiedText(sharePlaceholder);
            }}
            onClick5={handleDownload}
            onClick6={handleShare}
          />
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
