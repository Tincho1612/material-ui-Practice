import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  initialTabIndex?: number;
}

const BasicTabs: React.FC<BasicTabsProps> = ({ initialTabIndex = 0 }) => {
  const [value, setValue] = React.useState<number>(initialTabIndex);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (newValue: number, sectionId: string) => {
    setValue(newValue);
    scrollToSection(sectionId);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="React Basic"
            onClick={() => handleTabChange(0, ".React-basics")}
          />
          <Tab label="Hooks" onClick={() => handleTabChange(1, ".Hooks")} />
          <Tab
            label="Material UI"
            onClick={() => handleTabChange(2, ".Material-Ui")}
          />
        </Tabs>
      </Box>
      <div id="react-basic-section">
        {/* Contenido de la sección React Basic */}
      </div>
      <div id="hooks-section">{/* Contenido de la sección Hooks */}</div>
      <div id="mui-section">{/* Contenido de la sección Material UI */}</div>
    </Box>
  );
};

export default BasicTabs;
