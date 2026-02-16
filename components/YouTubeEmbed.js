export default function YouTubeEmbed({ videoId, title = 'YouTube video' }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="eager"
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  )
}
