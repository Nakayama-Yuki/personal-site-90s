"use client";

import { useEffect, useState } from "react";

export default function AccessCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/counter")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  const formatted =
    count !== null ? String(count).padStart(5, "0") : "-----";

  return (
    <span>
      You are visitor No. <strong>{formatted}</strong>
    </span>
  );
}
