'use client';

import { useEffect, useState } from 'react';

const TASKS = [
  'Dust every surface',
  'Vacuum and mop floors',
  'Disinfect bathrooms',
  'Wipe kitchen counters',
  'Take out the trash',
];

// The one deliberately animated moment on the page. It encodes the actual
// brand claim — "the same checklist, every time" — instead of decorating
// the hero with an unrelated stock animation.
export default function ChecklistAnimation() {
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    if (checked >= TASKS.length) {
      const reset = setTimeout(() => setChecked(0), 1800);
      return () => clearTimeout(reset);
    }
    const tick = setTimeout(() => setChecked((c) => c + 1), 650);
    return () => clearTimeout(tick);
  }, [checked]);

  return (
    <ul
      className="w-full max-w-sm border border-slate/15 bg-white font-mono text-sm"
      aria-label="Example cleaning checklist"
    >
      {TASKS.map((task, i) => {
        const done = i < checked;
        return (
          <li
            key={task}
            className="flex items-center gap-3 border-b border-slate/10 px-4 py-3 last:border-b-0"
          >
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center border text-[10px] transition-colors duration-300 ${
                done ? 'border-slate bg-lime' : 'border-slate/30 bg-transparent'
              }`}
              aria-hidden="true"
            >
              {done ? '✓' : ''}
            </span>
            <span className={done ? 'text-slate-soft line-through' : 'text-slate'}>{task}</span>
          </li>
        );
      })}
    </ul>
  );
}
