import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";
const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subtitle="Simple Line Chart" />

      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
export default Line;
