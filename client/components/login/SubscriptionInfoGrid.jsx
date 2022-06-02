import { Grid } from "@mui/material";
import { SubscriptionInfoCard } from "./SubscriptionInfoCard";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEarthAfrica,
  faSquarePollVertical,
  faHandHoldingDollar,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileLines,
  faUser,
  faCirclePlay,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";

export function SubscriptionInfoGrid() {
  return (
    <Grid container className={"subscription-type-information"}>
      <SubscriptionInfoCard
        header={"Pure donations"}
        text={"100% of donations go straight to the cause(s) you select."}
        icon={
          <FontAwesomeIcon
            icon={faSeedling}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={false}
      />
      <SubscriptionInfoCard
        header={"Regular Reports"}
        text={
          "Get engaging reports that tell a story of your company’s giving."
        }
        icon={
          <FontAwesomeIcon
            icon={faFileLines}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={true}
      />
      <SubscriptionInfoCard
        header={"Filter and Serach"}
        text={
          "Easily filter and find non profits that work on what you care about."
        }
        icon={
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={false}
      />
      <SubscriptionInfoCard
        header={"Inclusive Giving"}
        text={"Engage employees on choosing which causes to support.."}
        icon={
          <FontAwesomeIcon icon={faUser} className={"subscription-info-icon"} />
        }
        isPartnerOnly={true}
      />
      <SubscriptionInfoCard
        header={"Inside Stories"}
        text={"Gain access to inside stories from your chosen non-profit."}
        icon={
          <FontAwesomeIcon
            icon={faCirclePlay}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={true}
      />
      <SubscriptionInfoCard
        header={"Scheduled Giving"}
        text={"Set up a giving strategy that suits your organization."}
        icon={
          <FontAwesomeIcon
            icon={faCalendar}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={true}
      />
      <SubscriptionInfoCard
        header={"Social Responsibility"}
        text={"Noe om hvor viktig det er å bidra til verden gjennom donasjoner"}
        icon={
          <FontAwesomeIcon
            icon={faEarthAfrica}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={false}
      />

      <SubscriptionInfoCard
        header={"Useful Insight"}
        text={
          "Track and get insights on your company’s philantropic activity and impact."
        }
        icon={
          <FontAwesomeIcon
            icon={faSquarePollVertical}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={true}
      />
      <SubscriptionInfoCard
        header={"Currated Donations"}
        text={
          "Make company donations to any nonprofit in our carefully selected portfolio."
        }
        icon={
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={true}
      />
    </Grid>
  );
}
