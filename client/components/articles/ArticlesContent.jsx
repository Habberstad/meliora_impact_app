import {Grid, Link} from "@mui/material";

export function ArticlesContent(props) {
    return <>
        <div className="articles-top-section">
            <Grid container columnSpacing={{lg: 4, xl: 4}} rowSpacing={{md: 4}}>
                <Grid item md={12} lg={6} xl={6}>
                    <div className="container-big">
                        <div className={"container-content-big"}>
                            <div className={"npo-text-big"}>
                                <span className={"npo-name"}>{props.data[0].npoName}</span>
                            </div>
                            <Link href={"/articles/" + props.data[0]._id}>
                                <img src={props.data[0].image} alt={props.data[0].alt}/>
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
                </Grid>

                <Grid
                    container
                    item
                    lg={6}
                    xl={6}
                    rowSpacing={{md: 4, lg: 4, xl: 4}}
                >
                    <Grid item md={12} lg={12} xl={12}>
                        <div className="container-medium">
                            <div className={"container-content-medium"}>
                                <div className={"npo-text-medium"}>
                                    <span className={"npo-name"}>{props.data[1].npoName}</span>
                                </div>
                                <Link href={"/articles/" + props.data[1]._id}>
                                    <img src={props.data[1].image} alt={"das"}/>
                                </Link>
                                <div className={"card-content-container-medium"}>
                                    <div className={"date-text-medium"}>
                      <span className={"card-content-date"}>
                        {props.data[1].date}
                      </span>
                                    </div>
                                    <div className={"content-text-medium"}>
                      <span className={"card-content-text"}>
                        {props.data[1].description}
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid
                        container
                        item
                        rowSpacing={{xl: 4}}
                        columnSpacing={{xl: 4, lg: 4, md: 4}}
                    >
                        <Grid item md={6} lg={6} xl={6}>
                            <div className="container-small">
                                <div className={"container-content-small"}>
                                    <div className={"npo-text-small"}>
                                        <span className={"npo-name"}>{props.data[2].npoName}</span>
                                    </div>
                                    <Link href={"/articles/" + props.data[2]._id}>
                                        <img src={props.data[2].image} alt={"das"}/>
                                    </Link>
                                    <div className={"card-content-container-small"}>
                                        <div className={"date-text-small"}>
                        <span className={"card-content-date"}>
                          {props.data[2].date}
                        </span>
                                        </div>
                                        <div className={"content-text-small"}>
                        <span className={"card-content-text-small"}>
                          {props.data[2].description}
                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                        <Grid item md={6} lg={6} xl={6}>
                            <div className="container-small">
                                <div className={"container-content-small"}>
                                    <div className={"npo-text-small"}>
                                        <span className={"npo-name"}>{props.data[3].npoName}</span>
                                    </div>
                                    <Link href={"/articles/" + props.data[3]._id}>
                                        <img src={props.data[3].image} id={"bilde"} alt={"das"}/>
                                    </Link>
                                    <div className={"card-content-container-small"}>
                                        <div className={"date-text-small"}>
                        <span className={"card-content-date"}>
                          {props.data[3].date}
                        </span>
                                        </div>
                                        <div className={"content-text-small"}>
                        <span className={"card-content-text-small"}>
                          {props.data[3].description}
                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

        <div className="articles-bottom-section">
            <div className="bottom-header">Articles You Should Check Out</div>
            <Grid
                container
                columnSpacing={{md: 4, lg: 4, xl: 4}}
                rowSpacing={{md: 4, lg: 4}}
            >
                <Grid item lg={6} xl={6}>
                    <div className="container-medium">
                        <div className={"container-content-medium"}>
                            <div className={"npo-text-medium"}>
                                <span className={"npo-name"}>{props.data[1].npoName}</span>
                            </div>
                            <Link href={"/articles/" + props.data[1]._id}>
                                <img src={props.data[1].image} alt={"das"}/>
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
                </Grid>

                <Grid item md={6} lg={3} xl={3}>
                    <div className="container-small">
                        <div className={"container-content-small"}>
                            <div className={"npo-text-small"}>
                                <span className={"npo-name"}>{props.data[3].npoName}</span>
                            </div>
                            <Link href={"/articles/" + props.data[3]._id}>
                                <img src={props.data[3].image} id={"bilde"} alt={"das"}/>
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
                </Grid>

                <Grid item md={6} lg={3} xl={3}>
                    <div className="container-small">
                        <div className={"container-content-small"}>
                            <div className={"npo-text-small"}>
                                <span className={"npo-name"}>{props.data[3].npoName}</span>
                            </div>
                            <Link href={"/articles/" + props.data[3]._id}>
                                <img src={props.data[3].image} id={"bilde"} alt={"das"}/>
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
                </Grid>
            </Grid>
        </div>
    </>;
}