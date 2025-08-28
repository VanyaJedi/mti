
import { asIcon } from "./AsIcon";

const PlayIconContent: React.FC<{ color: string }> = ({ color }) => (
  <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M12.1823 9.52406L2.43561 15.7606C1.68453 16.2412 0.75 15.6339 0.75 14.6653L0.750002 2.19215C0.750003 1.22348 1.68453 0.616261 2.43561 1.0968L12.1823 7.33337C12.9392 7.81767 12.9392 9.03975 12.1823 9.52406Z"/>
);



 export const PlayIcon = asIcon(PlayIconContent, { width: 13, height: 16 });
