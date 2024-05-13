interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
}
function ButtonLink({ href, children, className, target }: ButtonLinkProps) {
  return (
    <a
      href={href}
      children={children}
      className={className}
      target={target}
    ></a>
  );
}

export default ButtonLink;
