export const navButtonStyle = {
  fontFamily: "Montserrat",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",

  width: "190px",
  height: "60px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  textTransform: "lowercase",
  fontSize: "16px",
  fontWeight: 500,
  color: "#353535",
  "&:hover": {
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
  },
};
export const highlightedNavButtonStyle = {
  fontFamily: "Montserrat",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",

  width: "190px",
  height: "60px",
  borderRadius: "8px",
  backgroundColor: "#B8F0DA",
  textTransform: "lowercase",
  fontSize: "16px",
  fontWeight: 500,
  color: "#353535",
  "&:hover": {
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
  },
};

export const outlinedTabButtonStyle = {
  color: "#000",
  borderBottom: "2.5px solid #CFD8DC",
  padding: "20px 15px 10px 15px",
  borderRadius: "0",
  fontWeight: "500",
  fontSize: "13px",
  "&:hover": {
    borderBottom: "2.5px solid #7209B7",
    backgroundColor: "#FAFAFA",
  },
};
export const highlightedOutlinedTabButtonStyle = {
  color: "#000",
  borderBottom: "2.5px solid #7209B7",
  backgroundColor: "#FAFAFA",
  padding: "20px 15px 10px 15px",
  borderRadius: "0",
  fontWeight: "500",
  fontSize: "13px",
};

export const hoverTabStyle = {
  color: "#000",
  borderBottom: "3px solid #CFD8DC",
  padding: "20px 50px 5px 20px",
  borderRadius: "0px",
  fontWeight: "bold",
  fontFamily: "Montserrat",
  fontSize: "20px",

  "&:hover": {
    borderBottom: "3px solid #7209B7",
    backgroundColor: "#FAFAFA",
  },
};

export const selectedTabStyle = {
  color: "#000",
  borderBottom: "3px solid #7209B7",
  padding: "20px 50px 5px 20px",
  borderRadius: "0px",
  fontWeight: "bold",
  fontFamily: "Montserrat",
  fontSize: "20px",
  "&:hover": {
    borderBottom: "3px solid #7209B7",
    backgroundColor: "#FAFAFA",
  },
};
