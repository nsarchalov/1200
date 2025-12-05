import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp' | 'glass';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group";
  
  const variants = {
    primary: "border-transparent text-slate-900 bg-yellow-400 hover:bg-yellow-500 shadow-lg hover:shadow-yellow-400/30 focus:ring-yellow-500",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 focus:ring-slate-500",
    whatsapp: "border-transparent text-white bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-500/30 focus:ring-green-500",
    glass: "border-slate-600 text-white bg-slate-800/50 hover:bg-slate-800 hover:border-slate-500 focus:ring-slate-500 backdrop-blur-sm"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};