import React from "react";
import MenuAccordian from "../MenuAccordian";
import MediterranohouseLogo from "../MediterranohouseLogo";
import { Image, HStack, Box } from "@chakra-ui/react";
import hookah from "../../assets/hookah.png";

const MenuPage = () => {
  return (
    <Box>
      <MediterranohouseLogo />

      <MenuAccordian />
    </Box>
  );
};

export default MenuPage;
