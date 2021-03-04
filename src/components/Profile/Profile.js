import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimeLineSeparator } from "../Timeline/Timeline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import resumeData from "../../utils/resumeData";
import "./profile.css";
import CustomButton from '../Buttons/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <CustomTimeLineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="_blank" >
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
        <img src={require("../../assets/images/profile.jpg")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}> 
            <CustomTimelineItem title="Name" text={resumeData.Name} />
            <CustomTimelineItem title="Birthdate" text={resumeData.Birthdate} />
            <CustomTimelineItem title="Job" text={resumeData.Job} />
            <CustomTimelineItem title="Email" text={resumeData.Email} />
            <CustomTimelineItem title="Address" text={resumeData.Address} /> 
        <div className='button_container'>
            <CustomButton text={"Download Resume"} icon={<GetAppIcon />}> </CustomButton>
        </div>
        </CustomTimeline>
      </div>
    </div>
  );
};

export default Profile;
