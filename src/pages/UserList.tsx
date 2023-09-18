import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUserInfo } from "../type";
import UserItem from "../components/UserItem";
import UserInfo from "../components/UserInfo";
import { Link } from "react-router-dom";

function UserList() {
  const [userList, setUserList] = useState<IUserInfo[]>([]);
  const [filterUser, setFilterUser] = useState<IUserInfo[]>([]);
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  async function fetchUser() {
    const { data } = await axios({
      url: "https://random-data-api.com/api/users/random_user?size=5",
      method: "get",
    });
    const newUserList = data.map((user: any) => {
      return {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender,
        phone_number: user.phone_number,
        address: {
          city: user.address.city,
          street_name: user.address.street_name,
          street_address: user.address.street_address,
          state: user.address.state,
          country: user.address.country,
          zip_code: user.address.zip_code,
        },
      };
    });
    setUserList([...userList, ...newUserList]);
  }

  async function fetchMore() {
    const { data } = await axios({
      url: "https://random-data-api.com/api/users/random_user?size=5",
      method: "get",
    });
    const newUserList = data.map((user: any) => {
      return {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender,
        phone_number: user.phone_number,
        address: {
          city: user.address.city,
          street_name: user.address.street_name,
          street_address: user.address.street_address,
          state: user.address.state,
          country: user.address.country,
          zip_code: user.address.zip_code,
        },
      };
    });
    setUserList((prev) => [...prev, ...newUserList]);
  }

  function filterUserHandle(text: string) {
    const filteredUsers = userList.filter((user) => {
      const combineStringUserInfo =
        user.username + user.first_name + user.last_name;
      return combineStringUserInfo.includes(text);
    });
    setFilterUser([...filteredUsers]);
  }

  const selectUserInfo = React.useCallback(
    (username: string) => {
      const user = userList.filter((user) => user.username === username)[0];
      setUserInfo(user);
    },
    [userList]
  );

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {userInfo && <UserInfo userInfo={userInfo} />}
      <h3>User List</h3>
      {filterUser.length === 0
        ? userList.map((user, index) => (
            <UserItem
              key={index}
              index={index}
              user={user}
              selectUserInfo={selectUserInfo}
            />
          ))
        : filterUser.map((user, index) => (
            <UserItem
              key={index}
              index={index}
              user={user}
              selectUserInfo={selectUserInfo}
            />
          ))}

      <button onClick={fetchMore}>Fetch More</button>
      <br />
      <input
        onChange={(e) => {
          filterUserHandle(e.target.value);
        }}
      />
      <br />
      <Link to={`/`}>Go to Hello</Link>
    </div>
  );
}

export default UserList;
