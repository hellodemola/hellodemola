import Image from "next/image";

// An iPhone drawn in CSS around a phone-width screenshot: titanium edge,
// black bezel, Dynamic Island and side buttons. Sized by its container's
// width; the phone keeps a 9:19.5 shape.
export default function PhoneFrame({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    // Positioning classes go on this wrapper; the phone itself is relative
    // inside it, so passing "absolute" here isn't overridden.
    <div className={className}>
      <div className="relative">
        {/* Side buttons */}
        <span className="absolute top-[22%] -left-[1.6%] h-[6%] w-[1.6%] rounded-l-sm bg-[#9a9ca2]" />
        <span className="absolute top-[31%] -left-[1.6%] h-[10%] w-[1.6%] rounded-l-sm bg-[#9a9ca2]" />
        <span className="absolute top-[28%] -right-[1.6%] h-[14%] w-[1.6%] rounded-r-sm bg-[#9a9ca2]" />
        <div className="relative aspect-[9/19.5] rounded-[16%/7.4%] bg-[linear-gradient(145deg,#d4d6da,#8e9196_45%,#c9cbd0)] p-[1.4%] shadow-[0_30px_60px_-20px_rgba(15,17,21,0.55)]">
          <div className="relative h-full w-full overflow-hidden rounded-[14.6%/6.8%] bg-black p-[3.2%]">
            <div className="relative h-full w-full overflow-hidden rounded-[12%/5.6%] bg-paper-2">
              <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className="object-cover object-top"
              />
              {/* Dynamic Island */}
              <span className="absolute top-[1.6%] left-1/2 z-10 h-[3.6%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_35%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
