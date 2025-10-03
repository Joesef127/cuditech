import React, {type ReactNode, type ButtonHTMLAttributes} from "react";

type ButtonProps = {
  icon?: string;
  className?: string;
  isImage?: boolean;
  route?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
                                         icon,
                                         className,
                                         children,
                                         isImage,
                                         route,
                                       }) => {
  return (
    <a href={route ? route : "#"} className={className}>
      <span>
        {isImage ? <img src={icon} alt={icon} className="w-4 md:w-6"/> : <span>{icon}</span>}
      </span>
      <span>{children}</span>
    </a>
  );
};

export default Button;
