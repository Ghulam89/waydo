import { SetStateAction, useState } from "react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
 import profile from "../../assets/images/profile.png";
 import verified from '../../assets/images/icons/verified.png';
 import logo from '../../assets/images/Logo.png';
 import { Settings } from "lucide-react";
 import chatImg from '../../assets/images/chatimg.png';
 import brand1 from '../../assets/images/Chevrolet.png';
 import brand2 from '../../assets/images/GT-R.png';
 import brand3 from '../../assets/images/Honda.png';
 import brand4 from '../../assets/images/Ford.png';
 import bodyType1 from '../../assets/images/chat-body-car1.png';
 import bodyType2 from '../../assets/images/chat-body-car2.png';
 import bodyType3 from '../../assets/images/chat-body-car3.png';
 import bodyType4 from '../../assets/images/chat-body-car4.png';
const Messages = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedChat, setSelectedChat] = useState(1);
  const [input, setInput] = useState("");



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
    { from: "me", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori", time: "3:15 PM" },
    {
      from: "them",
      text:
        "Hey Olivia, can you please review the latest design when you can?",
      time: "3:16 PM",
    },
    { from: "me", text: "Wanna grab coffee?", time: "3:17 PM" },
    { from: "them", text: "Sure! Let's do it. ☕", time: "3:18 PM" },
  ];




    const [activeTab, setActiveTab] = useState("Internal");

    const brands = [
      {
        id:1,
        img:'',

      }
    ]

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-3 bg-white rounded-lg overflow-hidden">
       
        <Card className="w-full h-[100vh] p-5 gap-4 bg-white rounded-lg shadow-lg flex overflow-hidden">
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
            <div className="p-4 border-b flex justify-between bg-[#F2F4F7] items-center text-white">
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F2F4F7]">
              {/* Example document message */}
              <div className="flex justify-start items-center bg-[#F2F4F7] p-3  rounded-lg  w-60 gap-2 shadow-sm">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.0613 9.94L20.0613 2.94C19.9219 2.80052 19.7565 2.68987 19.5744 2.61437C19.3923 2.53887 19.1971 2.50001 19 2.5H7C6.33696 2.5 5.70107 2.76339 5.23223 3.23223C4.76339 3.70107 4.5 4.33696 4.5 5V27C4.5 27.663 4.76339 28.2989 5.23223 28.7678C5.70107 29.2366 6.33696 29.5 7 29.5H25C25.663 29.5 26.2989 29.2366 26.7678 28.7678C27.2366 28.2989 27.5 27.663 27.5 27V11C27.5 10.6025 27.3422 10.2212 27.0613 9.94ZM20 7.125L22.875 10H20V7.125ZM7.5 26.5V5.5H17V11.5C17 11.8978 17.158 12.2794 17.4393 12.5607C17.7206 12.842 18.1022 13 18.5 13H24.5V26.5H7.5ZM21.5 16.5C21.5 16.8978 21.342 17.2794 21.0607 17.5607C20.7794 17.842 20.3978 18 20 18H12C11.6022 18 11.2206 17.842 10.9393 17.5607C10.658 17.2794 10.5 16.8978 10.5 16.5C10.5 16.1022 10.658 15.7206 10.9393 15.4393C11.2206 15.158 11.6022 15 12 15H20C20.3978 15 20.7794 15.158 21.0607 15.4393C21.342 15.7206 21.5 16.1022 21.5 16.5ZM21.5 21.5C21.5 21.8978 21.342 22.2794 21.0607 22.5607C20.7794 22.842 20.3978 23 20 23H12C11.6022 23 11.2206 22.842 10.9393 22.5607C10.658 22.2794 10.5 21.8978 10.5 21.5C10.5 21.1022 10.658 20.7206 10.9393 20.4393C11.2206 20.158 11.6022 20 12 20H20C20.3978 20 20.7794 20.158 21.0607 20.4393C21.342 20.7206 21.5 21.1022 21.5 21.5Z" fill="#FF0000"/>
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
               <div className="  bg-white p-1 rounded-md">
                 <img
                  src={chatImg}
                  alt="Shared media"
                  className="rounded-md max-w-xs"
                />
                <div className=" flex justify-end">
                  <span className=" text-gray-500 text-xs pt-2">02:25</span>

                </div>
               </div>
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
                          : "bg-white shadow-sm text-gray-900"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className=" bg-[#F2F4F7] p-3">
<div className=" px-3 pb-4 border  gap-2 items-center bg-white  rounded-2xl">
      {/* Input field */}
     <div className=" pb-4">
       <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message..."
        className="flex-1 text-gray-900 h-12 px-4 text-sm bg-transparent outline-none"
      />
     </div>

      {/* Action buttons */}
      <div className="flex gap-1.5 justify-end items-center">
        {/* Search icon */}
        <button className="w-10 h-10 flex justify-center items-center bg-white border border-gray-300 rounded-full hover:bg-gray-200">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M17.5 17.5L22 22" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11C20 6.03 15.97 2 11 2S2 6.03 2 11s4.03 9 9 9 9-4.03 9-9Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Emoji icon */}
        <button className="w-10 h-10 flex justify-center items-center bg-white border border-gray-300 rounded-full hover:bg-gray-200">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#141B34" strokeWidth="1.5" />
            <path d="M8 15c.91 1.21 2.36 2 4 2s3.09-.79 4-2" stroke="#141B34" strokeWidth="1.5" />
            <path d="M8.009 9H8M16 9h-.009" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Attachment icon */}
        <button className="w-10 h-10 flex justify-center items-center bg-white border border-gray-300 rounded-full hover:bg-gray-200">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M5.82 12L4.28 10.46C2.57 8.75 2.57 5.98 4.28 4.28s4.47-1.71 6.18 0l9.26 9.26c1.71 1.71 1.71 4.47 0 6.18-1.71 1.71-4.47 1.71-6.18 0l-3.47-3.47c-1.07-1.07-1.07-2.8 0-3.87 1.07-1.07 2.8-1.07 3.87 0l1.93 1.93" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Red Send Button */}
        <button className="h-10 px-5 flex items-center justify-center gap-1  bg-primary-600 text-white font-medium text-sm rounded hover:bg-red-500">
          Send
          <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
            <path d="M18.27 8.63L5.14 1.14a1 1 0 00-1.04.14 1 1 0 00-.37.82l2.36 6.9-2.36 6.9a1 1 0 001.44 1.13l13.13-7.5a1 1 0 000-1.74Zm-13.33 8.19l1.99-5.88h4.33a1 1 0 000-2H6.93L4.94 3.18l11.93 6.81-11.93 6.83Z" />
          </svg>
        </button>
      </div>
    </div>
            </div>
             
          </section>

          {/* Right Sidebar */}
          <aside className="w-3/12 overflow-y-auto border-l px-4 py-6 flex flex-col justify-between bg-white shadow-sm rounded-lg">
  {/* Profile Section */}
  <div className="space-y-4">
    <img
      src={profile}
      alt="Profile"
      className="mx-auto w-36 h-36 object-contain rounded-full"
    />
    <div className="text-center">
      <h3 className="text-[22px] font-semibold text-gray-900 flex items-center justify-center gap-1">
        Olivia Rhye
        <img src={verified} alt="Verified" className="w-5 h-5" />
      </h3>
      <p className="text-sm text-gray-500">Joined on August 2025</p>
    </div>

    {/* Search History */}
    <div>
      <h2 className="text-center pt-4 pb-2 text-lg font-semibold border-b">Search History</h2>

      {/* Brands */}
      <div className="pt-3 border-b pb-2">
        <label className="text-gray-500 text-sm">Brands</label>
        <div className="grid grid-cols-4 gap-2 pt-2">
          <img src={brand1} alt="Chevrolet" className=" mx-auto" />
          <img src={brand2} alt="Nissan" className=" mx-auto" />
          <img src={brand3} alt="Honda" className=" mx-auto" />
          <img src={brand4} alt="Ford" className=" mx-auto" />
        </div>
      </div>

      {/* Body Types */}
      <div className="pt-3 border-b pb-2">
        <label className="text-gray-500 text-sm">Body Types</label>
        <div className="grid grid-cols-4 gap-2 pt-2 items-center text-center">
          <div>
            <img src={bodyType1} alt="Compact" className="mx-auto" />
            <span className="text-xs text-gray-500">Compact</span>
          </div>
          <div>
            <img src={bodyType2} alt="Sedan" className="mx-auto" />
            <span className="text-xs text-gray-500">Sedan</span>
          </div>
          <div>
            <img src={bodyType3} alt="SUV" className="mx-auto" />
            <span className="text-xs text-gray-500">SUV</span>
          </div>
          <div>
            <img src={bodyType4} alt="Pickup Truck" className="mx-auto" />
            <span className="text-xs text-gray-500 whitespace-nowrap">Pickup Truck</span>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="py-3 border-b">
        <label className=" text-sm text-gray-500">Price Range</label>
        <p className="text-sm text-black font-semibold pt-2">$1,200,000 to $1,800,000</p>
      </div>

      {/* Interest Level */}
      <div className="py-3 border-b">
  <label className="text-sm text-gray-500">Level of Interest in Your Vehicle</label>
  <div className="flex items-center gap-2 mt-2">
    <span className="text-xs text-gray-500">Low</span>

    <input
      type="range"
      min="0"
      max="100"
      value="90"
      readOnly
      className="w-full h-2 appearance-none bg-gradient-to-r from-sky-400 via-orange-400 to-red-500 rounded-full cursor-default"
      style={{
        accentColor: '#f97316',
      }}
    />

    <span className="text-xs text-gray-700 font-semibold">High</span>
  </div>
</div>


      {/* Viewed Info */}
      <div className="pt-3 text-xs text-gray-600">
        Franky has viewed your ad <strong>15 times</strong>
      </div>
    </div>

   
  </div>

 
</aside>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
