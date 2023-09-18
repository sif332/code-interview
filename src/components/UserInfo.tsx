import React from "react";
import { IUserInfo } from "../type";

interface IProps {
  userInfo: IUserInfo;
}

const UserInfo = React.memo(({ userInfo }: IProps) => {
  console.log('rerender UserInfo')
  return (
    <div>
      <p>Username: {userInfo.username}</p>
      <p>Firstname: {userInfo.first_name}</p>
      <p>Lastname: {userInfo.last_name}</p>
      <p>Email: {userInfo.email}</p>
      <p>Gender: {userInfo.gender}</p>
      <p>Phone Number: {userInfo.phone_number}</p>
      <div>
        <h3>Address:</h3>
        <p>City: {userInfo.address.city}</p>
        <p>Street Name: {userInfo.address.street_name}</p>
        <p>Street Address: {userInfo.address.street_address}</p>
        <p>State: {userInfo.address.state}</p>
        <p>Country: {userInfo.address.country}</p>
        <p>Zip Code: {userInfo.address.zip_code}</p>
      </div>
    </div>
  );
});

export default UserInfo;
