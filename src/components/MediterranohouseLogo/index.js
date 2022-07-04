import { Image, Box } from '@chakra-ui/react'
import mediterranohouseLogoImage from '../../assets/MediterranohouseLogo.png'
const mediterranohouseLogo = () => {
  return (
    <>
    <Box boxSize='xs'>
    <Image src={mediterranohouseLogoImage} alt='Dan Abramov' />
  </Box>   
    </>
  )
}

export default mediterranohouseLogo