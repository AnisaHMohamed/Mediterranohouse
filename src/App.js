import './App.css';
import MenuPage from "./components/MenuPage";
import { ChakraProvider, Box } from "@chakra-ui/react"
function App() {
  return (
    <div className="App">
    <ChakraProvider>
    <Box height="100%" backgroundColor="#262424">      <MenuPage />
    </Box>
  </ChakraProvider>
    </div>
  );
}

export default App;
;
