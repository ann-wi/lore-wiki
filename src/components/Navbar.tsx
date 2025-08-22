import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-900 text-white">
      <Link href="/">Home</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/items">Items</Link>
    </nav>
  );
}
