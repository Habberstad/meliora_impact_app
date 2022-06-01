import Timeline from "./npo-media/timeline_component4x.png";
import OverviewTabContent from "./overview-tab/OverviewTabContent";
import ProjectTabPage from "./projects-tab/ProjectTabPage";
import ImpactTabContent from "./impact-tab/ImpactTabContent";
import KeyInformationTab from "./key-information-tab/KeyInformationTab";
import * as React from "react";

export function TabContent({ selectedTab, data }) {
  console.log(data);
  return (
    <>
      {selectedTab === "overview" && (
        <>
          <div className="timeline-section">
            <img src={Timeline} alt="test" />
          </div>
          <div className="content-container">
            <OverviewTabContent data={data.overview_tab} />
          </div>
        </>
      )}
      {selectedTab === "projects" && (
        <>
          <div className="content-container">
            <ProjectTabPage data={data.projects} />
          </div>
        </>
      )}
      {selectedTab === "impact" && (
        <>
          <div className="content-container">
            <ImpactTabContent category={data.category} data={data.impact_tab} />
          </div>
        </>
      )}
      {selectedTab === "keyinformation" && (
        <>
          <div className="content-container">
            <KeyInformationTab />
          </div>
        </>
      )}
    </>
  );
}
