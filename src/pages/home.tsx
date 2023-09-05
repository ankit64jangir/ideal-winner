import PostCard from "@/components/Post/PostCard";
import React from "react";

function home() {
  return (
    <div>
      <PostCard
        name="Marvin McKinney"
        profilePic="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        postTime="8 mins ago"
        emoji="😔"
        postMessage="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        comments={24}
        isEdited={true}
      />
    </div>
  );
}

export default home;
