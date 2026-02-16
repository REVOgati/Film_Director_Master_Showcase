import './globals.css'

export const metadata = {
  title: 'Aldrian Kibet - Film Director & Model',
  description: 'Award-winning film director and creative storyteller. Explore films, episodes, and fashion portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
