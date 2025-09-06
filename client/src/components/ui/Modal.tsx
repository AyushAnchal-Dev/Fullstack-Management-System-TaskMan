import { ReactNode } from 'react';

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="card w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}