import React from "react";
import { Paper, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";
import ProgressComponent from "./ProgressComponent";
import TotalAmount from "./TotalAmount";

const StatusContainer = styled(Paper)((props) => ({
  marginTop: "1rem",
  background: "white",
  padding: "1.6rem",
  borderRadius: "1rem",
  color: "hsl(25, 47%, 15%)",
}));

const Stats = () => {
  return (
    <StatusContainer elevation={3}>
      <Typography variant="h6" sx={{ marginBottom: "5rem" }}>
        Spending - Last 7 days
      </Typography>
      <ProgressComponent />
      <Divider />
      <TotalAmount />
    </StatusContainer>
  );
};
export default Stats;
