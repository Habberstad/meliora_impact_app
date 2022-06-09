import { useState } from "react";
import {
  templateCardButtonStyle,
  templateSelectedCardButtonStyle,
} from "../../styles/button-style-config";
import TemplateProjectCard from "./TemplateProjectCard";
import "../../styles/template-styles/template-styles.css";
import { Button } from "@mui/material";

const ContentStep = ({ npoList, handleNext }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleFilterProjects = (id) => {
    const res = npoList.filter((x) => x._id === id);
    const selectedNpo = { ...res[0] };
    setFilteredProjects(selectedNpo.projects);
    setSelectedCard(id);
    setIsCardSelected(true);
  };

  const handleNextOnProjectClick = () => {
    handleNext();
  };

  return (
    <div>
      <div className="template-content-title">
        <div>Select Organization</div>
      </div>
      <div className="npo-card-container">
        {npoList.map((x) => (
          <Button
            key={x._id}
            sx={
              selectedCard === x._id
                ? templateSelectedCardButtonStyle
                : templateCardButtonStyle
            }
            onClick={() => handleFilterProjects(x._id)}
          >
            <div key={x._id}>{x.name}</div>
          </Button>
        ))}
      </div>
      {isCardSelected && (
        <div className="template-project-container">
          <div className="template-content-sub-title">Select Project</div>
          <div>
            {filteredProjects.map((x) => (
              <div onClick={handleNextOnProjectClick}>
                <TemplateProjectCard key={x._id} data={x} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentStep;
