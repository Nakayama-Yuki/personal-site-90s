import { RetroFrame } from "@/components/retro/RetroFrame";
import { works } from "@/lib/site-data";

export default function WorksPage() {
  return (
    <RetroFrame title="作品">
      <table className="retro-table">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>年</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          {works.map((work) => (
            <tr key={work.name}>
              <td>
                <a href={work.href}>{work.name}</a>
              </td>
              <td>{work.year}</td>
              <td>{work.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </RetroFrame>
  );
}
