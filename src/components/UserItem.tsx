import React from "react";
import { IUserInfo } from "../type";

interface IProps {
  user: IUserInfo;
  index: number;
  selectUserInfo: (username: string) => void;
}

const UserItem = React.memo(({ user, index, selectUserInfo }: IProps) => {
  console.log("rerender useritem");
  return (
    <div
      key={index}
      onClick={() => {
        selectUserInfo(user.username);
      }}
    >
      <p>
        {index + 1}. {user.username} {user.first_name} {user.last_name}
      </p>
    </div>
  );
});

export default UserItem;
