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
      d="M17 2.25H8A5.256 5.256 0 0 0 2.75 7.5v9A5.256 5.256 0 0 0 8 21.75h9a5.256 5.256 0 0 0 5.25-5.25v-9A5.256 5.256 0 0 0 17 2.25M12.5 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m5.625-9a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25M15.5 12a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0"
    ></path>
  </svg>
);

export default SvgIcon;
