import type { ReactNode } from "react";

type RetroFrameProps = {
  title: string;
  children: ReactNode;
};

export function RetroFrame({ title, children }: RetroFrameProps) {
  return (
    <section className="retro-frame" aria-label={title}>
      <h2 className="retro-frame-title">{title}</h2>
      <div className="retro-frame-content">{children}</div>
    </section>
  );
}
