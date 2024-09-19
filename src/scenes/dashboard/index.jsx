import React from "react";
import { useContext } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { ColorModeContext, tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import ForestIcon from "@mui/icons-material/Forest";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LineChart from "../../components/LineChart";
import ProgressChart from "../../components/Progressbar";
import StatBox from "../../components/StatBox";
import farm from "../../assets/map.jpg";
import Footer from "../global/Footer";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // request agent variables
  let currentDate = new Date().toDateString();
  let agentName = " Tolulope Janet";
  let comment =
    "A lot of rodent were detected on your farmland last week, kindly work on that.";

  // farm health & concerned area variable
  let fhVar = 45;
  let caVar = 26;
  let analysedAreaValue = "56%";
  let farmHealthValue = "45%";
  let pestCoverValue = "20%";
  let erosionThreatValue = "-11%";
  let concernedAreaValue = "26%";

  // image analysis variables
  let analysedArea = "This is the total farmland analysed";
  let farmHealth = `${fhVar}% of the farmland is in a good condition`;
  let pestCover = "infested area should be checked and fumigated";
  let erosionThreat = "No erosion threat";
  let concernedArea = `${caVar}% of the farmland is of needs to be investigated`;

  // farm name
  let farmName = "Afro Farms Limited";

  return (
    <Box className="">
      <Box className="dashboard-container">
        <Header
          className="headerTitle"
          title="DASHBOARD"
          subtitle="Welcome to your dashboard, Tolulope"
        />

        <Box
          className="farmName"
          sx={{
            backgroundColor: colors.primary[800],
            color: colors.indigo[100],
          }}
        >
          {farmName}
        </Box>
      </Box>

      {/* grid and charts */}
      <Box className="factors-main-container">
        {/* Row1 */}
        <Box
          className="factors-sub-container"
          backgroundColor={colors.primary[800]}
        >
          <StatBox
            title="Soil Moisture"
            subtitle="Moisture level of the soil    "
            increase="  +14%"
          />
        </Box>
        <Box
          backgroundColor={colors.primary[800]}
          className="factors-sub-container"
        >
          <StatBox
            title="Sensitivity Scale"
            subtitle="Detects the land problems "
            progress="0.30"
            increase="+20%"
          />
        </Box>
        <Box
          backgroundColor={colors.primary[800]}
          className="factors-sub-container"
        >
          <StatBox
            title="Water Level"
            subtitle="Monitors water level "
            progress="0.5"
            increase=" +21%"
          />
        </Box>

        {/* // row 2 */}
        <Box className="section-two" backgroundColor={colors.primary[800]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className="section-two"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.indigo[100]}
                className="section-two-text"
              >
                Variation of soil moisture content for the last three months
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* transaction */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[800]}
          borderRadius="20px"
          className="section-two-b"
          // overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid #8eac6c`}
            colors={colors.indigo[100]}
            p="15px"
          >
            <Typography
              color={colors.indigo[100]}
              variant="h4"
              fontWeight="bold"
            >
              Weather Report
            </Typography>
          </Box>

          <Box>
            <ProgressChart />
          </Box>
        </Box>

        {/* row3 */}

        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[800]}
          borderRadius="20px"
          className="section-two-b image"
        >
          <Typography variant="h4" fontWeight="600" paddingBottom="5px">
            {farmName}
          </Typography>
          <Typography
            variant="p"
            textAlign="center"
            fontWeight="500"
            color={colors.primary[500]}
          >
            This analysis was carried out on {currentDate}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="15px"
          >
            <img src={farm} alt="" srcset="" className="analysis-image" />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[800]}
          borderRadius="20px"
          overflow="auto"
          className="section-two-b"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.indigo[100]}
            p="30px 15px"
          >
            <Typography
              color={colors.indigo[100]}
              variant="h4"
              fontWeight="bold"
            >
              Analysis Summary
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop={`1px solid #8eac6c`}
            p="15px 15px 15px 15px"
          >
            <Box>
              <Typography
                color={colors.primary[500]}
                variant="h4"
                fontWeight="600"
              >
                Analysed Area
              </Typography>

              <Typography
                color={colors.primary[100]}
                fontSize="10px"
                fontWeight="600"
              >
                {analysedArea}
              </Typography>
            </Box>
            {/* <Box color={colors.indigo[100]}>{transaction.date}</Box> */}
            <Box
              backgroundColor="rgba(105, 145, 59,0.4)"
              p="5px 10px"
              borderRadius="4px"
            >
              {analysedAreaValue}
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop={`1px solid #8eac6c`}
            p="15px 15px 15px 15px"
          >
            <Box>
              <Typography
                color={colors.primary[500]}
                variant="h4"
                fontWeight="600"
              >
                Farm Health
              </Typography>

              <Typography
                color={colors.primary[100]}
                fontWeight="600"
                fontSize="10px"
              >
                {farmHealth}
              </Typography>
            </Box>
            {/* <Box color={colors.indigo[100]}>{transaction.date}</Box> */}
            <Box
              backgroundColor="rgba(105, 145, 59,0.4)"
              p="5px 10px"
              borderRadius="4px"
            >
              {farmHealthValue}
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop={`1px solid #8eac6c`}
            p="15px 15px 15px 15px"
          >
            <Box>
              <Typography
                color={colors.primary[500]}
                variant="h4"
                fontWeight="600"
              >
                Pest Cover
              </Typography>

              <Typography
                color={colors.primary[100]}
                fontWeight="600"
                fontSize="10px"
              >
                {pestCover}
              </Typography>
            </Box>
            {/* <Box color={colors.indigo[100]}>{transaction.date}</Box> */}
            <Box
              backgroundColor="rgba(105, 145, 59,0.4)"
              p="5px 10px"
              borderRadius="4px"
            >
              {pestCoverValue}
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop={`1px solid #8eac6c`}
            p="15px 15px 15px 15px"
          >
            <Box>
              <Typography
                color={colors.primary[500]}
                variant="h4"
                fontWeight="600"
              >
                Erosion Threat
              </Typography>

              <Typography
                color={colors.primary[100]}
                fontWeight="600"
                fontSize="10px"
              >
                {erosionThreat}
              </Typography>
            </Box>
            {/* <Box color={colors.indigo[100]}>{transaction.date}</Box> */}
            <Box
              backgroundColor="rgba(105, 145, 59,0.4)"
              p="5px 10px"
              borderRadius="4px"
            >
              {erosionThreatValue}
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop={`1px solid #8eac6c`}
            p="15px 15px 15px 15px"
          >
            <Box>
              <Typography
                color={colors.primary[500]}
                variant="h4"
                fontWeight="600"
              >
                Concerned Area
              </Typography>

              <Typography
                color={colors.primary[100]}
                fontWeight="600"
                fontSize="10px"
              >
                {concernedArea}
              </Typography>
            </Box>
            {/* <Box color={colors.indigo[100]}>{transaction.date}</Box> */}
            <Box
              backgroundColor="rgba(105, 145, 59,0.4)"
              p="5px 10px"
              borderRadius="4px"
            >
              {concernedAreaValue}
            </Box>
          </Box>
        </Box>

        <Box
          backgroundColor={colors.primary[800]}
          className="agentRequent-container"
        >
          <Box colors={colors.indigo[100]}>
            <Typography
              color={colors.indigo[100]}
              variant="h4"
              fontWeight="600"
            >
              Farm Agent Request
            </Typography>
          </Box>

          <Box className="agentRequest">
            <Box colors={colors.primary[200]}>
              <Typography
                color={colors.primary[500]}
                fontWeight="600"
                className="agentRequest-title"
              >
                Assigned Agent : {agentName}
              </Typography>
            </Box>

            <Box>
              <Typography
                color={colors.primary[500]}
                fontWeight="600"
                className="agentRequest-title"
              >
                Job Status :
                <select name="remark" id="" className="remark-container">
                  <option value="review" className="remark">
                    Under Review
                  </option>
                  <option value="approved" className="remark">
                    Approved
                  </option>
                  <option value="unapproved" className="remark">
                    Unapproved
                  </option>
                </select>
              </Typography>
            </Box>

            <Box
              colors={colors.primary[500]}
              className="agentRequest-top "
              // justifyContent="space-between"
            >
              <Typography
                color={colors.primary[500]}
                fontWeight="600"
                className="agentRequest-title"
              >
                Date : {currentDate}
              </Typography>
            </Box>
          </Box>

          <Box colors={colors.primary[500]}>
            <Typography
              color={colors.primary[500]}
              fontWeight="600"
              className="agentRequest-title"
            >
              Remark : {comment}
            </Typography>
          </Box>
        </Box>

        {/*  */}
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
