import { memo } from "react";
import UserView from "../user-view";

const Users = () => {
  return (
    <div className="Users">
      <UserView />
    </div>
  );
};

export default memo(Users);
