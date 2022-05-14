import React, { useEffect } from "react";
import fetchJSON from "../../helpers/fetchJSON";
import { Box, CircularProgress } from "@mui/material";

export function LoginOpenIDStep() {
  useEffect(async () => {
    const { authorization_endpoint } = await fetchJSON(
      "https://accounts.google.com/.well-known/openid-configuration"
    );

    const parameters = {
      response_type: "token",
      client_id:
        "1015959050003-0gfbrk1fg1ajblqf2u69qbthl9vvuvhc.apps.googleusercontent.com",
      scope: "email profile",
      redirect_uri: window.location.origin + "/login/callback",
    };

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(parameters);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
