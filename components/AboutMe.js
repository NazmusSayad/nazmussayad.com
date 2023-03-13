import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
              <chakra.span
                onMouseOver={() => handleHover(`about_${text}`)}
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="button1" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Nazmus Sayad, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br /> I really liked to build stuff using{' '}
              <MoreInfo
                text="no-code tools,"
                content="I used to make games without code using RPG Maker VX, and build a simple website with blogspot back in primary school."
              />
              and from that, I explored how to code myself, fast-forward to
              today, I do programming in various languages and technologies.
              <br />
              <br />
              When I'm not coding I play games with my friends, watch good
              things, or if the weather's good, play nothing! 🏀
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
              <Image
                src="/cat-1080.jpg"
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                borderRadius="50%"
                alt="Nazmus Sayad"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
