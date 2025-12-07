import Head from 'next/head';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How often do you release new episodes?',
      answer: 'We release a new episode every week on Wednesdays at 10 AM UTC. You can subscribe to get notified whenever a new episode is available.',
    },
    {
      id: 2,
      question: 'Can I download episodes to listen offline?',
      answer: 'Yes! Most podcast apps allow you to download episodes for offline listening. Check your podcast app settings for download options.',
    },
    {
      id: 3,
      question: 'How long are typical episodes?',
      answer: 'Our episodes typically run between 25-35 minutes, though some special episodes may be longer. You can find the duration listed with each episode.',
    },
    {
      id: 4,
      question: 'Where can I listen to the podcast?',
      answer: 'You can listen directly on our website, or subscribe on your favorite podcast platform including Spotify, Apple Podcasts, Google Podcasts, and more.',
    },
    {
      id: 5,
      question: 'Can I suggest a topic for an episode?',
      answer: 'Absolutely! We love hearing from our listeners. Email us at info@podcast-site.example.com with your topic suggestions.',
    },
    {
      id: 6,
      question: 'Do you have transcripts available?',
      answer: 'Yes, transcripts for most episodes are available in the episode details. We\'re working on adding transcripts for all past episodes.',
    },
    {
      id: 7,
      question: 'Can guests appear on the podcast?',
      answer: 'We\'re always interested in featuring expert guests. If you have relevant experience and would like to be on the show, reach out to us!',
    },
    {
      id: 8,
      question: 'Is the podcast free?',
      answer: 'Yes! Our podcast is completely free to listen to. We support the show through sponsorships and the passion of our community.',
    },
  ];

  return (
    <>
      <Head>
        <title>FAQ - Podcast Site</title>
        <meta name="description" content="Frequently asked questions about our podcast." />
        <meta property="og:title" content="FAQ - Podcast Site" />
        <meta property="og:description" content="Get answers to common questions about our podcast." />
        <link rel="canonical" href="https://podcast-site.example.com/faq" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-900">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mb-12">
            Find answers to common questions about our podcast, episodes, and how to listen.
          </p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-brand-900">{faq.question}</h3>
                  <span className={`text-2xl text-brand-600 transition transform ${openId === faq.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openId === faq.id && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">Didn't find an answer?</h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Feel free to reach out to our team.
            </p>
            <a
              href="mailto:info@podcast-site.example.com"
              className="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
            >
              Contact Us
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
