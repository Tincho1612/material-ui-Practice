import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import CardInfo from "./Components/CardInfo";
import Sidebar from "./Components/SideBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [validateHeaderValue, setValue] = useState<number | null>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
      <Button onClick={toggleDarkMode}>
        {darkMode ? "Tema Claro" : "Tema Oscuro"}
      </Button>
      <Box>
        <Typography variant="h6">Que te parecio?</Typography>
        <Rating
          name="simple-controlled"
          value={validateHeaderValue}
          onChange={handleChange}
        />
      </Box>
      <Typography variant="h4">Hooks mas comunes:</Typography>
      <Button variant={"outlined"} onClick={toggleSidebar}>
        Abrir menú
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <CardInfo
            title={"UseState"}
            description="Este es el hook mas común y permite usar estados en los componentes de funciones"
            img="https://media.graphassets.com/QvKtGhSzSXe8a0851syB"
          />
        </Grid>
        <Grid item xs={12} xl={12}>
          <CardInfo
            title="Use Effect"
            description="Es una función que toma una función por parámetro y con esa función podemos hacer cualquier cosa que queramos en el ciclo de vida de la app, por ejemplo ejecutarla cuando apenas se inica, cuando se cierra o cuando haya un cambio.
            como segundo parametro recibe cuando cambiar, se les pasa cuando queremos que se ejecute lo de adentro."
            img="https://www.penthara.com/wp-content/uploads/2021/04/uE-for-all-API-calls.png"
          />
        </Grid>
        <Grid item xs={12} xl={6}>
          <CardInfo
            title="Use Context"
            description="useContext es un Hook de React que te permite leer y suscribirte a un contexto desde tu componente."
            img="https://miro.medium.com/v2/resize:fit:866/1*5KZjV6GR2ua-vlc1fiMNPw.png"
          />
        </Grid>
        <Grid item xs={12} xl={6}>
          <CardInfo
            title="Use Ref"
            description="Es utilizado para hacer referencia a los elementos del componente, esto es muy útil para formularios"
            img="https://miro.medium.com/v2/resize:fit:1400/1*Iu593Qb8d8ZqMQMYwR9b4Q.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
