// user Type
// {
// "id": 1,
// "employee_name": "Tiger Nixon",
// "employee_salary": 320800,
// "employee_age": 61,
// "profile_image": ""
// },

/*
{
"id": 1,
"email": "george.bluth@reqres.in",
"first_name": "George",
"last_name": "Bluth",
"avatar": "https://reqres.in/img/faces/1-image.jpg"
},
*/
type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default User;
