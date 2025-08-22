"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
interface DropdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
  anchorEl: HTMLElement | null;
  width?: string;
  markAs?:string
}

export const DropdownModal: React.FC<DropdownModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  markAs,
  className = "",
  anchorEl,
  width = "w-96"
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (anchorEl && isOpen) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [anchorEl, isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorEl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.2)]"
            onClick={onClose}
          />
          
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 ${width} max-h-[80vh] overflow-hidden ${className}`}
            style={{
              top: `${position.top + 8}px`,
              left: `${position.left}px`,
              minWidth: `${position.width}px`,
            }}
          >
            {title && (
              <div className="flex items-center justify-between p-3 border-b sticky top-0 bg-white z-10">
                <h5 className="font-semibold text-black">{title}</h5>
               {markAs}
              </div>
            )}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};