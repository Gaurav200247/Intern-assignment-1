import { BiSolidUserAccount } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { RiChatFollowUpLine } from "react-icons/ri";
import { SiGooglemeet } from "react-icons/si";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiWarningCircleBold } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";

export const Tasks = [
  // ------------------- Day 1 -------------------
  [
    {
      task_title: "New task assigned to you",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <BiSolidUserAccount />,
      icon_color: "blue",
      created_At: "11:30 AM",
      active: true,
    },
    {
      task_title: "New feedback recieved for Task Name",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <VscFeedback />,
      icon_color: "red",
      created_At: "11:30 AM",
      active: false,
    },
    {
      task_title: "Task marked completed by you",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <AiOutlineCheck />,
      icon_color: "#3fb883",
      created_At: "11:30 AM",
      active: false,
    },
    {
      task_title: "Task Name updated for journey Journey Name",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <MdOutlineBrowserUpdated />,
      icon_color: "pink",
      created_At: "11:30 AM",
      active: false,
    },
    {
      task_title:
        "Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <RiChatFollowUpLine />,
      icon_color: "yellow",
      created_At: "11:30 AM",
      active: false,
    },
  ],

  //  ------------------- Day 2 -------------------

  [
    {
      task_title: "Meeting with Bobby Charlie",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <SiGooglemeet />,
      icon_color: "white",
      created_At: "11:30 AM",
      active: false,
    },
    {
      task_title: "Chat about Design Mentorship",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <IoChatbubbleEllipsesOutline />,
      icon_color: "purple",
      created_At: "11:30 AM",
      active: false,
    },
    {
      task_title: "Critical delay observed in time line adherence",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <PiWarningCircleBold />,
      icon_color: "red",
      created_At: "11:30 AM",
      active: false,
    },
    {
      task_title: "Finish project documentation for review (1-1 checkin)",
      author: {
        name: "Sheila O'Riley",
        avatar: "/usr_avatar.png",
      },
      task_icon: <GiSandsOfTime />,
      icon_color: "yellow",
      created_At: "11:30 AM",
      active: false,
    },
  ],
];
