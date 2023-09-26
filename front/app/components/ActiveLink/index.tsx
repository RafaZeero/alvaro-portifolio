'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps extends LinkProps {
  activeClassName: string;
  linkTo: string;
}

export function ActiveLink({ activeClassName, linkTo, ...props }: ActiveLinkProps) {
  const asPath = usePathname();

  const className = asPath === props.href ? activeClassName : '';

  return (
    <Link {...props} className={className}>
      {linkTo}
    </Link>
  );
}
