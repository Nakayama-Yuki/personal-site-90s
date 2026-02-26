import { RetroFrame } from "@/components/retro/RetroFrame";
import { favoriteLinks } from "@/lib/site-data";

export default function LinksPage() {
  return (
    <RetroFrame title="リンク集">
      <ul>
        {favoriteLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer noopener">
              {link.label}
            </a>{" "}
            - {link.note}
          </li>
        ))}
      </ul>
    </RetroFrame>
  );
}
