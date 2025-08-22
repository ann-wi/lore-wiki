import Image from 'next/image';
import worldBkg from '../../public/world-bkg.jpg';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1">
        <h1 className="text-4xl font-bold">Lore Wiki</h1>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src={worldBkg}
          alt="world background"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <h2 className="text-4xl font-bold">Introduction</h2>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <p>
            Collection of stories, articles, doodles about fantasy map I&apos;m
            creating.
          </p>
        </div>
        <h3>Future updates (list is not final)</h3>
        <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">List of locations</li>
          <li className="mb-2 tracking-[-.01em]">List of items</li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Created by Ania</p>
        <p>© 2025 Lore Wiki. All rights reserved.</p>
      </footer>
    </div>
  );
}
