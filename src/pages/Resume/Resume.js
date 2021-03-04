import React from "react";
import "./resume.css";
import { Grid, Paper, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Resume = () => {
  return (
    <>
      {/*//About me */}
      <Grid container className="section p_b_45">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="about_me">
            {resumeData.About}
          </Typography>
        </Grid>
      </Grid>
      {/* Experience & Education */}
      <Grid container className="section">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resumeTimeline">
            {/* Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services*/}
      <Grid container className="section"></Grid>

      {/* Skills */}
      <Grid container className="section">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-between">
            {resumeData.skills.map((skills) => (
              <Grid item={12} sm={6} md={3}>
                <Paper elevation={2}>
                  <Typography>{skills.title}{skills.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Contact me */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
