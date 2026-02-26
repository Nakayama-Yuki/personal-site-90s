import Link from "next/link";
import { RetroFrame } from "@/components/retro/RetroFrame";
import { profile, updates } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <RetroFrame title="自己紹介">
        <p>
          {profile.intro}
          <br />
          {profile.location} でのんびり開発中です。
        </p>
      </RetroFrame>

      <RetroFrame title="更新履歴">
        <ul>
          {updates.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </RetroFrame>

      <RetroFrame title="コンテンツ">
        <ul>
          <li>
            <Link href="/profile">プロフィール</Link>
          </li>
          <li>
            <Link href="/links">リンク集</Link>
          </li>
          <li>
            <Link href="/works">作品</Link>
          </li>
          <li>
            <Link href="/contact">連絡先</Link>
          </li>
        </ul>
      </RetroFrame>
    </>
  );
}
