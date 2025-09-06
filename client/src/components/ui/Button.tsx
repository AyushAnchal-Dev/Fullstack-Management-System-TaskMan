import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export default function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={clsx('btn btn-primary', className)} />;
}