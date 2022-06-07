import goal_1 from "../../media/un_goals/goal_1.svg";
import goal_2 from "../../media/un_goals/goal_2.svg";
import goal_3 from "../../media/un_goals/goal_3.svg";
import goal_4 from "../../media/un_goals/goal_4.svg";
import * as React from "react";

export function DevelopmentGoalsKnowledge() {
  return (
    <div className="un-impact-icons-row">
      <div className="un-icon">
        <img src={goal_1} alt="" />
      </div>
      <div className="un-icon">
        <img src={goal_2} alt="" />
      </div>
      <div className="un-icon">
        <img src={goal_3} alt="" />
      </div>
      <div className="un-icon">
        <img src={goal_4} alt="" />
      </div>
    </div>
  );
}
