import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

import noIcon from '../../assets/images/icons/no-transaction.png';
const transactions = [
  {
    id: "#3066",
    desc: "Added Funds via Credit Card",
    amount: "+250 WC",
    date: "20 Jan 2022",
    time: "12:03 PM",
    status: "Paid",
  },
  {
    id: "#3065",
    desc: "Refunded from John Doe",
    amount: "+250 WC",
    date: "20 Jan 2022",
    time: "12:01 PM",
    status: "Paid",
  },
  {
    id: "#3064",
    desc: "Purchase - Owl",
    amount: "-450 WC",
    date: "20 Jan 2022",
    time: "12:00 PM",
    status: "Paid",
  },
  {
    id: "#3063",
    desc: "Ad Credit - Honda Civic",
    amount: "+100 WC",
    date: "20 Jan 2022",
    time: "11:00 AM",
    status: "Paid",
  },
  {
    id: "#3062",
    desc: "Ad Boost - Honda Civic",
    amount: "+200 WC",
    date: "20 Jan 2022",
    time: "11:00 AM",
    status: "Cancelled",
  },
  {
    id: "#3061",
    desc: "Ad Boost - Honda Civic",
    amount: "+300 WC",
    date: "20 Jan 2022",
    time: "10:00 AM",
    status: "Paid",
  },
  {
    id: "#3060",
    desc: "Ad Boost - Honda Civic",
    amount: "-250 WC",
    date: "20 Jan 2022",
    time: "10:00 AM",
    status: "Paid",
  },
];

// Card component
type SummaryCardProps = {
  title: string;
  value: string;
  subtext?: string;
  color: string;
};

const SummaryCard = ({ title, value, subtext, color }: SummaryCardProps) => (
  <Card className="bg-white p-5 rounded-lg w-full">
    <p className="text-gray-500 text-sm mb-1">{title}</p>
    <div className=" flex items-center gap-2">
      <h2 className={`text-2xl font-semibold ${color}`}>{value}</h2>
      {subtext && (
        <p className="text-xs bg-[#ECFDF3] px-2 py-1 rounded-full text-gray-400 mt-1">
          {subtext}
        </p>
      )}
    </div>
  </Card>
);

const Wallet = () => {
  return (
    <div className="min-h-screen  max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Waycash Wallet</h1>
        <div className="space-x-2">
          <Button className="bg-white text-black border-gray-200 border px-4 py-2 rounded-md hover:bg-gray-100">
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_837_13759)">
                <path
                  d="M18.3346 1.66669L9.16797 10.8334M18.3346 1.66669L12.5013 18.3334L9.16797 10.8334M18.3346 1.66669L1.66797 7.50002L9.16797 10.8334"
                  stroke="#344054"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_837_13759">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Transfer
          </Button>
          <Button className=" bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-red-600">
            + Add Funds
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          title="Available Balance"
          value="12 WC"
          subtext="+3784.00 USD"
          color="text-black"
        />
        <SummaryCard
          title="This Month"
          value="+450.00 WC"
          color="text-green-500"
        />
        <SummaryCard title="Spent" value="-450.00 WC" color="text-red-500" />
        <SummaryCard title="Transactions" value="24" color="text-black" />
      </div>

      {/* Transactions Table */}
      <div className="bg-white  rounded-md border shadow-md">
        <div className=" p-4">
          <h2 className=" text-primary text-lg font-semibold">
            Transaction History
          </h2>
          <span className=" text-sm ">View all your Waycash transaction</span>
          <div className="flex mt-4 justify-between items-center mb-4">
            {/* Tabs */}
            <div className=" border  border-gray-300 rounded-md overflow-hidden">
              <Button className="px-3 py-1 rounded-none bg-gray-5 border-r hover:bg-gray-200 text-primary font-medium">
                View All
              </Button>
              <Button className="px-3 py-1 rounded-none bg-white border-r text-primary hover:bg-gray-200  font-medium">
                Income
              </Button>
              <Button className="px-3 py-1 rounded-none bg-white  text-primary hover:bg-gray-200  font-medium">
                Expense
              </Button>
            </div>

            {/* Controls */}
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Search"
                className="border px-2 py-1 w-72 rounded text-sm"
              />
              <Button className="border px-3 py-1 bg-white text-primary  hover:bg-gray-5 rounded text-sm">
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                    stroke="#344054"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Filters
              </Button>
              <Button className="border px-3 py-1 bg-white text-primary  hover:bg-gray-5 rounded text-sm">
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4167 13.3333C15.8381 13.7429 17.5 14.8331 17.5 15.4166M15.4167 17.4999C15.8381 17.0903 17.5 16.0001 17.5 15.4166M17.5 15.4166L10.8333 15.4166"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16797 18.3333H8.9407C6.22303 18.3333 4.86419 18.3333 3.92053 17.6684C3.65015 17.4779 3.41012 17.252 3.20772 16.9975C2.5013 16.1094 2.5013 14.8305 2.5013 12.2726V10.1514C2.5013 7.68212 2.5013 6.44747 2.89208 5.46138C3.52031 3.8761 4.84892 2.62566 6.53327 2.03438C7.58099 1.66659 8.89281 1.66658 11.5165 1.66658C13.0157 1.66658 13.7653 1.66658 14.364 1.87675C15.3265 2.21462 16.0857 2.92917 16.4447 3.83504C16.668 4.39852 16.668 5.10404 16.668 6.51507V10.8333"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5026 10C2.5026 8.46588 3.74626 7.22222 5.28038 7.22222C5.8352 7.22222 6.4893 7.31944 7.02874 7.1749C7.50804 7.04647 7.88241 6.6721 8.01083 6.1928C8.15538 5.65336 8.05816 4.99926 8.05816 4.44444C8.05816 2.91032 9.30181 1.66667 10.8359 1.66667"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Export
              </Button>
            </div>
          </div>
        </div>

        {transactions?.length>0?
           
        <table className="w-full text-left px-2 text-sm">
          <thead className="text-gray-500 bg-gray-5 border-b font-medium">
            <tr className="">
              <th className="py-2  pl-4">Invoice</th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-b hover:bg-gray-100">
                <td className="py-3 pl-4">{tx.id}</td>
                <td>{tx.desc}</td>
                <td
                  className={
                    tx.amount.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {tx.amount}
                </td>
                <td>{tx.date}</td>
                <td>{tx.time}</td>
                <td>
                  <span
                    className={`px-2 py-1 flex gap-1  items-center text-xs rounded font-medium ${
                      tx.status === "Paid"
                        ? "bg-green-100 w-16 text-green-600"
                        : tx.status === "Cancelled"
                        ? "bg-red-100 w-24 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <span>
                      {" "}
                      {tx.status === "Paid" ? (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#12B76A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 3L3 9M3 3L9 9"
                            stroke="#F04438"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}{" "}
                    </span>{" "}
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>:<div className="  min-h-96  flex justify-center items-center text-center">
<div>
  <img src={noIcon}    alt="" className=" mb-3 mx-auto" />
  <span className=" font-medium text-primary">No Transaction found</span>
</div>
        </div>


      
        }

        {/* Pagination */}
        <div className="flex justify-between px-4 py-4 items-center mt-4 text-sm text-gray-500">
          <p className=" text-primary">Page 1 of 10</p>
          <div className="space-x-2">
            <Button className="border px-3 py-1 rounded bg-white text-primary hover:bg-gray-100">
              Previous
            </Button>
            <Button className="border px-3 py-1 rounded bg-white  text-primary hover:bg-gray-100">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
