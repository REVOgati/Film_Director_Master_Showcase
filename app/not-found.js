import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import profileData from '@/data/profile.json'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center section-padding">
        <div className="text-center">
          <h1 className="text-6xl font-serif font-bold mb-4">404</h1>
          <h2 className="text-2xl font-serif mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </main>

      <Footer profile={profileData} />
    </div>
  )
}
