import { Link } from "@mui/material";

export function ContainerMedium(props) {
  return (
    <div className="container-medium">
      <div className={"container-content-medium"}>
        <div className={"npo-text-medium"}>
          <span className={"npo-name"}>{props.data[1].npoName}</span>
        </div>
        <Link href={"/articles/" + props.data[1]._id}>
          <img src={props.data[1].image} alt={"das"} />
        </Link>
        <div className={"card-content-container-medium"}>
          <div className={"date-text-medium"}>
            <span className={"card-content-date"}>{props.data[1].date}</span>
          </div>
          <div className={"content-text-medium"}>
            <span className={"card-content-text"}>
              {props.data[1].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}