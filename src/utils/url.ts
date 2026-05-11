const ABSOLUTE_SCHEME_RE = /^[a-z][a-z0-9+.-]*:/i;

export function withBase(path: string): string {
  if (!path) {
    return path;
  }

  if (ABSOLUTE_SCHEME_RE.test(path) || path.startsWith("#")) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  if (path === "/") {
    return normalizedBase;
  }

  if (path.startsWith(normalizedBase)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}