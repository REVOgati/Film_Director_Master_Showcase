import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InstagramEmbed from '@/components/InstagramEmbed'

import profileData from '@/data/profile.json'
import photosData from '@/data/photos.json'

export default function FashionPage() {
  // Sort by priority
  const sortedPhotos = [...photosData].sort((a, b) => a.priority - b.priority)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
              Fashion & Modelling
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of fashion photography and modelling work, capturing style, elegance, and creative expression.
            </p>
          </div>
        </section>

        {/* Photos Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPhotos.map((photo) => {
                // Extract post ID from URL
                const postId = photo.instagramUrl.match(/\/p\/([^/]+)/)?.[1] || ''
                
                return (
                  <div key={photo.id} className="space-y-4">
                    <InstagramEmbed postId={postId} title={photo.title} />
                    <div className="text-center">
                      <h3 className="text-lg font-serif font-bold mb-2">
                        {photo.title}
                      </h3>
                      {photo.description && (
                        <p className="text-gray-600 text-sm">
                          {photo.description}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {sortedPhotos.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No photos available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Follow on Instagram
            </h2>
            <p className="text-gray-600 mb-6">
              See more behind-the-scenes content and daily updates
            </p>
            <a
              href={profileData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              @{profileData.contact.instagram}
            </a>
          </div>
        </section>
      </main>

      <Footer profile={profileData} />
    </div>
  )
}
