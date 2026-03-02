import Link from "next/link";

const links = [
  { href: "/", label: "トップ" },
  { href: "/profile", label: "プロフィール" },
  { href: "/links", label: "リンク集" },
  { href: "/works", label: "作品" },
  { href: "/contact", label: "連絡先" },
];

export function RetroNav() {
  return (
    <nav className="retro-nav" aria-label="メインナビゲーション">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
