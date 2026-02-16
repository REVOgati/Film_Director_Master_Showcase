import Link from 'next/link'

export default function ContactButtons({ profile }) {
  const whatsappUrl = profile.contact.whatsapp 
    ? `https://wa.me/${profile.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(profile.contact.whatsappMessage)}`
    : null

  const instagramUrl = `https://instagram.com/${profile.contact.instagram}`
  const youtubeUrl = profile.socialLinks.youtube

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          WhatsApp
        </a>
      )}
      
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        Instagram
      </a>

      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        YouTube Channel
      </a>

      {profile.contact.email && profile.contact.email !== 'YOUR_EMAIL@example.com' && (
        <a href={`mailto:${profile.contact.email}`} className="btn-secondary">
          Email
        </a>
      )}
    </div>
  )
}
