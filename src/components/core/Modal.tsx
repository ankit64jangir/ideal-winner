import { CrossIcon } from "@/utils/icons";
import React, { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 100);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed inset-0 backdrop-blur-[2px]"></div>
      <div
        className={`relative rounded-lg shadow-lg modal ${
          isClosing ? "fade-out" : "fade-in"
        }`}
      >
        {children}
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleClose}
        >
          <CrossIcon />
        </div>
      </div>
    </div>
  );
};

export default Modal;
