import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  let currentYear = new Date().getFullYear();

  return (
    <Box
      gridColumn="span 12"
      gridRow="span 2"
      //   backgroundColor="rgba(105, 145, 59,0.4)"
      overflow="auto"
      marginTop="10px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        colors={colors.indigo[100]}
        p="15px 0px 10px 0px"
      >
        <Typography color={colors.indigo[100]} variant="h5" fontWeight="600">
          &copy;Agrisync {currentYear}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
