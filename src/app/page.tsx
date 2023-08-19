import TasksContainer from "@/components/TasksContainer";
import React from "react";
import { Tasks } from "../../Utils/Data";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-between items-start p-5 pt-10 md:p-24 ">
      <TasksContainer
        DateInfo={{ day: "WED", date: "30", month: "Jul" }}
        active={true}
        Tasks={Tasks[0]}
      />
      <TasksContainer
        DateInfo={{ day: "THU", date: "29", month: "Jul" }}
        active={false}
        Tasks={Tasks[1]}
      />
      {/* <TasksContainer /> */}
    </div>
  );
};

export default HomePage;
