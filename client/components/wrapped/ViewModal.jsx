import { Box, Modal } from "@mui/material";
import { shareModalStyle } from "./share-modal-style";
import * as React from "react";

export function ViewModal(props) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={shareModalStyle} style={{ width: 800 }}>
        <div className="meliora-wrapped-view-modal">Let's go Meliora!</div>

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
  );
}
