import React, { useState } from "react";
import Auth from "../Auth";
import Button from "../core/Button";
import Modal from "../core/Modal";

const CreatePost = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <div className="w-full p-6 rounded-lg border border-[#27292D] bg-[#35373B]">
        <h2 className="text-[#C5C7CA] text-2xl font-semibold mb-4">
          Create post
        </h2>

        <div className="flex items-center bg-[#191920] rounded-lg p-2">
          <div className="w-10 h-10 bg-[#27292D] rounded-full flex items-center justify-center ml-3">
            💬
          </div>
          <input
            placeholder="How are you feeling today?"
            className="flex-1 ml-2 bg-transparent h-[78px] pl-2 border-none focus:outline-none text-white placeholder-[#7F8084]"
          />
        </div>

        <div className="mt-4 flex justify-end items-end w-full">
          <Button onClick={openModal} text="Post" width="150px" />
        </div>
        <Modal isOpen={modalVisible} onClose={closeModal}>
          <Auth initialAuth="signup" />
        </Modal>
      </div>
    </div>
  );
};

export default CreatePost;
