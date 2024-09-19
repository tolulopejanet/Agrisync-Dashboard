import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Header
        className="faq-container"
        title="FAQ"
        subtitle="Here are some of the frequently asked questions by our customers"
      />

      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            Who are we at AgriSync Solutions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AgriSync Solution is an Agricultural technology company dedicated to
            revolutionizing the agricultural industry. We provide innovative
            solutions aimed at enhancing crop yields, improving efficiency, and
            empowering farmers with cutting-edge technology.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            How does AgriSync Solutions help farmer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AgriSync solutions offer technological solutions that enable farmers
            to optimize their agricultural practices. Our Integrated Aerial
            Precision and IoT-based irrigation systems help farmers increase
            crop yields, reduce resource waste, and improve overall farm
            productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            How does AgriSync assist with farm analysis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AgriSync provides farmers with powerful tools for analyzing farm
            data and gaining valuable insights into their operations. Through
            advanced analytics and reporting capabilities, farmers can track key
            performance indicators, identify areas for improvement, and make
            data-driven decisions to optimize their farming practices.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            Who can benefit from AgriSync solutions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AgriSync’s solutions are designed to benefit a wide range of
            stakeholders in the agricultural industry, including medium and
            large-scale farmers, agribusinesses, and agricultural service
            providers. Whether you’re looking to increase crop yields, reduce
            input costs, or improve overall farm efficiency, AgriSync has a
            solution tailored to your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            How can I get started with AgriSync?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Getting started with AgriSync is easy! Simply reach out to our team
            to schedule a consultation and learn more about how our solutions
            can benefit your farm or agricultural business. We’ll work with you
            to assess your needs, customize a solution that fits your
            requirements, and provide ongoing support to ensure your success.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            What type of crops do AgriSync solutions support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AgriSync's solutions are designed to support a wide range of crops
            like cassava, maize and rice. Our technology is adaptable and can be
            customized to meet the unique needs of different crop types and
            growing conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            What kind of support does AgriSync Solution offer to its customers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AgriSync solution is committed to providing exceptional customer
            support to ensure our customers' success. Our team of experts is
            available to provide technical assistance, training, and guidance
            every step of the way. Whether you have questions about
            installation, operation, or troubleshooting, we're here to help.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            Are AgriSync’s solutions scalable for different farm sizes?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, AgriSync's solutions are scalable and can be customized to meet
            the needs of farms of all sizes, from medium-scale farm operations
            to large commercial enterprises. Whether you're managing a few acres
            or thousands of hectares, our technology can be tailored to fit your
            specific requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            How does AgriSync address concerns about data privacy and security?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AgriSync solution takes data privacy and security seriously and
            employs industry-leading practices to safeguard our customers'
            information. We adhere to strict data protection protocols and
            comply with relevant regulations to ensure the confidentiality and
            integrity of your data at all times.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            What is Integrated Aerial Precision?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Integrated Aerial Precision is one of AgriSync’s major solutions
            that leverages drone technology to provide farmers with accurate and
            real-time data about their fields. This data allows farmers to make
            informed decisions regarding crop management, irrigation, and pest
            control, leading to more effective farming practices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{ background: colors.primary[800], borderRadius: "20px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="fff" variant="h5" fontWeight="bold">
            What is IoT-Based irrigation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            IoT-based irrigation is another innovative solution offered by
            AgriSync solutions. It involves the use of Internet of Things (IoT)
            devices to automate and optimize irrigation processes on farms. By
            monitoring soil moisture levels, weather conditions, and crop water
            requirements in real-time, farmers can ensure precise and efficient
            water usage, resulting in healthier crops and increased yields.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
