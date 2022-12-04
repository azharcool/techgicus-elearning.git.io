import { ReactComponent as FaceBookIcon } from "./facebook.svg";
import { ReactComponent as GoogleIcon } from "./google.svg";
import { ReactComponent as AppleIcon } from "./apple.svg";
import { ReactComponent as GroupIcon } from "./group.svg";

export const Facebook = () => {
  return <FaceBookIcon />;
};

export const Google = () => {
  return <GoogleIcon />;
};

export const Apple = () => {
  return <AppleIcon />;
};

export const Group = (props) => {
  return <GroupIcon width={props.wt} height={props.ht} />;
};
