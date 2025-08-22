import charactersData from '../../data/characters.json';
import Image from 'next/image';
import characters from '../../../public/characters.jpg';

export default function CharactersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      <Image
        src={characters}
        alt="characters"
        width={600}
        height={500}
        className="object-cover"
      />
      <ul className="grid grid-cols-3 gap-6">
        {charactersData.map((char) => (
          <li
            key={char.id}
            className="border p-4 rounded bg-gray-800 text-white"
          >
            <h2>{char.name}</h2>
            <p>{char.info}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
