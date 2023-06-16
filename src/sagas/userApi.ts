import axios from "axios";
import User from "../models/user";

const API_BASE_URL = "https://reqres.in/api/users";

// get all users. https://reqres.in/api/users
async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get(API_BASE_URL);
    const users: User[] = response.data.data;
    return users;
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

// create user
async function createUser(payload: any): Promise<User> {
  try {
    const user = await axios.post(API_BASE_URL, payload);
    user.data.id = parseInt(user.data.id);
    return user.data;
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

// update user
async function updateUser(payload: any): Promise<User> {
  try {
    const res = await axios.put(`${API_BASE_URL}/${payload.id}`, payload);
    // res.data == user
    return res.data;
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

// delete user
async function deleteUser(payload: any): Promise<Boolean> {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${payload}`);
    if (response.data.status === "success") {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

export { getUsers, createUser, updateUser, deleteUser };
