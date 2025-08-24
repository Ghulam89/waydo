import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { Button } from "../../components/ui/button";
import PhoneOtp from "../../components/common/PhoneOtp";

export default function MyPhoneNumber() {
  const [showInput, setShowInput] = useState(false);
  const [phone, setPhone] = useState("");
  const [isOpen,setIsOpen] = useState(false)
  const handleAddClick = () => {
    setShowInput(true);
  };

  const handleSubmit = () => {
    
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Phone numbers</h2>
            <p className="text-sm text-gray-500">
              To ensure safety, it is beneficial to have your number added. You will receive an SMS with the authentication code on your phone to be able to link your phone with your account.
            </p>
          </div>
        </div>

        {!showInput ? (
          <div className="w-full">
            <Button
              onClick={handleAddClick}
              className="flex items-center hover:bg-gray-5 bg-white h-12 gap-2 justify-center border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 transition"
            >
              Add Primary Phone
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <label>Phone number</label>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%', height: '40px' }}
              containerStyle={{ width: '100%' }}
            />
            <div className="flex justify-end">
              <Button
                onClick={()=>setIsOpen(true)}
                className="bg-primary text-white px-4 py-2 rounded-md"
              >
                Add Number
              </Button>
            </div>
          </div>
        )}
      </div>

      <PhoneOtp isOpen={isOpen} Close={()=>setIsOpen(false)}   />
    </div>
  );
}
