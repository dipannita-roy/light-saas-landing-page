import * as React from "react";

const SvgIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M17.141 5h2.454l-5.36 5.93L20.541 19h-4.938l-3.867-4.894L7.311 19H4.856l5.734-6.343L4.541 5h5.062l3.496 4.474z"
    ></path>
  </svg>
);

export default SvgIcon;
