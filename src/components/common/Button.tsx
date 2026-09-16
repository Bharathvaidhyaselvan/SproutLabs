import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-brand-teal text-white hover:bg-brand-darkteal",
    secondary: "bg-brand-orange text-white hover:bg-orange-600",
    accent: "bg-brand-yellow text-brand-navy hover:bg-yellow-400",
    outline: "bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
  };

  const classes = cn(baseStyles, variants[variant], "px-8 py-3.5 text-lg", className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
