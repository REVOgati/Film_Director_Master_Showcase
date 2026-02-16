import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactButtons from '@/components/ContactButtons'
import YouTubeEmbed from '@/components/YouTubeEmbed'

import profileData from '@/data/profile.json'
import filmsData from '@/data/films.json'
import mancaveData from '@/data/mancave.json'

export default function HomePage() {
  // Get featured content
  const featuredFilm = filmsData.find(f => f.featured) || filmsData[0]
  const featuredEpisodes = mancaveData.filter(e => e.featured).slice(0, 2)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
                  {profileData.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4 font-serif">
                  {profileData.title}
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {profileData.bio}
                </p>
                <ContactButtons profile={profileData} />
              </div>
              
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-40 h-52 sm:w-56 sm:h-72 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                  <Image
                    src={profileData.profileImage}
                    alt={profileData.name}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Film */}
        {featuredFilm && (
          <section className="section-padding">
            <div className="container-custom">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-2">
                    Featured Film
                  </h2>
                  <p className="text-gray-600">
                    Latest cinematic work
                  </p>
                </div>
                <Link href="/films" className="nav-link text-sm">
                  View All Films →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <YouTubeEmbed 
                    videoId={featuredFilm.youtubeId} 
                    title={featuredFilm.title} 
                  />
                </div>
                <div className="lg:pt-8">
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {featuredFilm.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {featuredFilm.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="border border-gray-300 px-3 py-1">
                      {featuredFilm.category}
                    </span>
                    <span>{featuredFilm.premiereDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Mancave Episodes */}
        {featuredEpisodes.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-2">
                    Mancave Episodes
                  </h2>
                  <p className="text-gray-600">
                    Latest episodes from the series
                  </p>
                </div>
                <Link href="/mancave" className="nav-link text-sm">
                  View All Episodes →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredEpisodes.map((episode) => (
                  <div key={episode.id} className="card">
                    <YouTubeEmbed 
                      videoId={episode.youtubeId} 
                      title={episode.title} 
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-2">
                        {episode.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {episode.description}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {episode.releaseDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-black text-white p-12 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                Let's Create Something Extraordinary
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Available for film projects, creative collaborations, and modelling opportunities.
              </p>
              <ContactButtons profile={profileData} />
            </div>
          </div>
        </section>
      </main>

      <Footer profile={profileData} />
    </div>
  )
}
