import { SetStateAction, useState } from "react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
 import profile from "../../assets/images/profile.png";
 import verified from '../../assets/images/icons/verified.png';
 import logo from '../../assets/images/Logo.png';
 import { Settings } from "lucide-react";
const Messages = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedChat, setSelectedChat] = useState(1);
  const [input, setInput] = useState("");

  const filterOptions = [
    { value: "Filter", label: "Filter" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "recent", label: "Recently Added" },
    { value: "popular", label: "Most Popular" },
  ];

  const conversations = [
  {
    id: 1,
    user: "X-AE-A-13b",
    avatar: "https://i.pravatar.cc/100?img=1",
    lastMessage: "Enter your message de...",
    time: "12:25",
    online: true,
    unread: 0,
  },
  {
    id: 2,
    user: "Jerome White",
    avatar: "https://i.pravatar.cc/100?img=2",
    lastMessage: "Enter your message de...",
    time: "12:25",
    online: true,
    unread: 0,
  },
  {
    id: 3,
    user: "Madagasc",
    avatar: "https://i.pravatar.cc/100?img=3",
    lastMessage: "Enter your message...",
    time: "12:25",
    online: false,
    unread: 999,
  },
  {
    id: 4,
    user: "Pippins McGray",
    avatar: "https://i.pravatar.cc/100?img=4",
    lastMessage: "Enter your message...",
    time: "12:25",
    online: true,
    unread: 0,
  },
  {
    id: 5,
    user: "McKinsey V",
    avatar: "https://i.pravatar.cc/100?img=5",
    lastMessage: "Enter your message...",
    time: "12:25",
    online: false,
    unread: 8,
  },
];

  const messages = [
    { from: "me", text: "Hey Tasha, what's good today?", time: "3:15 PM" },
    {
      from: "them",
      text:
        "Hey Olivia, can you please review the latest design when you can?",
      time: "3:16 PM",
    },
    { from: "me", text: "Wanna grab coffee?", time: "3:17 PM" },
    { from: "them", text: "Sure! Let's do it. ☕", time: "3:18 PM" },
  ];

  const handleFilterChange = (value: SetStateAction<string>) => {
    setSelectedFilter(value);
  };


    const [activeTab, setActiveTab] = useState("Internal");


  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-3 bg-white rounded-lg overflow-hidden">
       
        <Card className="w-full h-[90vh] p-5 gap-4 bg-white rounded-lg shadow-lg flex overflow-hidden">
          {/* Sidebar */}
          <aside className="border-r pr-4 w-3/12 flex flex-col h-full">
      {/* Header: Logo and Messenger Button */}
      <div className="flex justify-between border-b  items-center px-4 py-3">
        <img src={logo} alt="Logo" className="w-32 object-contain" />

        <Button className="bg-transparent text-primary border-2 border-primary rounded-xl text-sm flex items-center gap-1.5 px-3 py-1.5">
          Messenger
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_747_16493)">
              <path
                d="M12.3164 5.28117C11.8608 2.99784 9.74561 1.27075 7.20556 1.27075C4.33309 1.27075 2.00391 3.47947 2.00391 6.20359C2.00391 7.51244 2.54141 8.7017 3.41818 9.58423C3.61122 9.77855 3.7401 10.044 3.68809 10.3173C3.60224 10.764 3.4077 11.1808 3.12284 11.5281C3.87232 11.6663 4.65162 11.5418 5.31995 11.1895C5.55621 11.065 5.67434 11.0027 5.7577 10.9901C5.81605 10.9812 5.89206 10.9895 6.01432 11.0105"
                stroke="#344054"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.16016 9.44151C7.16016 11.1063 8.57112 12.456 10.3112 12.456C10.5158 12.4563 10.7198 12.4374 10.9208 12.3996C11.0655 12.3725 11.1378 12.3589 11.1883 12.3666C11.2388 12.3743 11.3103 12.4124 11.4535 12.4885C11.8583 12.7038 12.3304 12.7798 12.7844 12.6954C12.6119 12.4831 12.494 12.2284 12.442 11.9554C12.4105 11.7884 12.4886 11.6262 12.6055 11.5075C13.1366 10.9681 13.4622 10.2414 13.4622 9.44151C13.4622 7.77677 12.0513 6.427 10.3112 6.427C8.57112 6.427 7.16016 7.77677 7.16016 9.44151Z"
                stroke="#344054"
                strokeWidth="1.375"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_747_16493">
                <rect
                  width="13.75"
                  height="13.75"
                  fill="white"
                  transform="translate(0.857422 0.125)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>


       <div className="flex items-center justify-between  p-3 w-full max-w-md">
      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* Online Indicator */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        {/* Name & Branch */}
        <div>
          <h2 className="text-sm font-semibold text-gray-800">
            Mainstream Motors LLC
          </h2>
          <p className="text-xs text-gray-500">Santo Domingo Branch</p>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Online</span>
          </div>
        </div>
      </div>

      {/* Settings Icon */}
      <button className="p-2 text-gray-500 hover:text-gray-700">
        <Settings className="w-5 h-5" />
      </button>
    </div>

      {/* Search Bar */}
      <div className="px-4 pb-3">
        <Input
          placeholder="Search messages..."
          className="rounded-md border px-3 py-2 w-full"
        />
      </div>

        <div className="flex flex-col h-screen border-r border-gray-200">
     
      <div className="flex border-b border-gray-200">
        {["Current", "Archived", "Internal"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative cursor-pointer px-4 py-3 text-sm font-medium ${
              activeTab === tab
                ? "text-black border-b-2 border-primary-600"
                : "text-gray-500"
            }`}
          >
            {tab}
            {tab === "Internal" && (
              <span className="absolute -top-1 -right-3 bg-primary-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                12
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="overflow-y-auto flex-1">
        {conversations.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat.id)}
            className={`cursor-pointer px-4 flex justify-between items-center py-3 
              hover:bg-gray-100 ${
                selectedChat === chat.id ? "bg-red-100 rounded-md" : ""
              }`}
          >
           
            <div className="flex gap-3 items-center">
             
              <div className="relative w-12 h-12">
                <img
                  src={chat.avatar}
                  alt={chat.user}
                  className="rounded-full object-cover w-full h-full"
                />
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>

              {/* User info */}
              <div>
                <div className="font-semibold text-gray-900">{chat.user}</div>
                <div className="text-sm text-gray-600 truncate w-36">
                  {chat.lastMessage}
                </div>
              </div>
            </div>

            {/* Right section: time + badge */}
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500">{chat.time}</span>
              {chat.unread > 0 && (
                <span className="mt-1 text-xs font-semibold bg-primary-600 text-white px-2 py-0.5 rounded-full">
                  {chat.unread > 99 ? "99+" : chat.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </aside>

          {/* Chat Window */}
          <section className="flex-1 border rounded-md overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex justify-between bg-[#CBD5E1] items-center text-white">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12">
                  <img
                    src="/profile.png"
                    alt="Tasha Bleu"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-primary">Tasha Bleu</h2>
                 
                </div>
              </div>
              
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#CBD5E1]">
              {/* Example document message */}
              <div className="flex justify-start items-center bg-[#F2F4F7] p-3 rounded-md w-max gap-2 shadow-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M6 2h6a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
                    stroke="#98A2B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8h8M6 12h4"
                    stroke="#98A2B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    Report.docx
                  </span>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
              </div>

              {/* Image message */}
              <div className="flex justify-start">
                <img
                  src="./logo.png"
                  alt="Shared media"
                  className="rounded-md max-w-xs"
                />
              </div>

              {/* Text messages */}
              {messages.map((msg, index) => (
                <div key={index}>
                  <p
                    className={`text-xs mt-1 text-gray-500 ${
                      msg.from === "me" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.time}
                  </p>
                  <div
                    className={`flex ${
                      msg.from === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-xl px-4 py-2 max-w-xs ${
                        msg.from === "me"
                          ? "bg-primary text-white"
                          : "bg-[#F2F4F7] shadow-sm text-gray-900"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t flex gap-2 items-center bg-white">
              <Input
                className="flex-1 h-12"
                placeholder="Message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="flex gap-1.5">
                <Button className="h-full py-3 bg-gray-200 text-gray-600 font-medium hover:bg-gray-300">
                  {/* Paperclip icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8666 9.20835L10.2082 16.8667C9.27005 17.8049 7.99757 18.332 6.67075 18.332C5.34393 18.332 4.07145 17.8049 3.13325 16.8667C2.19505 15.9285 1.66797 14.656 1.66797 13.3292C1.66797 12.0024 2.19505 10.7299 3.13325 9.79168L10.7916 2.13335C11.4171 1.50788 12.2654 1.15649 13.1499 1.15649C14.0345 1.15649 14.8828 1.50788 15.5082 2.13335C16.1337 2.75882 16.4851 3.60713 16.4851 4.49168C16.4851 5.37623 16.1337 6.22455 15.5082 6.85002L7.84158 14.5083C7.52885 14.8211 7.10469 14.9968 6.66242 14.9968C6.22014 14.9968 5.79598 14.8211 5.48325 14.5083C5.17051 14.1956 4.99482 13.7715 4.99482 13.3292C4.99482 12.8869 5.17051 12.4627 5.48325 12.15L12.5582 5.08335"
                      stroke="#667085"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button className="h-full py-3 bg-primary-600 text-white font-medium hover:bg-primary-700">
                  {/* Send icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_711_11835)">
                      <path
                        d="M18.3327 1.66675L9.16602 10.8334M18.3327 1.66675L12.4993 18.3334L9.16602 10.8334M18.3327 1.66675L1.66602 7.50008L9.16602 10.8334"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_711_11835">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="w-3/12 border-l px-4 py-6 flex flex-col justify-between">
            <div className="space-y-3">
              <img
                src={profile}
                alt="Logo"
                className="mx-auto  h-auto object-contain"
              />
              <div>
                <h3 className="text-[30px] flex gap-1 items-center justify-center  font-medium text-gray-900 text-center">
                Olivia Rhye  <div>
                  <img src={verified} className=" w-6" alt="" />
                </div>
              </h3>
              <p className="text-sm text-gray-500 text-center">
                joined on Augest 2025
              </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Profile Progress</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>

            <div className="mt-auto text-center text-gray-400 text-xs">
              © 2025 Your Company
            </div>
          </aside>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
