import React from "react";
import { Grid, Typography } from "@mui/material";
import { LinearProgress } from "@mui/material";
import data from "../data.json";

const ProgressComponent = () => {
  const MIN = 0;
  const MAX = 52.36;
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
  return (
    <Grid spacing={0.2} container sx={{ height: 120 }}>
      {data.map((content) => {
        return (
          <Grid
            xs
            item
            sx={{ display: "grid", margin: "0px -10px !important", padding: 0 }}
          >
            <LinearProgress
              value={normalise(content.amount)}
              variant="determinate"
              title="test"
              sx={{
                transform: "rotate(270deg) !important",
                background: "white",
                height: "2rem",
                margin: 0,
                padding: 0,
                borderRadius: "0.2rem",
                ".MuiLinearProgress-bar": {
                  background: `${
                    content.day !== "wed"
                      ? "hsl(10, 79%, 65%)"
                      : "hsl(186, 34%, 60%)"
                  }`,
                  borderRadius: "0.2rem",
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                marginTop: "0.4rem",
                color: "hsl(28, 10%, 53%)",
              }}
            >
              {content.day}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProgressComponent;
