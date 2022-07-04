import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const MenuAccordian = () => {
  return (
    <Accordion allowMultiple>
    <AccordionItem borderColor="black">
    <h2>
      <AccordionButton>
      <Box
      color="black"
      fontSize="30px"
      flex="1"
      textAlign="left"
      display="flex"
      justifyContent="space-between"
    >
      <Box>Hookah</Box>
      <Box>$20</Box>
    </Box>
        <AccordionIcon color="black" />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="black">
    <Box
      color="black"
      flex="1"
      textAlign="left"
      display="flex"
      justifyContent="space-between"
    >
      <Box>Refill</Box>
      <Box>$5</Box>
    </Box>
  </AccordionPanel>
    <AccordionPanel pb={4} color="black">
      <Box
        color="black"
        flex="1"
     
      >
        <Box>Lady Killer</Box>
 
      </Box>
    </AccordionPanel>
    <AccordionPanel pb={4} color="black">
    <Box
      color="black"
      flex="1"
   
    >
      <Box>Blueberry Mint</Box>

    </Box>
  </AccordionPanel>

  <AccordionPanel pb={4} color="black">
  <Box
    color="black"
    flex="1"
   
  >
    <Box>Mint</Box>

  </Box>
</AccordionPanel>
<AccordionPanel pb={4} color="black">
  <Box
    color="black"
    flex="1"

  >
    <Box>Grape Mint</Box>

  </Box>
</AccordionPanel>
<AccordionPanel pb={4} color="black">
  <Box
    color="black"
    flex="1"
  
  >
    <Box>Orange Mint</Box>

  </Box>
</AccordionPanel>
<AccordionPanel pb={4} color="black">
  <Box
    color="black"
    flex="1"
   
  >
    <Box>Double Apple</Box>

  </Box>
</AccordionPanel>
<AccordionPanel pb={4} color="black">
  <Box
    color="black"
    flex="1"
  >
    <Box>Double Apple</Box>

  </Box>
</AccordionPanel>
    <AccordionPanel pb={4} color="black">
      <Box
        color="#dbc4ff"
        flex="1"
        textAlign="left"
        display="flex"
        justifyContent="space-between"
      >
        <Box>Water</Box>
        <Box>$2</Box>
      </Box>
    </AccordionPanel>
  </AccordionItem>

      <AccordionItem borderColor="black">
        <h2>
          <AccordionButton>
            <Box color="black" fontSize="30px" flex="1" textAlign="left">
              Drinks
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color="black">
          <Box
            color="black"
            flex="1"
            textAlign="left"
            display="flex"
            justifyContent="space-between"
          >
            <Box>Barbican</Box>
            <Box>$3</Box>
          </Box>
        </AccordionPanel>
        <AccordionPanel pb={4} color="black">
          <Box
            color="black"
            flex="1"
            textAlign="left"
            display="flex"
            justifyContent="space-between"
          >
            <Box>Pop</Box>
            <Box>$2</Box>
          </Box>
        </AccordionPanel>
        <AccordionPanel pb={4} color="black">
          <Box
            color="black"
            flex="1"
            textAlign="left"
            display="flex"
            justifyContent="space-between"
          >
            <Box>Red Bull</Box>
            <Box>$3</Box>
          </Box>
        </AccordionPanel>
        <AccordionPanel pb={4} color="black">
        <Box
          color="black"
          flex="1"
          textAlign="left"
          display="flex"
          justifyContent="space-between"
        >
          <Box>Water</Box>
          <Box>$2</Box>
        </Box>
      </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MenuAccordian;
