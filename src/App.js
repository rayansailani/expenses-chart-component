import React from "react";
import { Container, Box } from "@mui/system";
import { styled } from "@mui/system";
import Balance from "./Components/Balance";
import Stats from "./Components/Stats";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const MainContainer = styled(Container)({
  backgroundColor: "hsl(27, 66%, 92%)",
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
});

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer disableGutters="true" maxWidth="xl">
        <Box
          sx={{
            margin: "auto",
            minWidth: "30vw",
            [theme.breakpoints.down("lg")]: {
              minWidth: "90vw",
            },
          }}
        >
          <Balance />
          <Stats />
        </Box>
      </MainContainer>
    </ThemeProvider>
  );
};
export default App;
