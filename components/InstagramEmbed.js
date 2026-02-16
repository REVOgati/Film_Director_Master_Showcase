export default function InstagramEmbed({ postId, title = 'Instagram post' }) {
  return (
    <div className="flex justify-center">
      <iframe
        src={`https://www.instagram.com/p/${postId}/embed`}
        title={title}
        width="400"
        height="600"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        loading="eager"
        className="border-0 max-w-full"
      />
    </div>
  )
}
