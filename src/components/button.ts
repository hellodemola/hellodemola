// Button styles shared by links and the booking button. Kept out of the
// client component so server pages can use it.
const VARIANTS = {
  accent: "bg-accent text-white hover:bg-accent-ink",
  ink: "bg-ink text-paper hover:bg-ink-2",
  light: "bg-paper text-ink hover:bg-white",
  outline: "border border-current hover:bg-ink hover:text-paper",
};

export type ButtonVariant = keyof typeof VARIANTS;

export const buttonClass = (variant: ButtonVariant = "accent") =>
  `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${VARIANTS[variant]}`;
