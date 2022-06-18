import React from "react";
import { styled } from "@mui/system";
import { Paper, Typography } from "@mui/material";

const FlexContainer = styled(Paper)((props) => ({
  display: "flex",
  flexDirection: props.flexDirection || "row",
  alignItems: props.alignItems || "center",
  justifyContent: props.justifyContent || "center",
  padding: "0.6rem 0.4rem 0 0.4rem",
  borderRadius: "1rem",
}));
const TotalAmount = () => {
  return (
    <FlexContainer
      flexDirection="row"
      justifyContent="space-between"
      elevation={0}
    >
      <FlexContainer flexDirection="column" elevation={0} alignItems="left">
        <Typography variant="body2" sx={{ color: "hsl(28, 10%, 53%)" }}>
          Total this month
        </Typography>
        <Typography variant="h4">$478.33</Typography>
      </FlexContainer>
      <FlexContainer
        flexDirection="column"
        elevation={0}
        alignItems="flex-end !important"
      >
        <Typography variant="body2" sx={{ textAlign: "right" }}>
          +2.4%
        </Typography>
        <Typography variant="body2" sx={{ color: "hsl(28, 10%, 53%)" }}>
          from last month
        </Typography>
      </FlexContainer>
    </FlexContainer>
  );
};

export default TotalAmount;
