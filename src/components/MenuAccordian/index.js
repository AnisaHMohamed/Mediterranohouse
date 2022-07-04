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
      <AccordionItem borderColor="#bc905a">
        <h2>
          <AccordionButton>
            <Box
              color="#bc905a"
              fontSize="30px"
              flex="1"
              textAlign="left"
              display="flex"
              justifyContent="space-between"
            >
              Hookah
            </Box>
            <AccordionIcon color="#bc905a" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color="#bc905a">
          <AccordionItem borderColor="transparent">
            <h2>
              <AccordionButton>
                <Box
                  color="#bc905a"
                  fontSize="30px"
                  flex="1"
                  textAlign="left"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box>Classic</Box>
                  <Box>$20</Box>
                </Box>
                <AccordionIcon color="#bc905a" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="#bc905a">
              Blueberry Mint
            </AccordionPanel>
            <AccordionPanel pb={4} color="#bc905a">
              Double Apple
            </AccordionPanel>
            <AccordionPanel pb={4} color="#bc905a">
              Grape Mint
            </AccordionPanel>
            <AccordionPanel pb={4} color="#bc905a">
              Gum Mint
            </AccordionPanel>
          </AccordionItem>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionItem borderColor="transparent">
            <h2>
              <AccordionButton>
                <Box
                  color="#bc905a"
                  fontSize="30px"
                  flex="1"
                  textAlign="left"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box>Premium</Box>
                  <Box>$22</Box>
                </Box>
                <AccordionIcon color="#bc905a" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="#bc905a">
              Berlin Nights
            </AccordionPanel>
            <AccordionPanel pb={4} color="#bc905a">
              Blue Mist
            </AccordionPanel>
            <AccordionPanel pb={4} color="#bc905a">
              Lady Killer
            </AccordionPanel>
            <AccordionPanel pb={4} color="#bc905a">
              Love 66
            </AccordionPanel>
          </AccordionItem>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem borderColor="#bc905a">
      <h2>
        <AccordionButton>
          <Box color="#bc905a" fontSize="30px" flex="1" textAlign="left">
            Drinks{" "}
          </Box>
          <AccordionIcon color="#bc905a" />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} color="#bc905a">
        <Box
          color="#bc905a"
          flex="1"
          textAlign="left"
          display="flex"
          justifyContent="space-between"
        >
          <Box>Juice</Box>
          <Box>$3</Box>
        </Box>
      </AccordionPanel>
      <AccordionPanel pb={4} color="#bc905a">
        <Box
        color="#bc905a"
        flex="1"
        textAlign="left"
        display="flex"
        justifyContent="space-between">
          <Box>Pop</Box>

          <Box>$2</Box>
        </Box>
      </AccordionPanel>
      <AccordionPanel pb={4} color="#bc905a">
        <Box
          color="#bc905a"
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