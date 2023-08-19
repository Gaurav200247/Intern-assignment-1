import React from "react";
import SingleTask from "./SingleTask";

interface DateInfo {
  day: String;
  date: String;
  month: String;
}

interface author {
  name: String;
  avatar: String;
}

interface SingleTasks {
  task_title: String;
  author: author;
  task_icon: any;
  icon_color: String;
  created_At: String;
  active: Boolean;
}

interface TasksContainerProps {
  DateInfo: DateInfo;
  active: Boolean;
  Tasks: SingleTasks[];
}

const TasksContainer = ({ DateInfo, Tasks, active }: TasksContainerProps) => {
  return (
    <div
      className={`relative flex flex-col justify-between items-start w-full border-b-[0.5px] border-gray-600  ${
        !active && "pt-10"
      }`}
    >
      {!active && (
        <div className="line absolute top-0 left-[103px] bg-gray-600 "></div>
      )}

      <div className="line absolute bottom-0 left-[103px] bg-gray-600 "></div>

      {/* dateinfo conatiner */}
      <div className="flex  justify-start items-start mb-10 z-10">
        {/* day and month block */}
        <div className="flex flex-col justify-between items-end px-6 lg:px-5">
          <p className="font-semibold">{DateInfo.day}</p>
          <p className="text-[0.9rem]">{DateInfo.month}</p>
        </div>
        {/* date-block */}
        <div
          className={` text-[0.9rem] lg:text-[1.1rem] font-semibold text-white p-2 lg:p-3 rounded-md ${
            active ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          {DateInfo.date}
        </div>
      </div>

      {/* All Tasks block*/}
      <div className="flex flex-col justify-between items-start w-full">
        {Tasks.map((item, index) => {
          return <SingleTask key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TasksContainer;
