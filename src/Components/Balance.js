import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

const FlexContainer = styled(Paper)((props) => ({
  display: "flex",
  flexDirection: props.flexDirection || "row",
  alignItems: props.alignItems || "center",
  justifyContent: props.justifyContent || "center",
  backgroundColor: " hsl(10, 79%, 65%) !important",
  padding: "0.8rem 1rem",
  borderRadius: "1rem",
}));

const Balance = () => {
  return (
    <FlexContainer elevation={3} justifyContent="space-between">
      <FlexContainer elevation={0} flexDirection="column" alignItems="left">
        <Typography variant="body2" sx={{ color: "white" }}>
          My balance
        </Typography>
        <Typography variant="h5" sx={{ color: "white" }}>
          $921.48
        </Typography>
      </FlexContainer>
      <img src="expenses-chart-component-main/images/logo.svg" alt="balance" />
    </FlexContainer>
  );
};

export default Balance;
