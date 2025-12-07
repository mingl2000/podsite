export default function EpisodeDetail({ episode }) {
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-brand-600 mb-2">Episode {episode.id}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-900">{episode.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{episode.description}</p>

          <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <span>📅</span> {new Date(episode.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <span>⏱️</span> {formatDuration(episode.duration)}
            </span>
          </div>
        </div>

        {/* Audio Player */}
        <div className="mb-12 bg-gradient-to-r from-brand-50 to-blue-50 rounded-lg p-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Listen to this episode</p>
          <audio
            controls
            className="w-full rounded-lg bg-white shadow-sm"
            src={episode.audio}
          >
            Your browser does not support the audio player.
          </audio>
        </div>

        {/* Show Notes */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-6 text-brand-900">Show Notes</h2>
          {episode.notes.split('\n').map((line, i) => {
            if (line.startsWith('#')) {
              const level = line.match(/^#+/)[0].length;
              const text = line.replace(/^#+\s?/, '');
              const HeadingTag = `h${Math.min(level + 1, 6)}`;
              return (
                <HeadingTag key={i} className="mt-6 mb-4 font-bold text-brand-900">
                  {text}
                </HeadingTag>
              );
            }
            if (line.trim()) {
              return (
                <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                  {line}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </article>
  );
}
