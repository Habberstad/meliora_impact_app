import * as React from "react";
import { useContext } from "react";
import { useLoading } from "../../useLoading";
import { Grid, InputLabel, Link, MenuItem, Select } from "@mui/material";
import "../../styles/dashboard.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
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

function DonationListItem({ donation: { payment_amount, date } }) {
  return (
    <div className="donation-list-item">
      <div className="donation-timeline-dot"></div>
      <div className="donation-data-container">
        <div className="left-donation-text">
          <div style={{ fontSize: "14px", fontWeight: "500" }}>
            Donated to Safe the Coral
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginTop: "3px",
            }}
          >
            {date}
          </div>
        </div>
        <div className="right-donation-text">{payment_amount}kr</div>
      </div>
    </div>
  );
}

const Dashboard = () => {
  //TODO: Mer beskrivende navn på state. F.eks. expandPartnerAccordion
  const [expanded, setExpanded] = React.useState(0);

  const [npo, setNpo] = React.useState();

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

  console.log("data", data);

  const highlighted = data.npo_partners;
  console.log("high", highlighted);
  const history = data.donation_history;
  console.log("his" + history);
  const npos = data.npo_partners;
  console.log("npo" + npos);

  console.log("filter " + npo);

  console.log(history[0].npo_id);

  let filteredHistory = history.filter((donation) => donation.npo_id === npo);

  function checkFilter(){
    if (npo === "all"){
      return history
    }else {
      return filteredHistory;
    }

  }

  console.log("harry" + filteredHistory);

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
                      defaultValue={"all"}
                    >
                      <MenuItem value={"all"}>all</MenuItem>
                      {npos.map((item) => (
                        <MenuItem value={item._id}>{item._id}</MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <Grid container>
                  <Grid
                    container
                    className={"donation-history-timeline-container"}
                  >
                    <Grid item>
                      <div className="donation-list-container">
                        {checkFilter().map((donation) => (
                          <DonationListItem donation={donation} />
                        ))}
                      </div>
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
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <ArticleSelection />
      </div>
    </div>
  );
};
export default Dashboard;
