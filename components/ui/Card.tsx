import { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  hoverLift?: boolean;
  goldTop?: boolean;
};

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "", hoverLift = false, goldTop = false, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "rounded-card border border-border bg-surface shadow-[0_1px_0_rgba(255,255,255,0.04)]",
          goldTop
            ? "border-t border-t-gold/25 transition-[border-color,box-shadow] duration-200 ease-out hover:border-t-gold/70"
            : "",
          hoverLift
            ? "transition-all duration-300 hover:border-[rgba(99,11,12,0.35)]"
            : "",
          className,
        ].join(" ")}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
