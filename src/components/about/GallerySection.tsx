import Image from "next/image";
import { gallery } from "@/temp/aboutData";

export default function GallerySection() {
  return (
    <section className="section py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-2 text-balance">Moments that matter</h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          Real donors, real drives, real impact.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
        {gallery.map((src, idx) => (
          <div key={src} className="aspect-square overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={`Blood donation moment ${idx + 1}`}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
