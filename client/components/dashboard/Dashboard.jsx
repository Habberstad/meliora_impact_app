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


const Dashboard = () => {
  //TODO: Mer beskrivende navn på state.
  const [age, setAge] = React.useState("");
  //TODO: Mer beskrivende navn på state. F.eks. expandPartnerAccordion
  const [expanded, setExpanded] = React.useState(false);


  // DATA FETCHING

  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (loading) return isLoading();

  if (error) return <Error error={error} />;


  const highlited = data.npo_partners[0].impact_measurement;
  const history = data.donation_history;



  return (
    <div className={"dashboard-container"}>
      <h1>Hi, Welcome back </h1>
      <Grid container direction={"column"}>
        <Grid container columnSpacing={{ lg: 4, xl: 4 }} className={"test"}>
          <ImpactSection data={data}  />
          <Grid item lg={3} xl={3} className={"socialmedia-template"}>
            <div className={"socialmedia-template-container"}>
              <img
                src={
                  "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600"
                }
                alt={"das"}
              />
              <div className={"socialmedia-template-content-top"}>
                <div>Share on Social Media</div>
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
              <div
                style={{ fontSize: "18px", margin: "10px", fontWeight: "bold" }}
              >
                Highlighted partners
              </div>
              <div className={"accordion-wrapper"}>
                <Accordion
                  sx={{
                    backgroundColor: "#FCEFE7",
                    width: "480px",
                    borderRadius: "16px",
                    dropShadow: "0"
                  }}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <div className={"accordion-title-container"}>
                      <LocalHospitalIcon />
                      <div className={"accordion-title"}>title</div>
                    </div>
                  </AccordionSummary>

                  <AccordionDetails sx={{ borderRadius: "16px" }}>
                    <div>
                      {highlited.map((m) => (
                        <div
                          className={"highlighted-partners-content-container"}
                        >
                          <div className={"highlighted-partners-project"}>
                            {m.impact_name}
                          </div>
                          <div className={"highlighted-partners-progress"}>
                            <LinearProgress
                              sx={{
                                width: "162px",
                                height: "9px",
                                backgroundColor: "#A5A5A5",
                                position: "absolut"
                              }}
                              variant="determinate"
                              value={m.impact_value}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className={"accordion-bottom-container"}
                  sx={{
                    backgroundColor: "#FCEFE7",
                    width: "480px",
                    borderRadius: "16px",
                    dropShadow: "0"
                  }}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <div className={"accordion-title-container"}>
                      <LocalHospitalIcon />
                      <div className={"accordion-title"}>title</div>
                    </div>
                  </AccordionSummary>

                  <AccordionDetails sx={{ borderRadius: "16px" }}>
                    <div>
                      {highlited.map((m) => (
                        <div
                          className={"highlighted-partners-content-container"}
                        >
                          <div className={"highlighted-partners-project"}>
                            {m.impact_name}
                          </div>
                          <div className={"highlighted-partners-progress"}>
                            <LinearProgress
                              sx={{
                                width: "162px",
                                height: "9px",
                                backgroundColor: "#A5A5A5",
                                position: "absolut"
                              }}
                              variant="determinate"
                              value={m.impact_value}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
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

              <div className={"donation-history-filter-content"}>
                <InputLabel>Select Non-profit</InputLabel>
                <Select style={{ width: "232px" }} onChange={handleChange1}>
                  <MenuItem value={"leve-havet"}>Leve Havet</MenuItem>
                  <MenuItem value={"water for all"}>Water for all</MenuItem>
                  <MenuItem value={"placeholder"}>placholder</MenuItem>
                </Select>
              </div>
              <Grid container className={"donation-history-timeline-container"}>
                <Grid item>
                  {history.map((m) => (
                    <Timeline>
                      <TimelineSeparator color={"primary"}></TimelineSeparator>
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
                              {m.type}
                              <span className="donation-npo-name">
                                Leve havet
                              </span>
                              <div>{m.date}</div>
                            </div>
                            <div className={"donation-amount"}>{m.amount}</div>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  ))}
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} className={"highlighted-data-container"}>
          </Grid>
        </Grid>
        <ArticleSelection />
      </Grid>
    </div>
  );
};
export default Dashboard;
