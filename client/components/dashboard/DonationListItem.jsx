import { CurrencyFormater, DateFormater } from "../shared-components/dateFormater";
import * as React from "react";
import { useContext } from "react";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

export function DonationListItem({ donation, npoList }) {
  const { listNpos } = useContext(NpoApiContext);
  const { loading, error, data } = useLoading(async () => await listNpos(), []);

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  const findNpo = data.filter((npo) => npo._id === donation.npo_id);
  const npo = { ...findNpo[0] };

  return (
    <div className="donation-list-item">
      <div className="donation-timeline-dot"></div>
      <div className="donation-data-container">
        <div className="left-donation-text">
          <div style={{ fontSize: "13px", fontWeight: "500" }}>
            Donated to{" "}
            <span style={{ color: "#551477", fontWeight: "600" }}>
              {npo.name}
            </span>
          </div>
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
        <div className="right-donation-text"><CurrencyFormater numb={donation.payment_amount}/></div>
      </div>
    </div>
  );
}
