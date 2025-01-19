import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import getUserIdFromToken from "../utils/tokenDecoder";
import { handleError } from "../utils/toastify";
import spinner from "../assets/Spinner.gif";

function Bills() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
    const fetchBills = async () => {
      const userId = getUserIdFromToken();
      try {
        const headers = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const response = await axios.get(
          `http://localhost:3000/bills/${userId}`,
          headers
        );
        setBills(response.data);
      } catch (error) {
        handleError(error.response.data.message);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchBills();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <div className="flex justify-center h-screen">
          <img src={spinner} alt="spinner" className="w-24 h-24"/>
        </div>
      ) : (
        <>
          <div className="m-6 text-4xl font-bold">
            Bills for {loggedInUser} :
          </div>
          <div>
            {bills.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="table-auto min-w-4xl w-[80%] border border-gray-300 ml-6 rounded-xl shadow-lg shadow-blue-500">
                  <thead>
                    <tr className="bg-gray-100 text-center">
                      <th className="border border-gray-300 px-4 py-2">
                        Title
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Amount
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Due Date
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Status
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Description
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Payment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bills.map((bill) => (
                      <tr key={bill._id} className="text-center">
                        <td className="border border-gray-300 px-4 py-2">
                          {bill.title}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          Rs. {bill.amount}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {new Date(bill.due_date).toLocaleDateString()}
                        </td>
                        <td
                          className={`border border-gray-300 px-4 py-2 ${
                            bill.status === "unpaid"
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {bill.status}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-left">
                          {bill.description}
                        </td>
                        <td className="border border-gray-300">
                          <button className="bg-blue-600 text-white border border-gray-300 px-3 py-1 mx-6 my-2 rounded-md">
                            Pay Now
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mx-6">No bills found for this user.</p>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Bills;
