import Head from 'next/head';
import episodes from '../../data/episodes.json';
import Navigation from '../../components/Navigation';
import EpisodeDetail from '../../components/EpisodeDetail';

export async function getStaticPaths() {
  const paths = episodes.map((episode) => ({
    params: { slug: episode.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const episode = episodes.find((ep) => ep.slug === params.slug);

  if (!episode) {
    return { notFound: true };
  }

  return {
    props: { episode },
  };
}

export default function EpisodePage({ episode }) {
  const episodeIndex = episodes.findIndex((ep) => ep.slug === episode.slug);
  const previousEpisode = episodeIndex > 0 ? episodes[episodeIndex - 1] : null;
  const nextEpisode = episodeIndex < episodes.length - 1 ? episodes[episodeIndex + 1] : null;

  return (
    <>
      <Head>
        <title>{episode.title} - Podcast Site</title>
        <meta name="description" content={episode.description} />
        <meta property="og:title" content={episode.title} />
        <meta property="og:description" content={episode.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://podcast-site.example.com/episodes/${episode.slug}`} />
        <link rel="canonical" href={`https://podcast-site.example.com/episodes/${episode.slug}`} />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EpisodeDetail episode={episode} />

          {/* Navigation */}
          <div className="mt-16 flex justify-between gap-4">
            {previousEpisode && (
              <a
                href={`/episodes/${previousEpisode.slug}`}
                className="flex-1 bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-left"
              >
                <p className="text-sm text-gray-500 mb-2">← Previous Episode</p>
                <p className="font-bold text-brand-900 line-clamp-2">{previousEpisode.title}</p>
              </a>
            )}
            {!previousEpisode && <div className="flex-1" />}

            {nextEpisode && (
              <a
                href={`/episodes/${nextEpisode.slug}`}
                className="flex-1 bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-right"
              >
                <p className="text-sm text-gray-500 mb-2">Next Episode →</p>
                <p className="font-bold text-brand-900 line-clamp-2">{nextEpisode.title}</p>
              </a>
            )}
            {!nextEpisode && <div className="flex-1" />}
          </div>

          <div className="mt-8 text-center">
            <a href="/episodes" className="text-brand-600 hover:text-brand-700 font-semibold">
              ← Back to All Episodes
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Podcast Site. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
