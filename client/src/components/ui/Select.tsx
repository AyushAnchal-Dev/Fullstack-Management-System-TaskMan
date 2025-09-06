import { SelectHTMLAttributes } from 'react';
import { clsx } from 'clsx';
export default function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={clsx('select', className)}>
      {children}
    </select>
  );
}