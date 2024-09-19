import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import ImageUpload from "../imageUpload";

const Analysis = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="big-box">
      <Box>
        <ImageUpload />
        <Typography pt="30px">
          Did you know that with AgriSync, you can receive reports of various
          analyses for your farmland simply by uploading an aerial view? Try out
          now!
        </Typography>
      </Box>

      <Box>
        <Box className="analysis-card" backgroundColor={colors.primary[800]}>
          <h2>Soil Quality Analysis</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            necessitatibus maiores cupiditate odit, possimus molestias excepturi
            ex harum debitis suscipit qui iusto quo eveniet, voluptatem officia.
            Quod rem similique animi.
          </p>
        </Box>
        <Box className="analysis-card" backgroundColor={colors.primary[800]}>
          <h2>Crop Yield Prediction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            necessitatibus maiores cupiditate odit, possimus molestias excepturi
            ex harum debitis suscipit qui iusto quo eveniet, voluptatem officia.
            Quod rem similique animi.
          </p>
        </Box>
        <Box className="analysis-card" backgroundColor={colors.primary[800]}>
          <h2>Pest and Disease Risk Assessment</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            necessitatibus maiores cupiditate odit, possimus molestias excepturi
            ex harum debitis suscipit qui iusto quo eveniet, voluptatem officia.
            Quod rem similique animi.
          </p>
        </Box>
        <Box className="analysis-card" backgroundColor={colors.primary[800]}>
          <h2>Weather Impact Assessment</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            necessitatibus maiores cupiditate odit, possimus molestias excepturi
            ex harum debitis suscipit qui iusto quo eveniet, voluptatem officia.
            Quod rem similique animi.
          </p>
        </Box>
        <Box className="analysis-card" backgroundColor={colors.primary[800]}>
          <h2>Irrigation Efficiency Analysis</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            necessitatibus maiores cupiditate odit, possimus molestias excepturi
            ex harum debitis suscipit qui iusto quo eveniet, voluptatem officia.
            Quod rem similique animi.
          </p>
        </Box>
      </Box>
    </Box>
  );
};
export default Analysis;
