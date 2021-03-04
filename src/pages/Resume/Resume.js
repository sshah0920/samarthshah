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
      <Grid container className="section p_b_45 p_t_45">
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
      {/* Services
      <Grid container className="section"></Grid>*/}

      {/* Skills */}
      <Grid container className="section">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid
          container
          spacing={3}
          justify="space-between"
          className="section graybg p_b_45 p_50"
        >
          {resumeData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={1} className="skill">
                <Typography variant="h6" className="skill_title">
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography variant="body2" className="skill_description">
                    <TimelineDot variant="outlined" className="timeline_dot" />
                    {element}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Contact me */}
      <Grid container className="section p_t_45">
        <Grid item className="resume_title m_b_30">
            <span></span>
            <h6 className="section_title_text">Contact Me</h6>
        </Grid>
        {/* Contact Form*/ }
        <Grid item xs={12} lg={7}>
            <Grid container>
                <Grid item>
                    
                </Grid>
            </Grid>
        </Grid>
        {/* Contact Information*/ }
        <Grid item xs={12} lg={5}>
            
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
