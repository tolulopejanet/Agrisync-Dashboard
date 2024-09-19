import React from "react";
import "../../src/index.css";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const data = [
  {
    id: 1,
    name: "Humidity",
    percentValues: 70,
    siUnit: "%",
  },
  {
    id: 2,
    name: "Temperature",
    percentValues: 40,
    siUnit: "*C",
  },
  {
    id: 3,
    name: "Rain Detector",
    percentValues: 20,
    siUnit: "%possibility",
  },
];

const ProgressChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="progress-bar">
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p
                  className="bar-item-info-name"
                  style={{ color: colors.indigo[100] }}
                >
                  {progressbar.name}
                </p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}
                  {progressbar.siUnit}
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                    backgroundColor: colors.indigo[300],
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressChart;
