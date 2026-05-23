export function WaveDivider({
  flip = false,
  fill = "var(--cream)",
}: {
  flip?: boolean;
  fill?: string;
}) {
  return (
    <div
      aria-hidden
      className="wave-divider"
      style={{ transform: flip ? "scaleY(-1)" : undefined, color: fill }}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
