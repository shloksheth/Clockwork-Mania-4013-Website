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
          "rounded-[12px] border border-[rgba(201,151,58,0.15)] bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
          goldTop
            ? "border-t-2 border-t-[rgba(201,151,58,0.2)] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-t-[rgba(201,151,58,0.9)] hover:shadow-[0_-2px_12px_rgba(201,151,58,0.15)]"
            : "",
          hoverLift
            ? "transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,151,58,0.45)]"
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
