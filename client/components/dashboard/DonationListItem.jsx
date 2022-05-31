import { DateFormater } from "../shared-components/dateFormater";
import * as React from "react";

export function DonationListItem({ donation, npoList }) {
  const findNpo = npoList.filter((x) => x._id === donation.npo_id);
  const npo = { ...findNpo[0] };

  return (
    <div className="donation-list-item">
      <div className="donation-timeline-dot"></div>
      <div className="donation-data-container">
        <div className="left-donation-text">
          <div style={{ fontSize: "14px", fontWeight: "500" }}>{npo.name}</div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginTop: "3px",
            }}
          >
            <DateFormater date={donation.date} />
          </div>
        </div>
        <div className="right-donation-text">{donation.payment_amount}kr</div>
      </div>
    </div>
  );
}
