import Link from 'next/link';
import { FC, ReactNode } from 'react';

type SidebarLinkProps = {
  icon: ReactNode;
  label: string;
  href: string;
};

export const SidebarLink: FC<SidebarLinkProps> = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-zinc-100 hover:dark:bg-zinc-800/50"
    >
      <span className="flex items-center">{icon}</span>
      <span>{label}</span>
    </a>
  );
};
