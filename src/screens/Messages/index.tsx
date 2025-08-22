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



const Messages = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

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
      user: "Chelsea Hagon",
      lastMessage: "I'd definitely shoot any opportunities I ....",
      time: "3:14 PM",
    },
    {
      id: 2,
      user: "Chelsea Hagon",
      lastMessage: "I'd definitely shoot any opportunities I ....",
      time: "3:10 PM",
    },
    {
      id: 3,
     user: "Chelsea Hagon",
      lastMessage: "I'd definitely shoot any opportunities I ....",
      time: "2:45 PM",
    },
  ];

  const messages = [
    { from: "me", text: "Hey Tasha, what's good today?", time: "3:15 PM" },
    { from: "them", text: "Hey Olivia, can you please review the latest design when you can?", time: "3:16 PM" },
    { from: "me", text: "Wanna grab coffee?", time: "3:17 PM" },
    { from: "them", text: "Sure! Let's do it. ☕", time: "3:18 PM" },
  ];

  const handleFilterChange = (value: SetStateAction<string>) => {
    setSelectedFilter(value);
  };

  const [selectedChat, setSelectedChat] = useState(1);
  const [input, setInput] = useState("");
  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-3 bg-white rounded-lg overflow-hidden">
        <div className=" mb-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold ">Messages</h2>
            <span className=" text-gray-50">
              Monitor flagged conversations and manange support tickets
            </span>
          </div>
          <div>
            <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a filter" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Card className="w-full h-[90vh] p-3 gap-4  bg-white rounded-lg shadow-lg flex overflow-hidden">
          {/* Sidebar */}
          <aside className="  border-r pr-4 w-4/12 overflow-y-auto">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`cursor-pointer px-4 flex justify-between py-3 hover:bg-gray-5 ${
                  selectedChat === chat.id ? "bg-[#F2F4F7] rounded-md" : ""
                }`}
              >
                <div className=" flex gap-1 items-center">
                  <div className=" w-14 h-14 ">
                    <img src="/public/profile.png" alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">{chat.user}</div>
                    <div className="text-sm text-gray-600">
                      {chat.lastMessage}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-primary">{chat.time}</div>
              </div>
            ))}
          </aside>

          {/* Chat Window */}
          <section className="flex-1 border  rounded-md overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b  flex justify-between  bg-primary  items-center">
              <div className="   gap-2 flex">
                <div className=" w-12 h-12">
                  <img src="/public/profile.png" alt="" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Tasha Bleu</h2>
                  <p className="text-sm text-white">phoenix@untitledui.com</p>
                </div>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99935 10.8333C10.4596 10.8333 10.8327 10.4602 10.8327 9.99992C10.8327 9.53968 10.4596 9.16658 9.99935 9.16658C9.53911 9.16658 9.16602 9.53968 9.16602 9.99992C9.16602 10.4602 9.53911 10.8333 9.99935 10.8333Z"
                  stroke="#98A2B3"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99935 4.99992C10.4596 4.99992 10.8327 4.62682 10.8327 4.16659C10.8327 3.70635 10.4596 3.33325 9.99935 3.33325C9.53911 3.33325 9.16602 3.70635 9.16602 4.16659C9.16602 4.62682 9.53911 4.99992 9.99935 4.99992Z"
                  stroke="#98A2B3"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99935 16.6666C10.4596 16.6666 10.8327 16.2935 10.8327 15.8333C10.8327 15.373 10.4596 14.9999 9.99935 14.9999C9.53911 14.9999 9.16602 15.373 9.16602 15.8333C9.16602 16.2935 9.53911 16.6666 9.99935 16.6666Z"
                  stroke="#98A2B3"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div>
                  <p className="text-xs mt-1 text-gray-500 text-right">
                    {msg.time}
                  </p>

                 

                  <div
                    key={index}
                    className={`flex ${
                      msg.from === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-xl px-4 py-2 max-w-xs ${
                        msg.from === "me"
                          ? "bg-primary text-white"
                          : "bg-[#F2F4F7] rounded-xl shadow-md text-black"
                      }`}
                    >
                      
                      <p>{msg.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t flex gap-2">
              <Input
                className="flex-1 h-12"
                placeholder="Message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
             <div className=" flex gap-1.5">
               <Button className=" h-full py-3 bg-gray-20  text-white font-medium hover:bg-gray-100">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8666 9.20835L10.2082 16.8667C9.27005 17.8049 7.99757 18.332 6.67075 18.332C5.34393 18.332 4.07145 17.8049 3.13325 16.8667C2.19505 15.9285 1.66797 14.656 1.66797 13.3292C1.66797 12.0024 2.19505 10.7299 3.13325 9.79168L10.7916 2.13335C11.4171 1.50788 12.2654 1.15649 13.1499 1.15649C14.0345 1.15649 14.8828 1.50788 15.5082 2.13335C16.1337 2.75882 16.4851 3.60713 16.4851 4.49168C16.4851 5.37623 16.1337 6.22455 15.5082 6.85002L7.84158 14.5083C7.52885 14.8211 7.10469 14.9968 6.66242 14.9968C6.22014 14.9968 5.79598 14.8211 5.48325 14.5083C5.17051 14.1956 4.99482 13.7715 4.99482 13.3292C4.99482 12.8869 5.17051 12.4627 5.48325 12.15L12.5582 5.08335" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </Button>
               <Button className=" h-full py-3 bg-primary-600 text-white font-medium hover:bg-primary-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_711_11835)">
                    <path
                      d="M18.3327 1.66675L9.16602 10.8334M18.3327 1.66675L12.4993 18.3334L9.16602 10.8334M18.3327 1.66675L1.66602 7.50008L9.16602 10.8334"
                      stroke="white"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_711_11835">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
             </div>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
