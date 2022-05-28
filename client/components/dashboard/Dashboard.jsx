import * as React from "react";
import { useLoading } from "../../useLoading";
import { Grid, InputLabel, Link, MenuItem, Select } from "@mui/material";
import { useContext, useState } from "react";
import "../../styles/dashboard.css";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import LinearProgress from "@mui/material/LinearProgress";
import WaterIcon from "@mui/icons-material/Water";
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
import { useLoader } from "../../helpers/UseLoader";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Dashboard = (props) => {
  //TODO: Mer beskrivende navn på state.
  const [age, setAge] = React.useState("");
  //TODO: Mer beskrivende navn på state. F.eks. expandPartnerAccordion
  const [expanded, setExpanded] = React.useState(false);
  const [counter, setCounter] = useState(1);

  const { getArticles } = useContext(ArticleApiContext);
  const { getUserByGoogleId } = useContext(UserApiContext);

  // DATA FETCHING
  const rawArticlesData = useLoading(async () => await getArticles({}), []);
  const rawUserData = useLoader(
    async () => await getUserByGoogleId(props.user.google_id),
    []
  );

  //TODO: userData er data med all informasjon om user/company
  const userData = { ...rawUserData.data };

  //TODO: articlesData er liste med articles
  const articlesData = { ...rawArticlesData.data };

  // TODO: Denne burde ha et mer beskrivende navn
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  // TODO: Denne burde ha et mer beskrivende navn
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (rawArticlesData.loading || rawUserData.loading) {
    return <div>Loading...</div>;
  }
  if (rawArticlesData.error || rawUserData.error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  const impact = props.user.active_npos_id[0].impacts;

  const highlited = props.user.npo_partners[0].impact_measurement;

  const history = props.user.donation_history;

  console.log("history", history);

  console.log("impact", impact);

  console.log("high", highlited[0]);

  console.log("all", userData);

  const increase = () => {
    if (counter === impact.length - 1) {
      setCounter(0);
    } else {
      setCounter(+1);
    }
  };

  const decrease = () => {
    if (counter === 0) {
      setCounter(impact.length - 1);
    }
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className={"dashboard-container"}>
      <h1>Hi, Welcome back </h1>
      <Grid container direction={"column"}>
        <Grid container columnSpacing={{ lg: 4, xl: 4 }} className={"test"}>
          <Grid lg={3} xl={3} item>
            <div className="students-impact-container">
              <div className="students-impact-icon">
                <SchoolIcon fontSize={"large"} />
              </div>
              <ArrowBackIosIcon
                onClick={decrease}
                className={"student-back-button"}
              />
              <ArrowForwardIosIcon
                onClick={increase}
                className={"students-forward-button"}
              />
              <div className="students-impact-count">
                {impact === undefined ? (
                  <div>impact not set</div>
                ) : (
                  <div>{impact[counter].amount}</div>
                )}
              </div>
              <div className="students-impact-content">
                {impact === undefined ? (
                  <div>impact not set</div>
                ) : (
                  <div>{impact[counter].impact_type}</div>
                )}
              </div>
            </div>
          </Grid>

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
                    dropShadow: "0",
                  }}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <div className={"highlighted-partners-icon"}>
                      <LocalHospitalIcon />
                      <div className={"accordion-title"}>
                        {highlited[0].name}
                      </div>
                    </div>
                  </AccordionSummary>

                  <AccordionDetails sx={{ borderRadius: "16px" }}>
                    <div>
                      {highlited.map((m) => (
                        <div>
                          {m.impact_name}

                          <LinearProgress
                            sx={{
                              width: "162px",
                              height: "9px",
                              backgroundColor: "#A5A5A5",
                              position: "absolut",
                            }}
                            variant="determinate"
                            value={m.impact_value}
                          />
                        </div>
                      ))}
                    </div>
                    <div className={"highlighted-partners-dental"}>
                      <div>Dental program</div>
                      <LinearProgress
                        sx={{
                          width: "162px",
                          height: "9px",
                          backgroundColor: "#A5A5A5",
                          position: "absolut",
                        }}
                        variant="determinate"
                        value={80}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>

              <Accordion
                sx={{
                  backgroundColor: "#FCEFE7",
                  fontSize: "18px",
                  margin: "10px",
                  dropShadow: "0",
                }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <div className={"highlighted-partners-icon"}>
                    <WaterIcon />
                    <div className={"accordion-title"}>{highlited[1].name}</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={"highlighted-partners-vaccination"}>
                    <div>Program</div>
                    <LinearProgress
                      sx={{
                        width: "162px",
                        height: "9px",
                        backgroundColor: "#A5A5A5",
                        position: "absolut",
                      }}
                      variant="determinate"
                      value={10}
                    />
                  </div>
                  <div className={"highlighted-partners-infant"}>
                    <div>Infant Mortality</div>
                    <LinearProgress
                      sx={{
                        width: "162px",
                        height: "9px",
                        backgroundColor: "#A5A5A5",
                        position: "absolut",
                      }}
                      variant="determinate"
                      value={70}
                    />
                  </div>
                  <div className={"highlighted-partners-dental"}>
                    <div>Dental program</div>
                    <LinearProgress
                      sx={{
                        width: "162px",
                        height: "9px",
                        backgroundColor: "#A5A5A5",
                        position: "absolut",
                      }}
                      variant="determinate"
                      value={90}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
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
            test
          </Grid>
        </Grid>

        <div className="articles-bottom-section">
          <div className="bottom-header">Latest updates</div>
          <Grid
            container
            columnSpacing={{ md: 4, lg: 4, xl: 4 }}
            rowSpacing={{ md: 4, lg: 4 }}
          >
            <Grid item lg={12} xl={6}>
              <div className="container-medium">
                <div className={"container-content-medium"}>
                  <div className={"npo-text-medium"}>
                    <span className={"npo-name"}>
                      {articlesData[1].npoName}
                    </span>
                  </div>
                  <Link href={"/articles/article?id=" + articlesData[1]._id}>
                    <img src={articlesData[1].image} alt={"das"} />
                  </Link>
                  <div className={"card-content-container-medium"}>
                    <div className={"date-text-medium"}>
                      <span className={"card-content-date"}>
                        {articlesData[1].date}
                      </span>
                    </div>
                    <div className={"content-text-medium"}>
                      <span className={"card-content-text"}>
                        {articlesData[1].description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item md={6} lg={6} xl={3}>
              <div className="container-small">
                <div className={"container-content-small"}>
                  <div className={"npo-text-small"}>
                    <span className={"npo-name"}>
                      {articlesData[3].npoName}
                    </span>
                  </div>
                  <Link href={"/articles/article?id=" + articlesData[3]._id}>
                    <img src={articlesData[3].image} id={"bilde"} alt={"das"} />
                  </Link>
                  <div className={"card-content-container-small"}>
                    <div className={"date-text-small"}>
                      <span className={"card-content-date"}>
                        {articlesData[3].date}
                      </span>
                    </div>
                    <div className={"content-text-small"}>
                      <span className={"card-content-text-small"}>
                        {articlesData[3].description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item md={6} lg={6} xl={3}>
              <div className="container-small">
                <div className={"container-content-small"}>
                  <div className={"npo-text-small"}>
                    <span className={"npo-name"}>
                      {articlesData[3].npoName}
                    </span>
                  </div>
                  <Link href={"/articles/article?id=" + articlesData[3]._id}>
                    <img src={articlesData[3].image} id={"bilde"} alt={"das"} />
                  </Link>
                  <div className={"card-content-container-small"}>
                    <div className={"date-text-small"}>
                      <span className={"card-content-date"}>
                        {articlesData[3].date}
                      </span>
                    </div>
                    <div className={"content-text-small"}>
                      <span className={"card-content-text-small"}>
                        {articlesData[3].description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
export default Dashboard;
