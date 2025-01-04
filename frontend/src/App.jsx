import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w="100%" p="4"  minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
