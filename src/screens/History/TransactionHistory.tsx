import React from "react";

const transactions = [
  { id: "#3066", desc: "Added Funds via Credit Card", amount: "+250 WC", date: "20 Jan 2022", time: "12:03 PM", status: "Paid" },
  { id: "#3065", desc: "Refund to Brian John Doe", amount: "+250 WC", date: "20 Jan 2022", time: "12:01 PM", status: "Paid" },
  { id: "#3064", desc: "Purchase - Owl", amount: "-450 WC", date: "20 Jan 2022", time: "12:00 PM", status: "Paid" },
  { id: "#3063", desc: "Ad Credit - Honda Civic", amount: "+100 WC", date: "20 Jan 2022", time: "11:00 AM", status: "Paid" },
  { id: "#3062", desc: "Ad Boost - Honda Civic", amount: "+200 WC", date: "20 Jan 2022", time: "11:00 AM", status: "Cancelled" },
  { id: "#3061", desc: "Ad Boost - Honda Civic", amount: "+300 WC", date: "20 Jan 2022", time: "10:00 AM", status: "Paid" },
  { id: "#3060", desc: "Ad Boost - Honda Civic", amount: "-250 WC", date: "20 Jan 2022", time: "10:00 AM", status: "Paid" },
];

type SummaryCardProps = {
  title: string;
  value: string;
  color: string;
};

const SummaryCard = ({ title, value, color }: SummaryCardProps) => (
  <div className="bg-white p-4 rounded-md shadow-md w-full">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className={`text-2xl font-semibold ${color}`}>{value}</h2>
  </div>
);

  const TransactionHistory =() =>{
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Waycash Wallet</h1>
        <div className="space-x-2">
          <button className="bg-white border px-4 py-2 rounded-md">Transfer</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">+ Add Funds</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <SummaryCard title="Available Balance" value="12 WC" color="text-black" />
        <SummaryCard title="This Month" value="+450.00 WC" color="text-green-500" />
        <SummaryCard title="Spent" value="-450.00 WC" color="text-red-500" />
        <SummaryCard title="Transactions" value="24" color="text-black" />
      </div>

      {/* Transactions Table */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded">View All</button>
            <button className="px-3 py-1 hover:bg-gray-200 rounded">Income</button>
            <button className="px-3 py-1 hover:bg-gray-200 rounded">Expense</button>
          </div>
          <div className="flex space-x-2">
            <input type="text" placeholder="Search" className="border px-2 py-1 rounded" />
            <button className="border px-3 py-1 rounded">Filters</button>
            <button className="border px-3 py-1 rounded">Export</button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Invoice</th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-b">
                <td className="py-2">{tx.id}</td>
                <td>{tx.desc}</td>
                <td className={tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"}>{tx.amount}</td>
                <td>{tx.date}</td>
                <td>{tx.time}</td>
                <td>
                  <span className={`px-2 py-1 text-xs rounded ${
                    tx.status === "Paid" ? "bg-green-100 text-green-600" :
                    tx.status === "Cancelled" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">Page 1 of 10</p>
          <div className="space-x-2">
            <button className="border px-3 py-1 rounded">Previous</button>
            <button className="border px-3 py-1 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
