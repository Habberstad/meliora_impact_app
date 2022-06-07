import { Grid, Link } from "@mui/material";

export function ArticlesTopContent(props) {
  return (
    <div className="articles-top-section">
      <Grid container columnSpacing={{ lg: 4, xl: 4 }} rowSpacing={{ md: 4 }}>
        {props.data.map((x, index) => {
          if (index <= 3)
            return (
              <Grid item md={12} lg={6} xl={6}>
                <div className="articles-container">
                  <div className={`articles-container-content-${index}`}>
                    <div className={`npo-text-${index}`}>
                      <span className={"npo-name"}>{x.npoName}</span>
                    </div>
                    <Link href={"/articles/" + x._id}>
                      <img src={x.image} alt={x.alt} />
                    </Link>
                    <div className={`card-content-container-${index}`}>
                      <div className={`date-text-${index}`}>
                        <span className={`card-content-date-${index}`}>
                          {x.date}
                        </span>
                      </div>

                      <div className={`content-text-${index}`}>
                        <span className={"card-content-text"}>
                          {x.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
        })}
      </Grid>
    </div>
  );
}
