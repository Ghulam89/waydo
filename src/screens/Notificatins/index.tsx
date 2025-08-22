const notifications = [
  {
    id: 1,
    message: "Your booking request has been approved",
    time: "2 mins ago",
  },
  {
    id: 2,
    message: "New consultation request received",
    time: "10 mins ago",
  },
  {
    id: 3,
    message: "Payment successfully completed",
    time: "30 mins ago",
  },
  {
    id: 4,
    message: "Reminder: Meeting scheduled tomorrow",
    time: "1 hour ago",
  },
];

const Notifications = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto px-3 bg-white overflow-hidden">
          {notifications && (
<h2 className="text-2xl font-semibold pb-5">Notifications</h2>
          )}
        

        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <img
              src={"/public/icons/notification.png"}
              className=" mx-auto mb-4"
              alt="No notifications"
            />
            <h3 className="text-2xl text-black font-semibold mb-1">
              No notifications...yet!
            </h3>
            <p className="text-gray-500 text-sm text-center">
              View ad recommendations and news by Waydo etc.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {notifications.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between px-3 py-4 cursor-pointer  hover:bg-gray-5 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[61px] h-[61px] rounded-md">
                    <img
                      src="/public/cars/car1.png"
                      className="object-cover rounded-lg w-full h-full"
                      alt="notification icon"
                    />
                  </div>
                  <p className="text-black font-medium">{item.message}</p>
                </div>
                <div className="flex flex-col justify-end">
                  <span className="text-gray-400">{item.time}</span>
                  <svg
                    width="40"
                    height="20"
                    className="ml-auto pt-2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.667 11.25C15.9766 11.25 15.417 10.6904 15.417 10C15.417 9.30964 15.9766 8.75 16.667 8.75C17.3573 8.75 17.917 9.30964 17.917 10C17.917 10.6904 17.3573 11.25 16.667 11.25Z"
                      fill="#202332"
                    />
                    <path
                      d="M10.0003 11.25C9.30997 11.25 8.75033 10.6904 8.75033 10C8.75033 9.30964 9.30997 8.75 10.0003 8.75C10.6907 8.75 11.2503 9.30964 11.2503 10C11.2503 10.6904 10.6907 11.25 10.0003 11.25Z"
                      fill="#202332"
                    />
                    <path
                      d="M2.08366 10C2.08366 10.6904 2.6433 11.25 3.33366 11.25C4.02401 11.25 4.58366 10.6904 4.58366 10C4.58366 9.30964 4.02401 8.75 3.33366 8.75C2.6433 8.75 2.08366 9.30964 2.08366 10Z"
                      fill="#202332"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
