import { Grid } from "@mui/material";
import { SubscriptionInfoCard } from "./SubscriptionInfoCard";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

export function SubscriptionInfoGrid() {
  return (
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
        text={"Noe om hvor viktig det er å bidra til verden gjennom donasjoner"}
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
  );
}
