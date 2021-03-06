import { Grid } from "@mui/material";
import { SubscriptionInfoCard } from "./SubscriptionInfoCard";
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

export function SubscriptionInfoModal() {
  return (
    <Grid container columnSpacing={3} rowSpacing={4}>
      <SubscriptionInfoCard
        header={"Pure donations"}
        text={"100% of donations go straight to the cause(s) you select"}
        icon={
          <FontAwesomeIcon
            icon={faSeedling}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={false}
      />
      <SubscriptionInfoCard
        header={"Template Reports"}
        text={"Get engaging reports that tell a story of your company’s giving"}
        icon={
          <FontAwesomeIcon
            icon={faFileLines}
            className={"subscription-info-icon"}
          />
        }
        isPartnerOnly={true}
      />
      <SubscriptionInfoCard
        header={"Filter and Search"}
        text={
          "Easily filter and find non profits that work on what you care about"
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
        text={"Engage employees on choosing which causes to support"}
        icon={
          <FontAwesomeIcon icon={faUser} className={"subscription-info-icon"} />
        }
        isPartnerOnly={true}
      />
      <SubscriptionInfoCard
        header={"Inside Stories & Wrapped"}
        text={
          "Access to inside stories from your chosen non-profit and your yearly contributions"
        }
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
        text={"Set up a giving strategy that suits your organization"}
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
        text={
          "Make a difference by donating to projects that are changing the world"
        }
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
          "Track and get insights on your company’s philanthropic activity and impact"
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
        header={"Curated Donations"}
        text={
          "Make company donations to any nonprofit in our carefully selected portfolio"
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
