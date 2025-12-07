import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-brand-700">
            🎙️ Podcast
          </Link>
          <ul className="flex gap-8 text-gray-700">
            <li>
              <Link href="/" className="hover:text-brand-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/episodes" className="hover:text-brand-700 transition">
                Episodes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-700 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-brand-700 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
