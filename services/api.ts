/**
 * Thin fetch wrapper. All future external API calls should flow through here
 * so retries, auth headers, and observability can be added in one place.
 */
type RequestOptions = RequestInit & { baseUrl?: string };

export async function apiFetch<T>(path: string, opts: RequestOptions = {}): Promise<T> {
  const base = opts.baseUrl ?? "";
  const res = await fetch(`${base}${path}`, {
    headers: { "Content-Type": "application/json", ...(opts.headers ?? {}) },
    ...opts,
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`);
  return res.json() as Promise<T>;
}
