import { RetroFrame } from "@/components/retro/RetroFrame";
import { profile } from "@/lib/site-data";

export default function ProfilePage() {
  return (
    <RetroFrame title="プロフィール">
      <table className="retro-table">
        <tbody>
          <tr>
            <th>名前</th>
            <td>{profile.name}</td>
          </tr>
          <tr>
            <th>肩書き</th>
            <td>{profile.title}</td>
          </tr>
          <tr>
            <th>拠点</th>
            <td>{profile.location}</td>
          </tr>
          <tr>
            <th>ひとこと</th>
            <td>{profile.intro}</td>
          </tr>
          <tr>
            <th>好きなこと</th>
            <td>{profile.interests.join(" / ")}</td>
          </tr>
        </tbody>
      </table>
    </RetroFrame>
  );
}
