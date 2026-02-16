import Link from 'next/link'

export default function Footer({ profile }) {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">
              {profile.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {profile.title}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/films" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/mancave" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mancave Episodes
                </Link>
              </li>
              <li>
                <Link href="/fashion" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Fashion & Modelling
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={profile.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={profile.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
