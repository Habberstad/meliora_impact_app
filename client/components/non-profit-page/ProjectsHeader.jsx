import "../../styles/npo-profile-page-styles/project-header-styles.css";
import { Button } from "@mui/material";

const ProjectsHeader = () => {
  return (
    <div className="projects-header-container">
      <img
        src="https://images.unsplash.com/photo-1598846019232-a5752b94c3af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2931"
        alt="test"
      />
      <div className="header-title-section">
        <div className="header-main-title">Save The Coral</div>
        <div className="header-sub-title">A Williams Foundation Project</div>
        <div className="header-donate-btn">
          <Button
            variant="contained"
            sx={{
              width: "125px",
              height: "45px",

              backgroundColor: "#8d28ce",
              "&:hover": {
                backgroundColor: "#8d28ce",
              },
            }}
          >
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
