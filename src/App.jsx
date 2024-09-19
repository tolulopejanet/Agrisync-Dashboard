import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Agent from "./scenes/agent";
import Invoices from "./scenes/invoices";
import Analysis from "./scenes/analysis";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Notification from "./scenes/notification";
import ImageUpload2 from "./scenes/imageUpload";
import LightDarkMode from "./components/lightDark";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <LightDarkMode />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/agents" element={<Agent />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/transaction" element={<Invoices />} />
              <Route path="/setting" element={<Form />} />
              <Route path="/censoreading" element={<Bar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/notification" element={<Notification />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
