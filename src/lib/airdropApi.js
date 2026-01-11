
export const API_URL =
  "https://script.google.com/macros/s/AKfycbxsQ8n2SnTvsO7cvy5VQHyIybxAiukiLXuO_R2gTaQ58A3gUS4Pq1GK9gKYpLOqPc8W4Q/exec";

export function slugify(text) {
  return String(text ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function fetchAirdrops() {
  const res = await fetch(API_URL, { redirect: "follow" });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("API did not return an array");
  return data;
}
