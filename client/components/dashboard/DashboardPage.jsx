import * as React from "react";
import { useContext } from "react";
import { useLoading } from "../../useLoading";
import { Button, Grid, Link, MenuItem, Select } from "@mui/material";
import "../../styles/dashboard.css";
import LinearProgress from "@mui/material/LinearProgress";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserApiContext } from "../../api-client/userApiContext";
import { ArticleSelection } from "./ArticleSelection";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import { ImpactSection } from "./ImpactSection";
import { useNavigate } from "react-router";
import { DonationListItem } from "./DonationListItem";
import WaterIcon from "@mui/icons-material/Water";
import SchoolIcon from "@mui/icons-material/School";
import MapChart from "../../MapChart";
import { HighlightedPartners } from "./HighlightedPartners";

import placeholder_img from "../../media/dashboard_placeholder.svg";
import { LoginNextButtonB41 } from "../login/login-styles";
const DashboardPage = () => {
  //TODO: Mer beskrivende navn på state. F.eks. expandPartnerAccordion
  const [expanded, setExpanded] = React.useState(0);

  const [npo, setNpo] = React.useState("");

  const navigate = useNavigate();
  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  const handleChange1 = (event) => {
    setNpo(event.target.value);
  };

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  const highlighted = data.npo_partners;
  const history = data.donation_history;
  const npoList = data.npo_partners;

  console.log("history?", history);

  const filteredHistory = history.filter((donation) => donation.npo_id === npo);

  let donationHistory = filteredHistory.length > 0 ? filteredHistory : history;

  function iconCat(npo) {
    if (npo.category === "water") {
      return <WaterIcon />;
    }
    if (npo.category === "knowledge") {
      return <SchoolIcon />;
    }
  }

  const partners = data.npo_partners;

  const locations = [];

  partners.map((x) => locations.push(x.locations[0]));

  /* if (data.active_subscriptions.length === 0)
    return (
      <div className="dashboard-placeholder-wrapper">
        <div className="placeholder-image">
          <img src={placeholder_img} alt="placeholder_img" />
        </div>
        <div className="global-header-title" style={{ marginTop: "50px" }}>
          Find a partner and get started
        </div>
        <div className="dashboard-header-sub-title">
          Dashboard will be generated once you have subscribed to a partner
        </div>
        <Button
          variant="contained"
          sx={{ ...submitButtonStyle, marginTop: "30px" }}
          onClick={() => navigate("/discover")}
        >
          Discover
        </Button>
      </div>
    );*/

  return (
    <div className={"dashboard-wrapper"}>
      <div className={"dashboard-container"}>
        <h1>Hi {data.name}, Welcome back </h1>
        <Grid
          container
          columnSpacing={{ lg: 4, xl: 4 }}
          rowSpacing={{ lg: 4, xl: 4 }}
        >
          <ImpactSection data={data} />
          <Grid item lg={3} xl={3} className={"socialmedia-template"}>
            <div
              onClick={() => navigate("/templates")}
              className={"socialmedia-template-container"}
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600"
                }
                alt={"das"}
              />
              <div className={"socialmedia-template-content-top"}>
                <div>Share on</div>
                <div>Social Media</div>
              </div>
              <div className={"socialmedia-template-content-bot"}>
                <Link href={"/templates"} color="inherit">
                  <div>View templates</div>
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item lg={6} xl={6}>
            <HighlightedPartners
              onClick={() => navigate("/our-partners")}
              highlighted={highlighted}
              prop2={(npo, index) => {
                if (index <= 1)
                  return (
                    <Accordion
                      className={"highlighted-accordion"}
                      sx={{
                        backgroundColor: "#FCEFE7",
                        width: "97%",
                        borderRadius: "16px",
                        dropShadow: "0",
                      }}
                      expanded={expanded === index}
                      onChange={handleChange(index)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={"accordion-title-container"}>
                          {iconCat(npo)}
                          <div className={"accordion-title"}>{npo.name}</div>
                        </div>
                      </AccordionSummary>

                      <AccordionDetails sx={{ borderRadius: "16px" }}>
                        <div>
                          {npo.impact_measurement.map((impactItem) => (
                            <div
                              className={
                                "highlighted-partners-content-container"
                              }
                            >
                              <div className={"highlighted-partners-project"}>
                                {impactItem.impact_name}
                              </div>
                              <div className={"highlighted-partners-progress"}>
                                <LinearProgress
                                  sx={{
                                    width: "162px",
                                    height: "9px",
                                    backgroundColor: "#A5A5A5",
                                    position: "absolut",
                                  }}
                                  variant="determinate"
                                  value={impactItem.impact_value}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  );
              }}
            />
          </Grid>
          <Grid item xl={5} lg={5} className={"donation-history-container"}>
            <div className={"donation-history-filter"}>
              <div className={"donation-history-title"}>Donation History</div>
              {history.length > 0 ? (
                <>
                  <div className={"donation-history-filter-wrapper"}>
                    <div className={"donation-filter-select-wrapper"}>
                      <Select
                        className={"donation-filter-select"}
                        defaultValue={"Recent"}
                        onChange={handleChange1}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        sx={{
                          color: "#ffff",
                          "& .MuiSelect-iconOpen": { color: "#ffff" },
                          "& .MuiSelect-icon": { color: "#ffff" },
                          borderRadius: "10px",
                          textAlign: "center",
                        }}
                      >
                        <MenuItem value={"Recent"} label="All">
                          Recent
                        </MenuItem>
                        {npoList.map((x) => (
                          <MenuItem key={x._id} value={x._id}>
                            {x.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <Grid container justifyContent={"center"}>
                    <div className={"donation-history-timeline-container"}>
                      <Grid item>
                        <div className="donation-list-container">
                          {donationHistory
                            .slice(0)
                            .reverse()
                            .map((donation, index) => {
                              if (index <= 3)
                                return (
                                  <DonationListItem
                                    npoList={npoList}
                                    donation={donation}
                                  />
                                );
                            })}
                        </div>
                      </Grid>
                    </div>
                    <div className={"donation-see-all-wrapper"}>
                      <div
                        onClick={() => navigate("/accounting")}
                        className={"donation-see-all"}
                      >
                        See all donations
                      </div>
                    </div>
                  </Grid>{" "}
                </>
              ) : (
                <div>
                  {" "}
                  <div>
                    <div
                      style={{
                        width: "350px",
                        fontSize: "14px",
                        color: "#464D51",
                        fontWeight: "500",
                        marginTop: "75px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginTop: "100px " }}>
                        You currently have no donation history
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Grid>
          <Grid item xl={7} lg={7} className={"map"}>
            <div className="dashboard-map-container">
              <div className="map-text-container">
                <div className="map-title">Global Reach</div>
                <div className="map-subtitle">
                  Locations your contributions impact
                </div>
              </div>
              <MapChart markers={locations} />
            </div>
          </Grid>
          <Grid item xl={12} sx={{ marginTop: "40px" }}>
            <ArticleSelection />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default DashboardPage;
