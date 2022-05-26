import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export function SoMeTemplateSelectButtons() {
  return (
    <>
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
        >
          <FacebookIcon />
        </Button>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#464D51",
            margin: "5px",
            textAlign: "center",
          }}
        >
          Coming soon
        </div>
      </div>{" "}
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
        >
          <LinkedInIcon />
        </Button>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#464D51",
            margin: "5px",
            textAlign: "center",
          }}
        >
          Coming soon
        </div>
      </div>
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
        >
          <TwitterIcon />
        </Button>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#464D51",
            margin: "5px",
            textAlign: "center",
          }}
        >
          Coming soon
        </div>
      </div>
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
        >
          <InstagramIcon />
        </Button>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#464D51",
            margin: "5px",
            textAlign: "center",
          }}
        >
          Coming soon
        </div>
      </div>
    </>
  );
}
