export interface NoteSection {
  id: string;
  label: string;
}

export interface NoteMeta {
  title: string;
  description: string;
  order: number;
  slug: string;
  sections: NoteSection[];
}

/**
 * Auto-discovers all notes from src/content/notes/*.astro
 * Reads the exported `meta` constant from each file
 * Returns sorted by order field
 */
export function getNotes(): NoteMeta[] {
  const modules = import.meta.glob<{ meta: NoteMeta }>(
    '../content/notes/*.astro',
    { eager: true }
  );

  return Object.values(modules)
    .map(m => m.meta)
    .sort((a, b) => a.order - b.order);
}

const NOTE_COLORS = [
  "#2c5282",  // note 1 — blue
  "#b7530a",  // note 2 — orange
  "#1a6b3a",  // note 3 — green
  "#6b21a8",  // note 4 — purple
  "#b91c1c",  // note 5 — red
  "#0e7490",  // note 6 — cyan
];

export function getNoteColor(order: number): string {
  return NOTE_COLORS[(order - 1) % NOTE_COLORS.length];
}
