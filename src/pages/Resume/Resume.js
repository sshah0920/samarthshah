import React from "react";
import "./resume.css";
import { Grid, Paper, Typography} from "@mui/material";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import SchoolIcon from "@mui/icons-material/School";
import TimelineDot from "@mui/lab/TimelineDot";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section p_b_45 p_t_40">
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
                        {experience.description1_0}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description1_1}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description1_2}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description1_3}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description1_4}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description2_0}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description2_1}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description2_2}
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
                        {education.description1_0}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_1}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_2}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_3}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_4}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_5}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_6}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_7}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_8}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description1_9}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description2_0}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description2_2}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description2_3}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description2_4}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description2_5}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid container className="section graybg p_b_45 p_50">
          <Grid item xs={12}>
            <Grid container justify="space-between" spacing={3}>
              {resumeData.skills.map((skill) => (
                <Grid item xs={12} sm={5} md={4}>
                  <Paper elevation={0} className="skill">
                    <Typography variant="h6" className="skill_title">
                      {skill.title}
                    </Typography>
                    {skill.description.map((element) => (
                      <Typography variant="body2" className="skill_description">
                        <TimelineDot
                          variant="outlined"
                          className="timeline_dot"
                        />
                        {element}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact me 
      <Grid container  spacing={7}className="section p_t_40 p_b_45">
        Contact Form
        <Grid item xs={12} lg={6}>
          <Grid container>
            <Grid item className="resume_title m_b_30">
              <span></span>
              <h6 className="section_title_text">Contact Me</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField name="Name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="Message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
         Contact Information
        <Grid item xs={12} lg={6}>
          <Grid item className="resume_title m_b_30">
            <span></span>
            <h6 className="section_title_text">Contact Information</h6>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Address:</span> {resumeData.Address}
                  </Typography>
                </Grid>
                <br />
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Phone:</span> {resumeData.Phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Email:</span> {resumeData.Email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Job:</span> {resumeData.Job}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Skype:</span> {resumeData.Skype}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container className='contactInfo_socials_container'>
                    {Object.keys(resumeData.socials).map(key => (
                      <Grid item className={'contactInfo_socials'}>
                        <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
                    </Grid>*/}
    </>
  );
};

export default Resume;
