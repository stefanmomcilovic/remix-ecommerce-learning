import type { MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import { Product } from "~/lib/interface";
import { client } from "~/lib/sanity";

interface iAppProps {
  products: Product[];
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix Ecommerce" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const query = `*[_type == "product"] { 
    price,
    name,
    slug,
    "imageUrl": image[0].asset->url
  }`;

  const products = await client.fetch(query);

  return json({ products });
}

export default function Index() {
  const { products } = useLoaderData<typeof loader>() as iAppProps;

  return (
  <>
   <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row mt-12">
    <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
      <p className="mb-4 font-semibold text-indigo-600 md:mb-6 md:text-lg xl:text-xl">
        Welcome to Remix Ecommerce
      </p>
      <h2 className="text-black mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
        Focus on tech that matters
      </h2>
      <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
        Welcome to Remix Commerce, your ultimate destination for all things tech! Step into a world of innovation and discovery as we bring you the latest and greatest gadgets, electronics and accessories.
      </p>
      <div>
        <Link to="#products" className="rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 md:text-base">
          Shop now
        </Link>
      </div>
    </div>

    <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
      <img
        className="object-cover object-center w-full h-full"
        src="/assets/iphone-14-pro-hero-image.jpg"
        alt="Hero"
      />
    </div>
   </section>

   <section id="products">
    <div className="py-24 sm:py-32 lg:pt-32">
      <div className="mt-6 grid grid-col-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {products.map((product) => (
          <Link to={`/product/${product.slug.current}`} key={product.slug.current} className="group relative">
            <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
              <img
                className="object-contain object-center w-full h-full"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-sm font-medium text-gray-900">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
   </section>
  </>
  );
}