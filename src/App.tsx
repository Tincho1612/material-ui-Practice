import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CardInfo from "./Components/CardInfo";
import Navbar from "./Components/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/Pages/AboutUs";
import { Home } from "@mui/icons-material";
import HomePage from "./Components/Pages/HomePage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Container sx={{ textAlign: "center" }}>
      <Box margin={10}>
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </Container>
  );
}

export default App;
