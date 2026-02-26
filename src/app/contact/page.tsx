import { RetroFrame } from "@/components/retro/RetroFrame";

export default function ContactPage() {
  return (
    <RetroFrame title="連絡先">
      <p>ご連絡は以下の方法でお願いします。</p>
      <ul className="retro-contact-list">
        <li>Email: yuki@example.com</li>
        <li>X (Twitter): @yuki_dev</li>
        <li>GitHub: github.com/yuki</li>
      </ul>
      <p>※ 返信はゆっくりめです。気長にどうぞ！</p>
    </RetroFrame>
  );
}
