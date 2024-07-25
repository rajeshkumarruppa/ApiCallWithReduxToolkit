// 
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './store';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
export default function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h2 className="text-success text-center m-5">API Calls With Redux Toolkit</h2>
    {
      !error &&  status== "succeeded" && <table className="table table-bordered ">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
    }
        {
      error &&   <h1>Error while fetching data</h1>    
        }
      </div>
    </>
  );
}