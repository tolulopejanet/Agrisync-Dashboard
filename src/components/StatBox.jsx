import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 20px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box textAlign="left">
        <Box>
          <Typography
            variant="h4"
            marginBottom="30px"
            fontWeight="bold"
            sx={{ color: colors.indigo[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: colors.primary[500] }}
          fontStyle="italic"
        >
          {subtitle}
        </Typography>
      </Box>

      <Box>
        <Box marginBottom="5px">
          <ProgressCircle progress={progress} />
        </Box>
        <Typography
          variant="h6"
          // fontStyle="italic"
          fontWeight="bold"
          // fontSize="16px"
          sx={{ color: colors.primary[500] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};
export default StatBox;
