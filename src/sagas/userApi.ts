import axios from "axios";
import User from "../models/user";

/*
1	/employee	GET	JSON	https://dummy.restapiexample.com/api/v1/employees	Get all employee data	Details
2	/employee/{id}	GET	JSON	https://dummy.restapiexample.com/api/v1/employee/1	Get a single employee data	Details
3	/create	POST	JSON	https://dummy.restapiexample.com/api/v1/create	Create new record in database	Details
4	/update/{id}	PUT	JSON	https://dummy.restapiexample.com/api/v1/update/21	Update an employee record	Details
5	/delete/{id}	DELETE	JSON	https://dummy.restapiexample.com/api/v1/delete/2	Delete an employee record	Details
*/

// get all users. https://reqres.in/api/users
async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users: User[] = response.data.data;
    return users;
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

// create user
async function createUser(payload: any): Promise<User> {
  try {
    const user = await axios.post("https://reqres.in/api/users", payload);
    return user.data.data;
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

// update user 	https://dummy.restapiexample.com/api/v1/update/21
async function updateUser(payload: any): Promise<User> {
  try {
    const user = await axios.put(
      `https://dummy.restapiexample.com/api/v1/update/${payload.id}`,
      payload
    );
    return user.data.data;
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

// delete user 	https://dummy.restapiexample.com/api/v1/delete/2
async function deleteUser(payload: any): Promise<Boolean> {
  try {
    const response = await axios.delete(
      `https://dummy.restapiexample.com/api/v1/delete/${payload}`
    );
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
