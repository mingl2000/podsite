import Link from 'next/link';

export default function EpisodeListItem({ episode }) {
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Link href={`/episodes/${episode.slug}`}>
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer block p-6">
        <div className="flex gap-6">
          {/* Episode number/icon */}
          <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-brand-200 to-brand-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Ep. {episode.id}</span>
          </div>

          {/* Content */}
          <div className="flex-grow min-w-0">
            <h3 className="text-xl font-bold mb-2 text-brand-900 line-clamp-2">{episode.title}</h3>
            <p className="text-gray-600 mb-3 line-clamp-2">{episode.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>📅 {new Date(episode.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              <span>⏱️ {formatDuration(episode.duration)}</span>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-brand-600 text-2xl">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
