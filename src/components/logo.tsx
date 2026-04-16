import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  height?: number;
};

export function Logo({ className, height = 32 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 8 105 18"
      height={height}
      overflow="visible"
      className={cn("select-none", className)}
      aria-label="Settle Up"
      role="img"
    >
      <text
        x="0"
        y="24"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          fontSize: 20,
          fontWeight: 900,
          fontStyle: "italic",
          letterSpacing: "-0.07em",
        }}
      >
        <tspan className="fill-[#18181B] dark:fill-[#F1F5F9]">SETTLE</tspan>
        <tspan fill="#10B981">UP</tspan>
      </text>
    </svg>
  );
}
