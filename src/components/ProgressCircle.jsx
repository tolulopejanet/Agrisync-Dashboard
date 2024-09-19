import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

let progressSize = 55;
let progressing = 0.75;

const ProgressCircle = ({ progress = progressing, size = progressSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.indigo[800]} 30%, transparent 0%), conic-gradient(transparent 0deg ${angle}deg, ${colors.indigo[300]} ${angle}deg 360deg), ${colors.indigo[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
export default ProgressCircle;
