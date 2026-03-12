export const colors = {
  void: "#0a1628",
  bg: "#0f1f36",
  elevated: "#152644",
  precision: "#3b82f6",
  precisionDark: "#2563eb",
  precisionGlow: "rgba(59, 130, 246, 0.15)",
  warmth: "#f59e0b",
  warmthLight: "#fbbf24",
  text: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  success: "#10b981",
  error: "#ef4444",
  border: "rgba(59, 130, 246, 0.2)",
  borderSubtle: "rgba(148, 163, 184, 0.1)",
} as const;

export const easing = {
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

export const fonts = {
  body: "IBM Plex Sans",
  mono: "JetBrains Mono",
  heading: "Instrument Serif",
} as const;
