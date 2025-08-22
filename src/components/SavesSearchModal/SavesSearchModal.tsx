
import { Link } from "react-router-dom";
import { DropdownModal } from "../ui/DropdownModal";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const saveSearch = [
  {
    id: 1,
    name: "My Tesla Search",
    message: "Santo Domingo Este",

    time: "21 June",
  },
  {
    id: 2,
    name: "My Tesla Search",
    message: "Santo Domingo Este",

    time: "21 June",
  },
  {
    id: 3,
    name: "My Tesla Search",
    message: "Santo Domingo Este",

    time: "21 June",
  },
  {
    id: 4,
    name: "My Tesla Search",
    message: "Santo Domingo Este",

    time: "21 June",
  },
  {
    id: 5,
    name: "My Tesla Search",
    message: "Santo Domingo Este",

    time: "21 June",
  },
  {
    id: 6,
    name: "My Tesla Search",
    message: "Santo Domingo Este",

    time: "21 June",
  },
];

export const SaveSearchModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <DropdownModal isOpen={isOpen} onClose={onClose} className="  w-96   mt-14 absolute">
      <div className="text-center">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 px-3 border-b sticky top-0 bg-white">
          <h5 className="font-semibold text-black">Saved Searches</h5>
        </div>

        {/* Body */}
        <div className="p-4 border-b max-h-[60vh] overflow-y-auto">
          {saveSearch.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <img
                src={"./public/icons/save-search.png"}
                className=" my-10"
                alt="No notifications"
              />
              <h3 className="text-2xl text-black font-semibold mb-1">
                No Save Searches
              </h3>
              <p className="text-gray-500 text-sm">
                View ad recommendations and news by Waydo etc.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {saveSearch.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between text-left px-2   gap-3  py-3 hover:bg-gray-5 cursor-pointer"
                >
                  <div className=" flex gap-2">
                    <div className="rounded-md w-12 h-12">
                      <img
                        src="./public/cars/car1.png"
                        className="object-cover rounded-lg w-full h-full"
                        alt="notification icon"
                      />
                    </div>

                    <div>
                      <p className=" text-dark font-semibold">{item.name}</p>
                      <span className="text-gray-400 text-sm">
                        {item.message}
                      </span>
                    </div>
                  </div>
                  <div className=" flex flex-col justify-end items-end">
                    <span className="text-gray-400  pb-1 text-sm">
                      {item.time}
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 15.75V9.75H5.25V15.75M5.25 2.25V6H11.25M14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12L15.75 6V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75Z"
                        stroke="#FF0000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="py-2">
          <Link
            to={"/save-searches"}
            onClick={onClose}
            className="text-red-500 font-medium text-[14px] w-full block"
          >
            View All Saved Searches
          </Link>
        </div>
      </div>
    </DropdownModal>
  );
};
