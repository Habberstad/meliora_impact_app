import * as React from "react";
import { Box } from "@mui/material";

const Report = React.forwardRef((props, ref) => {


  return (

    <div  ref={ref}>


            <Box sx={{
              display: "none",
              displayPrint: "block",
              m: 1,
              fontSize: "0.875rem",
              fontWeight: "700"
            }}>

            </Box>

    </div>

  );
});

export default Report;
