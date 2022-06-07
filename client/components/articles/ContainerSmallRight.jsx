import { Link } from "@mui/material";

export function ContainerSmallRight(props) {
  return (
    <div className="container-small">
      <div className={"container-content-small"}>
        <div className={"npo-text-small"}>
          <span className={"npo-name"}>{props.data[3].npoName}</span>
        </div>
        <Link href={"/articles/" + props.data[3]._id}>
          <img src={props.data[3].image} id={"bilde"} alt={"das"} />
        </Link>
        <div className={"card-content-container-small"}>
          <div className={"date-text-small"}>
            <span className={"card-content-date"}>{props.data[3].date}</span>
          </div>
          <div className={"content-text-small"}>
            <span className={"card-content-text-small"}>
              {props.data[3].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}