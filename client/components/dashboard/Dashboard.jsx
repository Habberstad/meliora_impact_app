import * as React from "react";
import { useContext } from "react";
import { useLoading } from "../../useLoading";
import { Grid, InputLabel, Link, MenuItem, Select } from "@mui/material";
import "../../styles/dashboard.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LinearProgress from "@mui/material/LinearProgress";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TimelineContent } from "@mui/lab";
import { UserApiContext } from "../../api-client/userApiContext";
import * as PropTypes from "prop-types";
import { ArticleSelection } from "./ArticleSelection";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import { ImpactSection } from "./ImpactSection";
import WaterIcon from "@mui/icons-material/Water";
import { useNavigate } from "react-router";
import { DateFormater } from "../shared-components/dateFormater";

const Dashboard = () => {
  //TODO: Mer beskrivende navn på state. F.eks. expandPartnerAccordion
  const [expanded, setExpanded] = React.useState(0);

  const [npo, setNpo] = React.useState("");

  // DATA FETCHING
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
  console.log("high", highlighted);
  const history = data.donation_history;
  console.log("his" + history);
  const npos = data.npo_partners;
  console.log("npo" + npos);

  return (
    <div className={"dashboard-wrapper"}>
      <div className={"dashboard-container"}>
        <h1>Hi, Welcome back </h1>
        <Grid container direction={"column"}>
          <Grid container columnSpacing={{ lg: 4, xl: 4 }}>
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
                  <div>Share on </div>
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
              <div className={"highlighted-partners-container"}>
                <div className={"highlighted-title-view-container"}>
                  <div
                    className={"highlighted-partners-title"}
                    style={{
                      fontSize: "20px",
                      margin: "10px",
                      fontWeight: "600",
                      marginLeft: "10px",
                    }}
                  >
                    Highlighted partners
                  </div>
                  <div
                    onClick={() => navigate("/our-partners")}
                    className="highlighted-view-all"
                  >
                    View all
                  </div>
                </div>
                <div className={"accordion-wrapper"}>
                  {highlighted.map((npo, index) => {
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
                              <LocalHospitalIcon />
                              <div className={"accordion-title"}>
                                {npo.name}
                              </div>
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
                                  <div
                                    className={"highlighted-partners-project"}
                                  >
                                    {impactItem.impact_name}
                                  </div>
                                  <div
                                    className={"highlighted-partners-progress"}
                                  >
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
                  })}
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            direction={"row"}
            className={"bottom-container-dashboard"}
          >
            <Grid item xl={5} lg={5} className={"donation-history-container"}>
              <div className={"donation-history-filter"}>
                <div className={"donation-history-title"}>Donation History</div>
                <div className={"donation-history-filter-wrapper"}>
                  <div className={"donation-input-label-wrapper"}>
                    <InputLabel>Filter Donations</InputLabel>
                  </div>
                  <div className={"donation-filter-select-wrapper"}>
                    <Select
                      className={"donation-filter-select"}
                      value={npo}
                      label="Npos"
                      onChange={handleChange1}
                    >
                      <MenuItem value={""}>all</MenuItem>
                      {npos.map((item) => (
                        <MenuItem value={item.name}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <Grid
                  container
                  className={"donation-history-timeline-container"}
                >
                  <Grid item>
                    {history.map((donation) => (
                      <Timeline>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot
                              color={"secondary"}
                              className={"donation-history-timeline"}
                            />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className={"donation-history-content"}>
                              <div className={"monthly-donation"}>
                                {donation.payment_frequency} donation to
                                <span className="donation-npo-name">
                                  {npos.map((npo) => {
                                    if (npo._id === donation.npo_id)
                                      return npo.name;
                                  })}
                                </span>
                                <DateFormater date={donation.date}/>
                              </div>
                              <div className={"donation-amount"}>
                                {donation.payment_amount} kr
                              </div>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                    ))}
                  </Grid>
                </Grid>
                <div className={"donation-see-all-wrapper"}>
                  <div
                    onClick={() => navigate("/accounting")}
                    className={"donation-see-all"}
                  >
                    See all donations
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              item
              xl={6}
              lg={6}
              className={"highlighted-data-container"}
            ></Grid>
          </Grid>
          <ArticleSelection />
        </Grid>
      </div>
    </div>
  );
};
export default Dashboard;
