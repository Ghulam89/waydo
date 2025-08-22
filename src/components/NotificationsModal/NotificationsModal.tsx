import { Link } from "react-router-dom";
import { DropdownModal } from "../ui/DropdownModal";

// Notifications Dropdown Component
interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  markAs:string
  
}

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
   {
    id: 4,
    message: "Reminder: Meeting scheduled tomorrow",
    time: "1 hour ago",
  },
   {
    id: 4,
    message: "Reminder: Meeting scheduled tomorrow",
    time: "1 hour ago",
  },
];

export const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  isOpen,
  onClose,
  anchorEl,
  markAs
}) => {
  return (
    <DropdownModal
      isOpen={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      title="Notifications"
      width="w-96"
      markAs={<span className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
            Mark All As Read
          </span>}
    >
      <div className="text-center">
       
        {/* Body */}
        <div className="max-h-[62vh] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center ">
              <img
                src="public/icons/notification.png"
                className=""
                alt="No notifications"
              />
              <h3 className="text-xl text-black font-semibold mb-2">
                No notifications...yet!
              </h3>
              <p className="text-gray-500 text-sm pb-2">
                View ad recommendations and news by Waydo etc.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {notifications.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center text-left gap-3 p-3 hover:bg-gray-5 cursor-pointer transition-colors"
                >
                  <div className="rounded-md w-10 h-10 flex-shrink-0">
                    <img
                      src="public/cars/car1.png"
                      className="object-cover rounded-lg w-full h-full"
                      alt="notification icon"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-black text-sm font-semibold truncate">
                      {item.message}
                    </p>
                    <span className="text-gray-400 text-sm">
                      {item.time}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t">
          <Link
            to="/notifications"
            onClick={onClose}
            className="text-red-500 font-medium text-sm w-full block hover:text-red-600 transition-colors"
          >
            View All Notifications
          </Link>
        </div>
      </div>
    </DropdownModal>
  );
};