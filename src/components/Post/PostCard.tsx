import { CommentIcon, MenuIcon } from "@/icons";
import Image from "next/image";
import React from "react";

type PostCardTypes = {
  name: string;
  profilePic: string;
  postMessage: string;
  comments: number;
  emoji: string;
  postTime: string;
  isEdited: boolean;
};

function PostCard({
  name,
  profilePic,
  postMessage,
  comments,
  emoji,
  postTime,
  isEdited,
}: PostCardTypes) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-[#35373B] border-2 border-[#27292D] rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4 object-cover"
              width={44}
              height={44}
            />
            <div>
              <p className="text-gray-300 text-base">{name}</p>
              <div className="flex items-center">
                <p className="text-gray-400 text-sm">{postTime}</p>
                {isEdited && (
                  <p className="text-gray-400 text-sm ml-2">• Edited</p>
                )}
              </div>
            </div>
          </div>
          <MenuIcon color="white" size={26} />
        </div>

        <div className="bg-[#191920] h-40 flex items-center rounded-lg mt-4">
          <div className="w-16 h-16 bg-[#27292D] text-2xl rounded-full flex items-center justify-center m-4">
            {emoji}
          </div>
          <p className="text-[#7F8084] text-base flex-1">{postMessage}</p>
        </div>

        <div className="flex items-center mt-4">
          <CommentIcon />
          <p className="text-gray-400 text-base ml-2">{`${comments} comments`}</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
