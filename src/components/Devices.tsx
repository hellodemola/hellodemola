import MacFrame from "./MacFrame";
import PhoneFrame from "./PhoneFrame";

// A MacBook with, when there's a phone capture, an iPhone standing in front
// of it at the bottom right, to show the same product on web and mobile.
export default function Devices({
  desktop,
  mobile,
  alt,
  sizes,
  priority = false,
  hoverLift = false,
}: {
  desktop: string;
  mobile?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Lift the devices when a parent with the `group` class is hovered. */
  hoverLift?: boolean;
}) {
  return (
    <div className={`relative ${mobile ? "pr-[9%]" : ""}`}>
      <MacFrame
        src={desktop}
        alt={`${alt} on desktop`}
        sizes={sizes}
        priority={priority}
        className={hoverLift ? "transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.015]" : ""}
      />
      {mobile && (
        <PhoneFrame
          src={mobile}
          alt={`${alt} on mobile`}
          sizes="(min-width: 1024px) 200px, 22vw"
          className={`absolute right-0 -bottom-[6%] w-[19%] ${hoverLift ? "transition-transform delay-75 duration-700 ease-out group-hover:-translate-y-4 group-hover:-rotate-2" : ""}`}
        />
      )}
    </div>
  );
}
