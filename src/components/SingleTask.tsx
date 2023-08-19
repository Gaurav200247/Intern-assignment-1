// "use server";

import Image from "next/image";
import React from "react";

interface author {
  name: String;
  avatar: String;
}

interface SingleTaskProps {
  task_title: String;
  author: author;
  task_icon: any;
  icon_color: String;
  created_At: String;
  active: Boolean;
}

const SingleTask = ({
  task_title,
  author,
  created_At,
  task_icon,
  active,
  icon_color,
}: SingleTaskProps) => {
  return (
    <div className="w-full flex justify-start items-start">
      {/* timing */}
      <p className="w-[105px] sm:w-[88px] truncate mr-1 text-[0.8rem] lg:text-[0.9rem] mt-[0.5px] px-3 text-gray-500 font-medium">
        {created_At}
      </p>

      {/* icon */}
      <div
        className={`z-10 rounded-full ${
          icon_color === "white" ? "text-green-500" : "text-white"
        } flex justify-center items-center mr-4 p-1 text-[1rem] border-[1px] border-zinc-300`}
        style={{ backgroundColor: icon_color as string }}
      >
        {task_icon}
      </div>

      <div className="flex flex-col justify-between items-start w-[80%]">
        {/* task_title */}
        <h1
          className={`text-[0.9rem] lg:text-[1rem] font-medium text-ellipsis ${
            active && "text-green-500"
          } w-full`}
        >
          {task_title}
        </h1>

        {/* author_info */}
        <div className="flex justify-start items-center p-3 lg:p-5 pt-3 ">
          <div className="mr-2 hidden lg:block">
            <Image
              src={author.avatar as string}
              alt={author.name as string}
              width={30}
              height={30}
            />
          </div>
          <div className="mr-2 block lg:hidden">
            <Image
              src={author.avatar as string}
              alt={author.name as string}
              width={20}
              height={20}
            />
          </div>

          <p className="text-[0.6rem] lg:text-[0.8rem] text-gray-500 font-medium">
            {author.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
