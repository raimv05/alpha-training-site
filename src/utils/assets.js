export function getAssetUrl(path) {
  if (!path) return "";
  const base = import.meta.env.BASE_URL; // E.g., "/" or "/trainings/"
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return base + cleanPath;
}
