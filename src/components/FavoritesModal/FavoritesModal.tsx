import { Heart, X } from "lucide-react";
import { Modal } from "../ui/DropdownModal";

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-sm">
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No Favorites Yet
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Start browsing and save your favorite vehicles to view them here.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Browse Vehicles
        </button>
      </div>
    </Modal>
  );
};