import Image from 'next/image';
import items from '../../../public/items.jpg';

export default function ItemsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Items</h1>
      <Image
        src={items}
        alt="items"
        width={300}
        height={200}
        className="object-cover"
      />
    </div>
  );
}
