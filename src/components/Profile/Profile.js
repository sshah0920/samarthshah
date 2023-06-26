import { Typography } from "@mui/material";
import React from "react";
import CustomTimeline, { CustomTimeLineSeparator } from "../Timeline/Timeline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import profileImage from "../../assets/images/profile.jpg"
import resumeData from "../../utils/resumeData";
import "./profile.css";
import CustomButton from '../Buttons/Button';
import GetAppIcon from '@mui/icons-material/GetApp';
import "../../assets/docs/Samarth_Shah.pdf";

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <CustomTimeLineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="_blank" rel='noreferrer'>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className ="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.Name}</Typography>
        <Typography className="title">{resumeData.Title}</Typography>
      </div>

      <figure className="profile_img">
        <img src={profileImage} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}> 
            <CustomTimelineItem title="Name" text={resumeData.Name} />
            <CustomTimelineItem title="Birthdate" text={resumeData.Birthdate} />
            <CustomTimelineItem title="Company" text={resumeData.Company} />
            <CustomTimelineItem title="Email" text={resumeData.Email} />
            <CustomTimelineItem title="Address" text={resumeData.Address} />
            <CustomTimelineItem title="Skype" text={resumeData.Skype} />  
        <a className='button_container'  href="Samarth_Shah.pdf" download="Samarth_Shah_Resume">
            <CustomButton text={"Download Resume"} icon={<GetAppIcon />} > </CustomButton>
        </a>
        </CustomTimeline>
      </div>
    </div>
  );
};

export default Profile;
