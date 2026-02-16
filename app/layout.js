import './globals.css'

export const metadata = {
  title: 'Aldrian Kibet - Film Director & Model',
  description: 'Award-winning film director and creative storyteller. Explore films, episodes, and fashion portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
