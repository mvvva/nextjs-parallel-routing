import React from 'react';
import Link from 'next/link';

interface Item {
  title: string;
  href: string;
}

export default function Navigation({ items }: { items: Item[] }) {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg text-white">
      <ul className="flex gap-5 ">
        {items.map((item, index) => (
          <li key={index}>
           <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
