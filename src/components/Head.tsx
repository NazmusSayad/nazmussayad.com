import HeadWrapper from 'next/head'
import head from '$data/head'

const Head = () => {
  return (
    <HeadWrapper>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{head.title}</title>
      <meta name="tweetmeme-title" content={head.title} />
      <meta name="apple-mobile-web-app-title" content={head.title} />
      <meta property="og:title" content={head.title} />
      <meta property="og:site_name" content={head.title} />
      <meta name="description" content={head.description} />
      <meta property="og:description" content={head.description} />

      <meta name="og:country-name" content="Bangladesh" />
      <meta name="og:email" content={head.email} />
      <meta name="og:url" content={head.url} />
      <meta name="og:image" content={head.ogImage} />
      <link rel="icon" href={head.icon} type="image/x-icon" />
      <link rel="apple-touch-icon" href={head.icon} />
      <link rel="apple-touch-startup-image" href={head.icon} />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="1024x1024"
        href={head.icon}
      />

      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta name="language" content="English" />
      <meta name="author" content={head.name} />
      <link rel="me" type="text/html" href={head.github} />
      <meta property="og:locale" content="en_US" />
      <meta name="revisit-after" content="1 days" />
      <meta name="”robots”" content="index, follow" />
      <meta name="keywords" content={head.keywords.join(' ')} />
      <meta property="og:type" content="website" />

      <meta name="theme-color" content={head.theme} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar" content={head.status} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="google" content="nositelinkssearchbox" />
      <meta name="googlebot" content="translate" />

 
    </HeadWrapper>
  )
}

export default Head
