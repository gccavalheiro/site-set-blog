'use client'
import { cn } from "@/lib/utils";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ActiveLink(props: ActiveLinkProps) {
  const { children, href, ...rest } = props;
  const linkPath = typeof href === 'string' ? href : href.pathname ?? ''
  const pathName = usePathname()

  const isActive = pathName === linkPath|| pathName?.startsWith(`${linkPath}/`)
    
  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm font-medium transition-colors hover:text-blue-200",
        isActive ? "text-blue-200" : "text-gray-100"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
