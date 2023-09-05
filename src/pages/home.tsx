import PostCard from "@/components/Post/PostCard";
import { POST_DATA } from "@/utils/constants";
import React from "react";

function home() {
  return (
    <div className="w-full flex justify-center flex-col items-center pt-20 bg-primaryBG">
      <div className="max-w-4xl w-full">
        <h1 className="text-[#C5C7CA] text-[28px]">Hello Jane</h1>
        <p className="text-[#7F8084] text-base">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>

        <div className="mt-4">
          {POST_DATA.map((post, index) => {
            return (
              <div key={index} className="mb-4">
                <PostCard
                  name={post.name}
                  profilePic={post.profilePic}
                  postTime={post.postTime}
                  emoji={post.emoji}
                  postMessage={post.postMessage}
                  comments={post.comments}
                  isEdited={post.isEdited}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default home;
