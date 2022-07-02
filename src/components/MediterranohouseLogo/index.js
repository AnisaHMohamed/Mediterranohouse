import { Image, Box } from "@chakra-ui/react";
import MediterranohouseLogoImage from "../../assets/MediterranhouseLogoImage.png";
const MediterranohouseLogo = () => {
  return (
    <>
      <Box boxSize="sm">
        <Image src={MediterranohouseLogoImage} alt="Dan Abramov" />
      </Box>
    </>
  );
};

export default MediterranohouseLogo;
