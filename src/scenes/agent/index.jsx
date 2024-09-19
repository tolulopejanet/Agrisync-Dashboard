import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

const Agent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "phone",
      headerName: "Phone number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "state",
      headerName: "State Located",
      flex: 1,
      renderCell: ({ row: { state } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            marginTop="10px"
            justifyContent="center"
            borderRadius="4px"
          >
            <Typography
              color={colors.indigo[700]}
              fontWeight="600"
              fontSize="14px"
              sx={{ ml: "5px" }}
            >
              {state}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box className="big-box">
      <Header
        title="Agent"
        subtitle="Choose any agent available based on your location"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            color: colors.indigo[700],
            fontWeight: "600",
            fontSize: "14px",
            border: "1px solid #8eb16e",
          },
          "& .name-column--cell": {
            color: colors.indigo[700],
            fontWeight: "600",
            fontSize: "14px",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.primary[800],
            fontSize: "15px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.redAccent[400],
            // border: "1px solid #8eb16e",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[800],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Agent;
