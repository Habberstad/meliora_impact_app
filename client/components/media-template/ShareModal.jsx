import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import { modalStyle } from "../wrapped/modal-style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ReadMoreButtonB31 } from "../../styles/button-style-config";
import * as React from "react";

export function ShareModal({
  open,
  onClose,
  onClick,
  onClick1,
  onClick2,
  onClick3,
  placeholder,
  copiedText,
  onClick4,
  onClick5,
  onClick6,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <div className="meliora-wrapped-share-modal">
          <h1>Share</h1>
          <div className="meliora-wrapped-share-modal-buttons">
            <Button variant={"outlined"} onClick={onClick}>
              <div>
                <LinkedInIcon sx={{ fontSize: 50 }} />
              </div>
            </Button>
            <Button variant={"outlined"} onClick={onClick1}>
              <div>
                <TwitterIcon sx={{ fontSize: 50 }} />
              </div>
            </Button>
            <Button variant={"outlined"} onClick={onClick2}>
              <div>
                <FacebookIcon sx={{ fontSize: 50 }} />
              </div>
            </Button>
            <Tooltip title={"Not available at this moment!"} placement="top">
              <Button variant={"outlined"} onClick={onClick3}>
                <div>
                  <InstagramIcon sx={{ fontSize: 50 }} />
                </div>
              </Button>
            </Tooltip>
          </div>
          <TextField
            className="meliora-wrapped-share-modal-textfield"
            disabled={true}
            placeholder={placeholder}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={
                      copiedText === placeholder
                        ? "Copied!"
                        : "Copy To Clipboard"
                    }
                    placement="top"
                  >
                    <IconButton onClick={onClick4}>
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
              onClick={onClick5}
            >
              Download
            </Button>
            <Button
              variant={"contained"}
              sx={ReadMoreButtonB31}
              style={{ margin: "20px 0px 0px 5px" }}
              onClick={onClick6}
            >
              Share
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
