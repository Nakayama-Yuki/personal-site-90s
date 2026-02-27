"use client";

import useSWR from "swr";

type CounterResponse = {
  count: number;
};

const fetcher = async (url: string): Promise<CounterResponse> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch counter");
  }

  return res.json();
};

export default function AccessCounter() {
  const { data } = useSWR<CounterResponse>("/api/counter", fetcher);

  const count = data?.count ?? null;

  const formatted = count !== null ? String(count).padStart(5, "0") : "-----";

  return (
    <span>
      You are visitor No. <strong>{formatted}</strong>
    </span>
  );
}
