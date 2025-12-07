import Head from 'next/head';
import episodes from '../../data/episodes.json';
import Navigation from '../../components/Navigation';
import EpisodeListItem from '../../components/EpisodeListItem';

export default function Episodes() {
  return (
    <>
      <Head>
        <title>All Episodes - Podcast Site</title>
        <meta name="description" content="Browse all episodes of our podcast. 20 episodes covering web development, design, and technology." />
        <meta property="og:title" content="All Episodes - Podcast Site" />
        <meta property="og:description" content="Explore all 20 episodes of our podcast." />
        <link rel="canonical" href="https://podcast-site.example.com/episodes" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-900">All Episodes</h1>
          <p className="text-lg text-gray-600 mb-12">
            {episodes.length} episodes exploring web development, design, and technology
          </p>

          <div className="grid gap-6">
            {episodes.map((episode) => (
              <EpisodeListItem key={episode.id} episode={episode} />
            ))}
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
