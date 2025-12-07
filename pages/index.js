import Head from 'next/head';
import episodes from '../data/episodes.json';
import FeaturedEpisode from '../components/FeaturedEpisode';
import Navigation from '../components/Navigation';

export default function Home() {
  const featured = episodes[0]; // First episode is featured

  return (
    <>
      <Head>
        <title>Podcast Site - Modern Podcasting Platform</title>
        <meta name="description" content="A modern, sleek podcast site with quality content on web development, design, and technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Podcast Site" />
        <meta property="og:description" content="Explore modern podcasting with our weekly episodes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://podcast-site.example.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-700 to-brand-900 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Our Podcast</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Explore fascinating conversations about technology, design, and the future of web development. New episodes every week.
            </p>
            <a href="/episodes" className="inline-block bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Browse All Episodes
            </a>
          </div>
        </section>

        {/* Featured Episode */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Episode</h2>
            <FeaturedEpisode episode={featured} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an Episode</h2>
            <p className="text-lg text-gray-600 mb-8">Subscribe to stay updated with new content every week.</p>
            <button className="bg-brand-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-800 transition">
              Subscribe Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Podcast Site. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            <a href="/about" className="hover:text-white">About</a> • <a href="/faq" className="hover:text-white">FAQ</a>
          </p>
        </div>
      </footer>
    </>
  );
}
