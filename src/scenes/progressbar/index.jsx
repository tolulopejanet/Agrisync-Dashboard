import Header from "../../components/Header";
import ProgressChart from "../../components/Progressbar";
import { Box } from "@mui/material";

const progressbar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />

      <Box height="75vh">
        <ProgressChart />
      </Box>
    </Box>
  );
};
export default progressbar;
