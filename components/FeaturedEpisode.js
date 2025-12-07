export default function FeaturedEpisode({ episode }) {
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="w-full aspect-square bg-gradient-to-br from-brand-200 to-brand-400 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Episode {episode.id}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-brand-900">{episode.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{episode.description}</p>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
              <span>📅 {new Date(episode.publish_date).toLocaleDateString()}</span>
              <span>⏱️ {formatDuration(episode.duration)}</span>
            </div>

            <div className="mb-6 prose prose-sm max-w-none">
              {episode.notes.split('\n').map((line, i) => (
                <p key={i} className="text-gray-700">{line}</p>
              ))}
            </div>
          </div>

          {/* Audio Player */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-gray-700 mb-2">Listen Now</p>
            <audio
              controls
              className="w-full rounded-lg bg-gray-100"
              src={episode.audio}
            >
              Your browser does not support the audio player.
            </audio>
          </div>

          {/* CTA Button */}
          <a
            href={`/episodes/${episode.slug}`}
            className="mt-6 inline-block bg-brand-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-700 transition text-center"
          >
            Read Full Show Notes →
          </a>
        </div>
      </div>
    </article>
  );
}
