//Styleguide buttons
//-----------------

//B-4.1
export const LoginNextButtonB41 = {
  maxWidth: "190px",
  maxHeight: "60px",
  minWidth: "190px",
  minHeight: "60px",
  borderRadius: "8px",
  alignSelf: "center",
  backgroundColor: "#551477",
  marginTop: "50px",
  "&:hover": {
    backgroundColor: "#aa55d9",
    color: "#FFF",
  },
};

//B-3.1
export const CreateTemplateButtonB32 = {
  mx: "10px",
  width: "140px",
  height: "45px",
  textTransform: "none",
  borderRadius: "8px",
  color: "#464D51",
  borderColor: "#637381",
  "&:hover": {
    borderColor: "#B8F0DA",
    backgroundColor: "#B8F0DA",
    color: "#000",
  },
};

//B-3.1
export const ReadMoreButtonB31 = {
  mx: "10px",
  width: "140px",
  height: "45px",
  textTransform: "none",
  borderRadius: "8px",
  backgroundColor: "#551477",
  "&:hover": {
    backgroundColor: "#7209B7",
  },
};

//---------------------
//styleguide byttons end

export const navButtonStyle = {
  fontFamily: "Montserrat",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",

  width: "190px",
  height: "60px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  textTransform: "none",
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
  textTransform: "none",
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

// Social Media Template
//    - Style for project cards

export const templateCardButtonStyle = {
  display: "flex",
  height: "130px",
  width: "120px",
  borderRadius: "8px",
  color: "#000",
  border: "solid 2px #464D51",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0px 6px",
  cursor: "pointer",
  backgroundColor: "#FFF",
  "&:hover": {
    backgroundColor: "#7209B7",
    color: "#FFF",
  },
};

export const templateSelectedCardButtonStyle = {
  display: "flex",
  height: "130px",
  width: "120px",
  borderRadius: "8px",
  border: "solid 2px #464D51",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0px 6px",
  cursor: "pointer",
  backgroundColor: "#7209B7",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#7209B7",
    color: "#FFF",
  },
};

// Social Media Template
//    - Style for social media boxes

export const socialMediaButton = {
  width: "53px",
  height: "53px",
  borderRadius: "8px",
  backgroundColor: "#FFF",
  boxShadow: "0 0 50px rgba(145, 158, 171, 0.05)",
  margin: "0 12px 0 12px",
  border: "solid 2px #637381",
  "&:hover": {
    backgroundColor: "#FFF",
    border: "solid 2px #7209B7",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
  },
};

export const selectedSocialMediaButton = {
  width: "53px",
  height: "53px",
  borderRadius: "8px",
  backgroundColor: "#FFF",
  boxShadow: "0 0 50px rgba(145, 158, 171, 0.05)",
  margin: "0 12px 0 12px",
  border: "solid 2px #7209B7",
  "&:hover": {
    backgroundColor: "#FFF",
    border: "solid 2px #7209B7",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
  },
};

// Social Media Template
//    - template format button (left side)

export const templateFormatButton = {
  width: "170px",
  height: "50px",
  fontSize: "13px",
  backgroundColor: "#FFF",
  border: "solid 1px #637381",
  borderRadius: "8px",
  color: "black",
  margin: "0 0 15px 0",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.05)",
  "&:hover": {
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
  },
};

export const selectedTemplateFormatButton = {
  width: "170px",
  height: "50px",
  fontSize: "13px",
  backgroundColor: "#B8F0DA",
  borderRadius: "8px",
  color: "black",
  margin: "0 0 15px 0",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.05)",
  "&:hover": {
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
  },
};

// Social Media Template
//    - template format button (left side)

export const templateCard = {
  border: "solid 2px #637381",
  height: "210px",
  width: "140px",
  margin: "5px 15px 0px 0px",
  borderRadius: "16px",
  backgroundColor: "#FFF",

  "&:hover": {
    border: "solid 3px #7209B7",
    backgroundColor: "#FFF",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.15), 0px 16px 32px -4px rgba(148, 157, 176, 0.15)",
  },
};

export const selectedTemplateCard = {
  border: "solid 3px #7209B7",
  height: "210px",
  width: "140px",
  margin: "5px 15px 0px 0px",
  borderRadius: "16px",
  "&:hover": {
    border: "solid 3px #7209B7",
    backgroundColor: "#FFF",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.15), 0px 16px 32px -4px rgba(148, 157, 176, 0.15)",
  },
};

export const templateCardIconStyle = {
  fontSize: "40px",
  color: "#000",
};

export const purplePlatformButton = {
  color: "#FFF",
  height: "45px",
  width: "140px",
  margin: "0 10px 0 10px",
  borderRadius: "8px",
  backgroundColor: "#7209B7",
  "&:hover": {
    backgroundColor: "#A400FF",
  },
};

export const backPlatformButton = {
  color: "#000",
  height: "45px",
  width: "140px",
  margin: "0 10px 0 10px",
  borderRadius: "8px",
  borderColor: "#637381",
  backgroundColor: "#FFF",
  border: "solid 0.5px lightgrey",
  "&:hover": {
    backgroundColor: "#B8F0DA",
    color: "#637381",
    borderColor: "#FFF",
  },
};

// DONATE MODAL

export const leftPaymentModalFreqBtn = {
  fontSize: "12px",
  fontWeight: "500",
  width: "157px",
  height: "42px",
  backgroundColor: "#FFF",
  border: "0",
  color: "black",
  marginLeft: "-2px",
  borderRadius: "8px 0px 0px 8px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  "&:hover": {
    border: "0",
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  },
};

export const leftSelectedPaymentModalFreqBtn = {
  fontSize: "12px",
  fontWeight: "500",
  width: "157px",
  height: "42px",
  backgroundColor: "#B8F0DA",
  border: "0",
  color: "black",
  marginLeft: "-2px",
  borderRadius: "8px 0px 0px 8px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  "&:hover": {
    border: "0",
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  },
};

export const rightPaymentModalFreqBtn = {
  fontSize: "12px",
  fontWeight: "500",
  width: "157px",
  height: "42px",
  backgroundColor: "#FFF",
  border: "0",
  color: "black",
  marginLeft: "-2px",
  borderRadius: "0px 8px 8px 0px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  "&:hover": {
    border: "0",
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  },
};

export const rightSelectedPaymentModalFreqBtn = {
  fontSize: "12px",
  fontWeight: "500",
  width: "157px",
  height: "42px",
  backgroundColor: "#B8F0DA",
  border: "0",
  color: "black",
  marginLeft: "-2px",
  borderRadius: "0px 8px 8px 0px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  "&:hover": {
    border: "0",
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  },
};

export const donateAmountButton = {
  fontSize: "12px",
  fontWeight: "500",
  width: "124px",
  height: "42px",
  backgroundColor: "#FFF",
  border: "0",
  color: "black",
  margin: "6px",
  borderRadius: "8px 8px 8px 8px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.2)",
  "&:hover": {
    border: "0",
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  },
};

export const selectedDonateAmountButton = {
  fontSize: "12px",
  fontWeight: "500",
  width: "124px",
  height: "42px",
  backgroundColor: "#B8F0DA",
  border: "0",
  color: "black",
  margin: "6px",

  borderRadius: "8px 8px 8px 8px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.2)",
  "&:hover": {
    border: "0",
    backgroundColor: "#B8F0DA",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  },
};

export const allocationDonateButton = {
  fontSize: "12px",
  fontWeight: "500",
  width: "96px",
  height: "42px",
  backgroundColor: "#FFF",
  border: "0",
  color: "black",
  marginLeft: "-2px",
  borderRadius: "8px 8px 8px 8px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.2)",
};

export const greenWidePlatformButton = {
  height: "45px",
  width: "410px",
  borderRadius: "8px",
  backgroundColor: "#B8F0DA",
  color: "#000",
  fontSize: "12px",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  "&:hover": {
    backgroundColor: "#a8e8d0",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.1)",
  },
};

export const selectedFilterTabStyleNew = {
  color: "#fff",
  backgroundColor: "#551477",
  fontSize: "18px",
  border: "solid 1px #637381",
  width: "260px",
  height: "45px",
  borderRadius: "8px 8px 0 0",
  fontWeight: "600px",
  lineHeight: "22px",
  "&:hover": {
    backgroundColor: "#551477",
  },
};

export const unselectedFilterTabStyle = {
  color: "#000000",
  border: "solid 1px #637381",
  width: "240px",
  height: "38px",
  borderRadius: "8px 8px 0 0",
  fontSize: "14px",
  fontWeight: "600px",
};
