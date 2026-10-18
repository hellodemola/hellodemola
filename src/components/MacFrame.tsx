import Image from "next/image";

// A MacBook drawn in CSS around a site screenshot: black bezel with a
// camera notch, then the aluminium base with its thumb groove. Sizes are
// percentages so it scales with its container.
export default function MacFrame({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Lid */}
      <div className="relative mx-auto w-[84%] rounded-t-[3.2%_5%] bg-[#0b0b0d] p-[1.6%] pb-[2.4%] shadow-[0_0_0_1px_#2b2c30,inset_0_0_0_1px_#3a3b40]">
        <span className="absolute top-[0.9%] left-1/2 z-10 h-[2.2%] min-h-1 w-[9%] -translate-x-1/2 rounded-b-md bg-[#0b0b0d]">
          <span className="absolute top-1/2 left-1/2 size-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1d2a3a] sm:size-1" />
        </span>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[0.6%] bg-paper-2">
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
          {/* Glass sheen */}
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_38%)]" />
        </div>
      </div>
      {/* Base */}
      <div className="relative mx-auto h-0 w-full rounded-b-[40%_100%] pb-[2.8%] bg-[linear-gradient(180deg,#f4f5f7_0%,#d5d7db_35%,#a9acb2_80%,#7d8087_100%)] shadow-[0_1px_0_#ffffff_inset,0_24px_44px_-14px_rgba(15,17,21,0.55)] ring-1 ring-black/10">
        <span className="absolute top-0 left-1/2 h-[45%] w-[14%] -translate-x-1/2 rounded-b-lg bg-[linear-gradient(180deg,#b9bcc1,#d9dbdf)]" />
      </div>
    </div>
  );
}
