import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

export default function Index({ introduction, projects, contactMe }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Abdul Rahman - Software Engineer</title>
          <meta name="title" content="Abdul Rahman - Software Engineer" />
          <meta name="keywords" content="abdulrcs, abdulrcs website" />
          <meta
            name="description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abdulrahman.id" />
          <meta
            property="og:title"
            content="Abdul Rahman - Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />
          <meta
            property="og:image"
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://abdulrahman.id/" />
          <meta
            property="twitter:title"
            content="Abdul Rahman - Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />
          <meta
            property="twitter:image"
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
          />
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction introduction={introduction} />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          <ContactMe contactMe={contactMe} />
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
    content_type: 'featuredProjects',
    order: 'fields.order',
  })

  let data3 = await client.getEntries({
    content_type: 'introduction',
    limit: 2,
    order: 'sys.createdAt',
  })

  let data4 = await client.getEntries({
    content_type: 'contactMe',
    limit: 1,
    order: 'sys.createdAt',
  })

  return {
    props: {
      projects: data.items,
      introduction: data3.items,
      contactMe: data4.items,
    },
  }
}
