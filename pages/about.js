import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Podcast Site</title>
        <meta name="description" content="Learn about our podcast, hosts, and mission." />
        <meta property="og:title" content="About - Podcast Site" />
        <meta property="og:description" content="Learn about our podcast and mission." />
        <link rel="canonical" href="https://podcast-site.example.com/about" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-brand-900">About Us</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-brand-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                We are passionate about exploring the latest trends and best practices in web development, design, and technology. 
                Our podcast brings together experts, innovators, and thought leaders to discuss the future of the web.
              </p>
              <p className="text-lg text-gray-700">
                Every episode dives deep into topics that matter to developers and designers, providing actionable insights and inspiration 
                for your next project.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-brand-900">Our Hosts</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team of experienced developers and designers bring unique perspectives and expertise to every conversation. 
                With years of experience in the industry, we're committed to delivering high-quality content that educates and inspires.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Sarah Chen', role: 'Host & Lead Developer' },
                  { name: 'Marcus Johnson', role: 'Co-host & Designer' },
                  { name: 'Elena Rodriguez', role: 'Producer & Editor' },
                  { name: 'David Park', role: 'Technical Advisor' },
                ].map((host) => (
                  <div key={host.name} className="bg-brand-50 rounded-lg p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-300 to-brand-500 rounded-full mb-4 flex items-center justify-center text-white font-bold text-lg">
                      {host.name.split(' ')[0][0]}{host.name.split(' ')[1][0]}
                    </div>
                    <h3 className="text-xl font-bold text-brand-900 mb-1">{host.name}</h3>
                    <p className="text-gray-600">{host.role}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-brand-900">Contact Us</h2>
              <p className="text-lg text-gray-700 mb-4">
                Have feedback, questions, or want to suggest a topic? We'd love to hear from you!
              </p>
              <p className="text-lg">
                <strong>Email:</strong> <a href="mailto:info@podcast-site.example.com" className="text-brand-600 hover:text-brand-700">info@podcast-site.example.com</a>
              </p>
            </section>
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
