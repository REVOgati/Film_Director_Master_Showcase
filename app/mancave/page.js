import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import YouTubeEmbed from '@/components/YouTubeEmbed'

import profileData from '@/data/profile.json'
import mancaveData from '@/data/mancave.json'

export default function MancavePage() {
  // Sort by episode number (descending)
  const sortedEpisodes = [...mancaveData].sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }
    return b.episodeNumber - a.episodeNumber
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
              Mancave Episodes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              An episodic series exploring conversations, culture, and creativity.
            </p>
          </div>
        </section>

        {/* Episodes Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedEpisodes.map((episode) => (
                <div key={episode.id} className="card">
                  <YouTubeEmbed 
                    videoId={episode.youtubeId} 
                    title={episode.title} 
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      Episode {episode.episodeNumber}
                    </div>
                    <h2 className="text-xl font-serif font-bold mb-2">
                      {episode.title}
                    </h2>
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

            {sortedEpisodes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No episodes available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer profile={profileData} />
    </div>
  )
}
