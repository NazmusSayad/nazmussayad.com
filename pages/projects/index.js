import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'

import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <meta
            property="og:url"
            content="https://www.nazmussayad.com/projects"
          />
          <meta
            property="twitter:url"
            content="https://www.nazmussayad.com/projects"
          />
          <meta property="og:image" content="/cat-1080.jpg" />
          <meta property="twitter:image" content="/cat-1080.jpg" />
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practice my engineering skills,
              here's an archive of things that I've worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={<FaSearch />} />
              <Input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects
              .filter((e) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Cards
                  key={project.fields.title}
                  imageURL={project.fields.imageUrl}
                  title={project.fields.title}
                  desc={project.fields.description}
                  githubLink={project.fields.githubLink}
                  deployLink={project.fields.deployLink}
                  tag={project.fields.tags}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'projects',
    order: 'sys.updatedAt',
  })
  return {
    props: {
      projects: data.items.reverse(),
    },
  }
}
