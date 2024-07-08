/* eslint-disable no-unused-vars */
import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:8000/api/user/getusers");
    const { data } = await res.data;
    // console.log(data);
    setUserData(data);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:8000/api/user/deleteuser/${id}`);
    const { data } = await res.data
    getUsers()
    // console.log(data);
  };

  return (
    <>
      <div className="p-5 mt-3">
        <h1 className="font-bold text-3xl">All Users</h1>
        <hr className="mt-3 border-gray-300 border-b-2" />
      </div>

      <div>
        {/* table */}

        <div className="mt-20">
          <div className="overflow-x-auto mt-5">
            <Table>
              <Table.Head>
                <Table.HeadCell>User Id</Table.HeadCell>
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {userData.map((val, i) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b-2"
                    key={i}
                  >
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      {val.username}
                    </Table.Cell>
                    <Table.Cell className="font-normal text-black">
                      {val.email}
                    </Table.Cell>

                    <Table.Cell>
                      {val.isAdmin === true ? (
                        <p className="font-bold">Admin</p>
                      ) : (
                        <button className="text-xl bg-red-500 p-2 rounded-md text-white">
                          <MdDelete onClick={() => deleteUser(val._id)} />
                        </button>
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
