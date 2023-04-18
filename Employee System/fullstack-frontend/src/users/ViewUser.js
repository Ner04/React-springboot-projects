import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { id } = useParams();

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> User Details</h2>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Name :</th>
                <th scope="col">Username :</th>
                <th scope="col">Email :</th>
              </tr>
            </thead>
            <tbody>
              <td scope="col">{user.name}</td>
              <td scope="col">{user.username}</td>
              <td scope="col">{user.email}</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
