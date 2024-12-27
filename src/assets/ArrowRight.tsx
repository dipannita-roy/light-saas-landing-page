import * as React from "react";

const SvgIcon = ({className, ...other}: React.HTMLAttributes<HTMLOrSVGImageElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className={className}>
    <path
      fill="currentColor"
      d="m16.03 10.53-4.5 4.5a.751.751 0 1 1-1.062-1.062l3.22-3.218H4.5a.75.75 0 1 1 0-1.5h9.188l-3.219-3.22a.751.751 0 1 1 1.063-1.063l4.5 4.5a.75.75 0 0 1-.001 1.064"
    ></path>
  </svg>
);

export default SvgIcon;
