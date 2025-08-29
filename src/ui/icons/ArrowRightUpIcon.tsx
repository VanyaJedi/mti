
import { asIcon } from "./AsIcon";

const ArrowRightUpIconContent: React.FC<{ color: string }> = ({ color }) => (
  <path fill={color} stroke={color} fillRule="evenodd" clipRule="evenodd" d="M10.8049 2.71462H5.28483V1.42871H12.1427C12.6162 1.42871 13 1.81253 13 2.28598V9.14391H11.7141V3.62389L1.90927 13.4287L1 12.5194L10.8049 2.71462Z" />
);



 export const ArrowRightUpIcon = asIcon(ArrowRightUpIconContent, { width: 14, height: 15 });
