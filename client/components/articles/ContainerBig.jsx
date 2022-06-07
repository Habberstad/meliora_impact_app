import { Link } from "@mui/material";

export function ContainerBig(props) {
  return (
    <div className="container-big">
      <div className={"container-content-big"}>
        <div className={"npo-text-big"}>
          <span className={"npo-name"}>{props.data[0].npoName}</span>
        </div>
        <Link href={"/articles/" + props.data[0]._id}>
          <img src={props.data[0].image} alt={props.data[0].alt} />
        </Link>
        <div className={"card-content-container-big"}>
          <div className={"date-text-big"}>
            <span className={"card-content-date"}>{props.data[0].date}</span>
          </div>

          <div className={"content-text-big"}>
            <span className={"card-content-text"}>
              {props.data[0].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}