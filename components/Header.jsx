import React from "react";
import Link from "next/link";

const cat = [
  { name: "React", slug: "react" },
  { name: "Web", slug: "web" },
  { name: "JS", slug: "JS" },
];

function Header() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Graph CMS
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {cat.map((item) => (
            <Link key={item.slug} href={`/category/${item.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Header;
