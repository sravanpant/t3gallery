import Image from "next/image";
import React from "react";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/3e685920-7d9f-416a-9380-c96d4c5c66e6-l797yv.jpg",
  "https://utfs.io/f/0ad04a50-9a54-4668-9b6c-b0984aa4c53f-eb78i8.jpg",
  "https://utfs.io/f/a81db6b3-add2-4b6a-a450-e0791cbb8007-dwgt8c.jpg",
  "https://utfs.io/f/6c6dd3e6-0abf-49ae-ac85-423beb4b049b-z2txr5.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
