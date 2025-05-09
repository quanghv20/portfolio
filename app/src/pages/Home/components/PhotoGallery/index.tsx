import React from "react";

const imgUrls = [
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=384&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=384&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=384&q=75",
];

export default function PhotoGallery() {
  return (
    <>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {imgUrls.map((imgUrl: string, index: number) => {
            return (
              <div
                key={index}
                className={`relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${
                  index % 2 === 0 ? "rotate-2" : "-rotate-2"
                }`}
              >
                <img
                  alt=""
                  loading="lazy"
                  width="3744"
                  height="5616"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 h-full w-full object-cover"
                  // style="color:transparent"
                  sizes="(min-width: 640px) 18rem, 11rem"
                  src={imgUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
