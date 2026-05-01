import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Common = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps | LinkProps) {
  const variant = props.variant ?? "primary";
  const className = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${
    props.className ?? ""
  }`;

  if ("href" in props) {
    const { children, className: _c, variant: _v, ...rest } = props;
    return (
      <a {...rest} className={className}>
        {children}
      </a>
    );
  }

  const { children, className: _c, variant: _v, ...rest } = props;
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
}

