import locationsData from '../../data/locations.json';
import Image from 'next/image';
import locations from '../../../public/locations.jpg';

export default function LocationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Locations</h1>
      <Image
        src={locations}
        alt="map locations"
        width={300}
        height={200}
        className="object-cover"
      />
      <ul className="grid grid-cols-3 gap-6">
        {locationsData.map((location) => (
          <li
            key={location.id}
            className="border p-4 rounded bg-gray-800 text-white"
          >
            <h2>{location.name}</h2>
            <p>{location.description}</p>
            <p>Ruler: {location.ruler}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
