import { Image, Box } from '@chakra-ui/react'
import JazeeraLogoImage from '../../assets/JazeeraLogoImage.png'
const JazeeraLogo = () => {
  return (
    <>
    <Box boxSize='xs'>
    <Image src={JazeeraLogoImage} alt='Dan Abramov' />
  </Box>   
    </>
  )
}

export default JazeeraLogo