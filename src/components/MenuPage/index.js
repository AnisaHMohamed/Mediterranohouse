import React from "react";
import MenuAccordian from "../MenuAccordian";
import MediterranohouseLogo from "../MediterranohouseLogo";
import { Box } from "@chakra-ui/react";

const MenuPage = () => {
  return (
    <Box>
      <MediterranohouseLogo />

      <MenuAccordian />
    </Box>
  );
};

export default MenuPage;
