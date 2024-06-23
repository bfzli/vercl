import { DocsThemeConfig } from 'nextra-theme-docs'
import { LogoIcon } from 'ui/icons'

const config: DocsThemeConfig = {
  logo: <LogoIcon />,
  head: function Head() {
    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />

        <title>
            Vercl - A Vercel API SDK
        </title>

        <meta property='og:title' content='Vercl - A Vercel API SDK' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://vercl.bfzli.com' />
        <meta property='og:site_name' content='Vercl' />
        <meta property='og:locale' content='en_US' />

        <meta name='description' content='Vercl simplifies the way to interact with the Vercel API as an SDK 🔥'/>
        <meta property='og:description' content='Vercl simplifies the way to interact with the Vercel API as an SDK 🔥'/>
        <meta name='twitter:description' content='Vercl simplifies the way to interact with the Vercel API as an SDK 🔥' />

        <meta name='twitter:image' content='https://vercl.bfzli.com/assets/og_thumbnail.png' />
        <meta property='og:image' content='https://vercl.bfzli.com/assets/og_thumbnail.png' />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Vercl',
      defaultTitle: 'Vercl - A Vercel API SDK',
      description: 'Vercl simplifies the way to interact with the Vercel API as an SDK 🔥',
      docsRepositoryBase: 'https://github.com/bfzli/vercl/blob/Production',
      keywords: [
        'Vercel',
        'Vercel API',
        'Vercl',
        'Vercel Docs',
        'Vercel Documentation',
        'Learn Vercel',
        'Vercel SDK'
      ],
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://vercl.bfzli.com',
        site_name: 'Vercl - A Vercel API SDK',
        description: 'Vercl simplifies the way to interact with the Vercel API as an SDK 🔥',
        images: [
          { url: '/assets/og_thumbnail.png' }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        site: '@vercl',
        title: 'Vercl - A Vercel API SDK',
        description: 'Vercl simplifies the way to interact with the Vercel API as an SDK 🔥',
        images: [
            { url: '/assets/og_thumbnail.png' }
        ]
      }
    }
  },
  project: { link: 'https://github.com/bfzli/vercl' },
  footer: { text: 'Vercl - A Vercel API SDK' }
}

export default config