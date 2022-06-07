import { Grid } from "@mui/material";

export function SubscriptionInfoCard({ header, text, icon, isPartnerOnly }) {
  return (
    <Grid item sm={6} md={4}>
      <div className={"subscription-type-information-content"}>
        {icon}
        <p style={{ fontWeight: "bold" }}>{header}</p>
        <p>{text}</p>
        {isPartnerOnly && (
          <div className={"subscription-type-info-badge"}>
            <p>Partner only</p>
          </div>
        )}
      </div>
    </Grid>
  );
}
