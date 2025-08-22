import React from "react";
import { CreditCard, Wallet, Plus, Calendar, CheckCircle2 } from "lucide-react";
import { Modal } from "./Modal";

export default function BoostAdCard() {
  return (
   <Modal isOpen={false} onClose={function (): void {
          throw new Error("Function not implemented.");
      }}>

     <div className="max-w-md mx-auto rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-semibold">
          L
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 text-sm">Boost Your Ad</h2>
          <p className="text-xs text-gray-500">
            Increase visibility and get more views for your listing
          </p>
        </div>
      </div>

      {/* Car Info */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-3 rounded-md border border-gray-200 p-3">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=200"
            alt="car"
            className="h-12 w-16 rounded-md object-cover"
          />
          <div>
            <h3 className="font-medium text-gray-800 text-sm">Honda Civic 2020</h3>
            <p className="text-xs text-gray-500">9500.00 USD</p>
          </div>
        </div>
      </div>

      {/* Boost Duration */}
      <div className="px-4 py-2">
        <label className="text-xs font-medium text-gray-700">Boost Duration</label>
        <div className="mt-1 flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span>01 June 2025 to 07 June 2025</span>
        </div>
        <p className="mt-1 text-xs text-gray-400">7 Days</p>
      </div>

      {/* Boost Benefits */}
      <div className="px-4 py-3">
        <div className="rounded-md bg-orange-50 border border-orange-200 p-3">
          <h4 className="text-sm font-semibold text-orange-700 mb-2 flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-orange-600" />
            Boost Benefits
          </h4>
          <ul className="text-xs text-gray-700 space-y-1">
            <li>⚡ More Views — Enhanced visibility on search results</li>
            <li>🔥 Top Position — Featured at the top of listings</li>
            <li>🚀 Attract Buyers — Reach more potential buyers instantly</li>
          </ul>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="px-4 py-3 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-800 mb-2">
          Payment Methods
        </h4>

        <div className="space-y-2">
          {/* VISA */}
          <div className="flex items-center justify-between rounded-md border border-gray-300 px-3 py-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CreditCard className="h-4 w-4 text-blue-500" />
              <span>VISA •••• 1234</span>
            </div>
            <span className="text-xs text-green-600 font-medium">Selected</span>
          </div>

          {/* Wallet */}
          <div className="flex items-center justify-between rounded-md border border-gray-300 px-3 py-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Wallet className="h-4 w-4 text-red-500" />
              <span>Wallet Balance: 50 Mycoins</span>
            </div>
            <span className="text-xs text-gray-400">Low Balance</span>
          </div>

          {/* Add Payment */}
          <button className="w-full flex items-center justify-center gap-1 rounded-md border border-dashed border-gray-300 py-2 text-sm text-gray-600 hover:bg-gray-50">
            <Plus className="h-4 w-4" />
            Add Payment Methods
          </button>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="px-4 py-3 border-t border-gray-200 text-sm text-gray-700 space-y-1">
        <div className="flex justify-between">
          <span>Transfer Amount</span>
          <span>1.00 Mycoins</span>
        </div>
        <div className="flex justify-between">
          <span>Transfer Fee</span>
          <span>0.00 Mycoins</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>1.00 Mycoins</span>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center justify-between gap-2 px-4 py-3 border-t border-gray-200">
        <button className="flex-1 rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button className="flex-1 rounded-md bg-red-600 py-2 text-sm font-medium text-white hover:bg-red-700">
          Boost Ad
        </button>
      </div>
    </div>
   </Modal>
  );
}
