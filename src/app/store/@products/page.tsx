import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default async function ProductsPage() {
  await new Promise<void>(resolve => {
    setTimeout(() => {
        resolve();
    }, 2000);
  });

  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div>
      <h2>Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((product: Product) => (
          <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="p-8 rounded-t-lg"
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              {/* Rating and price details */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <Link href={'/'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}