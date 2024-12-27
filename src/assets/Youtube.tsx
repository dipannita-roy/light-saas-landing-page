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
      d="M22.468 6.518A2.25 2.25 0 0 0 21.11 4.98c-3.214-1.241-8.329-1.23-8.61-1.23s-5.396-.011-8.61 1.23a2.25 2.25 0 0 0-1.358 1.537C2.289 7.454 2 9.164 2 12s.289 4.547.532 5.483A2.25 2.25 0 0 0 3.89 19.02c3.079 1.188 7.897 1.229 8.548 1.229h.124c.65 0 5.472-.041 8.548-1.23a2.25 2.25 0 0 0 1.358-1.537c.243-.938.532-2.646.532-5.483s-.289-4.547-.532-5.482m-6.76 5.794-4.5 3a.375.375 0 0 1-.583-.312V9a.376.376 0 0 1 .583-.312l4.5 3a.375.375 0 0 1 0 .624"
    ></path>
  </svg>
);

export default SvgIcon;
