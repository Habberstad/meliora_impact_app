import * as React from "react";
import { useContext, useState } from "react";
import { useLoading } from "../../useLoading";
import { Grid, Link, MenuItem, Select } from "@mui/material";
import "../../styles/dashboard.css";
import LinearProgress from "@mui/material/LinearProgress";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserApiContext } from "../../api-client/userApiContext";
import { ArticleSection } from "../articles/ArticleSection";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import { ImpactSection } from "./ImpactSection";
import { useNavigate } from "react-router";
import { DonationHistory } from "./DonationHistory";
import WaterIcon from "@mui/icons-material/Water";
import SchoolIcon from "@mui/icons-material/School";
import MapChart from "../../MapChart";
import { HighlightedPartners } from "./HighlightedPartners";
import { DevelopmentGoalsKnowledge } from "./DevelopmentGoalsKnowledge";
import { DevelopmentGoalsWater } from "./DevelopmentGoalsWater";

const DashboardPage = () => {
  const [expanded, setExpanded] = useState(0);

  const navigate = useNavigate();
  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  const highlighted = data.npo_partners;

  const npoList = data.npo_partners;

  const partners = data.npo_partners;
  const locations = [];
  partners.map((x) => locations.push(x.locations[0]));

  function iconCat(npo) {
    if (npo.category === "water") {
      return <WaterIcon />;
    }
    if (npo.category === "knowledge") {
      return <SchoolIcon />;
    }
  }
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
                      key={index}
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
                          {npo.impact_measurement.map((impactItem, index) => {
                            return (
                              <div
                                key={index}
                                className={
                                  "highlighted-partners-content-container"
                                }
                              >
                                <div className={"highlighted-partners-project"}>
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
                            );
                          })}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  );
              }}
            />
          </Grid>
          <Grid item xl={5} lg={5} className={"donation-history-container"}>
            <DonationHistory />
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
          <Grid item xl={12} lg={12} sx={{ marginTop: "10px" }}>
            <div className="dashboard-impact-container">
              <div className="un-impact-header">
                You contribute to these UN Sustainable Development Goals
              </div>
              {npoList.length > 0 ? (
                <>
                  <DevelopmentGoalsKnowledge />
                  <DevelopmentGoalsWater />
                </>
              ) : (
                <div className="development-placeholder">
                  Donate to one of our non-profits to see your contribution
                </div>
              )}
            </div>
          </Grid>
          <Grid item xl={12} sx={{ marginTop: "40px" }}>
            <div className="bottom-header">Latest Articles</div>
            <ArticleSection />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default DashboardPage;
