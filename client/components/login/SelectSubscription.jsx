import { Button, Grid } from "@mui/material";
import { BackButton } from "./BackButton";
import { useNavigate } from "react-router";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { SubscriptionInfoCard } from "./SubscriptionInfoCard";

export const SelectSubscription = (props) => {
  const navigate = useNavigate();

  return (
    <div className={"login-content"}>
      <BackButton />
      <div className={"login-content-header"}>
        <h3>Philanthropy is everything</h3>
        <p>Get started for free </p>
        <p>Or</p>
        <p>Get access to all our extended features as a Meliora Partner</p>
      </div>
      <div className="login-content-main">
        <Button
          onClick={() => {
            console.log("Fremium");
            props.handleClick("freemium");
            props.sumbit();
          }}
          sx={{
            mb: "22px",
            borderColor: "#637381",
            "&:hover": {
              borderColor: "#000",
              backgroundColor: "#FFF",
              color: "#637381",
            },
          }}
          fullWidth
          variant={"outlined"}
          size={"large"}
        >
          Freeemium
        </Button>
        <Button
          onClick={() => {
            console.log("premium");
            props.handleClick("premium");
            navigate("/select-payment-method");
          }}
          sx={{
            mb: "22px",
            borderColor: "#A400FF",
            backgroundColor: "#F6E8FF",
            "&:hover": {
              borderColor: "#000",
              backgroundColor: "#FFF",
              color: "#637381",
            },
          }}
          fullWidth
          variant={"outlined"}
          size={"large"}
        >
          premium
        </Button>
      </div>
      <Grid container className={"subscription-type-information"}>
        <SubscriptionInfoCard
          header={"Pure donations"}
          text={"100% of donations go straight to the cause(s) you select."}
          icon={<LightModeOutlinedIcon />}
          isPartnerOnly={false}
        />
        <SubscriptionInfoCard
          header={"Regular Reports"}
          text={
            "Get engaging reports that tell a story of your company’s giving."
          }
          icon={<AssignmentOutlinedIcon />}
          isPartnerOnly={true}
        />
        <SubscriptionInfoCard
          header={"Filter and Serach"}
          text={
            "Easily filter and find non profits that work on what you care about."
          }
          icon={<SearchOutlinedIcon />}
          isPartnerOnly={false}
        />
        <SubscriptionInfoCard
          header={"Inclusive Giving"}
          text={"Engage employees on choosing which causes to support.."}
          icon={<PersonAddAlt1OutlinedIcon />}
          isPartnerOnly={true}
        />
        <SubscriptionInfoCard
          header={"Inside Stories"}
          text={"Gain access to inside stories from your chosen non-profit."}
          icon={<SearchOutlinedIcon />}
          isPartnerOnly={true}
        />
        <SubscriptionInfoCard
          header={"Scheduled Giving"}
          text={"Set up a giving strategy that suits your organization."}
          icon={<SearchOutlinedIcon />}
          isPartnerOnly={true}
        />
        <SubscriptionInfoCard
          header={"Social Responsibility"}
          text={
            "Noe om hvor viktig det er å bidra til verden gjennom donasjoner"
          }
          icon={<SearchOutlinedIcon />}
          isPartnerOnly={false}
        />

        <SubscriptionInfoCard
          header={"Useful Insight"}
          text={
            "Track and get insights on your company’s philantropic activity and impact."
          }
          icon={<SearchOutlinedIcon />}
          isPartnerOnly={true}
        />
        <SubscriptionInfoCard
          header={"Currated Donations"}
          text={
            "Make company donations to any nonprofit in our carefully selected portfolio."
          }
          icon={<SearchOutlinedIcon />}
          isPartnerOnly={true}
        />
      </Grid>
    </div>
  );
};
