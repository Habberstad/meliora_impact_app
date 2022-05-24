import {Button, Grid} from "@mui/material";
import {hoverTabStyle, selectedTabStyle} from "../../styles/button-style-config";

export function Sorter(props) {
    return <div className="articles-sorter">
        <Grid container justifyContent="center">
            <Grid className={"all-filter"} item>
                <Button
                    style={{textAlign: "center", padding: "20px 30px 5px 30px"}}
                    className="test-test"
                    onClick={props.onClick}
                    sx={props.selectedTab === "" ? selectedTabStyle : hoverTabStyle}
                >
                    Test
                </Button>
            </Grid>
            <Grid className={"water-filter"} item>
                <Button
                    style={{textAlign: "center", padding: "20px 30px 5px 30px"}}
                    onClick={props.onClick1}
                    sx={props.selectedTab === "water" ? selectedTabStyle : hoverTabStyle}
                >
                    Water
                </Button>
            </Grid>
            <Grid className={"knowledge-filter"} item>
                <Button
                    style={{textAlign: "center", padding: "20px 30px 5px 30px"}}
                    onClick={props.onClick2}
                    sx={
                        props.selectedTab === "knowledge" ? selectedTabStyle : hoverTabStyle
                    }
                >
                    Knowledge
                </Button>
            </Grid>
        </Grid>
    </div>;
}