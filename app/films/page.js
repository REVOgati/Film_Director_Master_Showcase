import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import YouTubeEmbed from '@/components/YouTubeEmbed'

import profileData from '@/data/profile.json'
import filmsData from '@/data/films.json'

export default function FilmsPage() {
  // Sort by priority, then by date
  const sortedFilms = [...filmsData].sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }
    return new Date(b.premiereDate) - new Date(a.premiereDate)
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
              Films
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of cinematic stories that explore the human experience through compelling narratives and visual artistry.
            </p>
          </div>
        </section>

        {/* Films Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {sortedFilms.map((film) => (
                <div key={film.id} className="space-y-4">
                  <YouTubeEmbed 
                    videoId={film.youtubeId} 
                    title={film.title} 
                  />
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-2">
                      {film.title}
                    </h2>
                    <p className="text-gray-700 mb-4">
                      {film.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="border border-gray-300 px-3 py-1">
                        {film.category}
                      </span>
                      <span>{film.premiereDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedFilms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No films available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer profile={profileData} />
    </div>
  )
}
