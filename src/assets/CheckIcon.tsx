import * as React from "react";

const SvgIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m20.337 8.437-9.6 9.6a.9.9 0 0 1-1.275 0l-4.2-4.2a.901.901 0 1 1 1.275-1.275l3.563 3.563 8.963-8.962a.902.902 0 0 1 1.275 1.275z"
    ></path>
  </svg>
);

export default SvgIcon;
