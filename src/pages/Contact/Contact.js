import React from "react";
import "./contact.css";
import { Grid, Typography, TextField } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Buttons/Button";
import "../Contact/contactform.php";
import { Map, GoogleApiWrapper } from "google-maps-react";

const contact = () => {
  return (
    <>
      <Grid container className="section p_b_45 p_t_40">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">Contact Me</h6>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        {/* Contact Form*/}
        <Grid item xs={12} lg={8}>
          <Grid container className="section ">
            <Grid item className="resume_title m_b_30">
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid method="POST" item xs={12} sm={6}>
                  <TextField className="name" name="Name" label="Name" />
                </Grid>
                <Grid method="POST" item xs={12} sm={6}>
                  <TextField className="email" name="email" label="E-mail" />
                </Grid>
                <Grid method="POST" item xs={12}>
                  <TextField
                    fullWidth
                    className="message"
                    name="Message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item method="POST" className="contact-form">
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Information*/}
        <Grid item xs={12} lg={4}>
          <Grid item className="resume_title m_b_30">
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
                  <Grid container className="contactInfo_socials_container">
                    {Object.keys(resumeData.socials).map((key) => (
                      <Grid item className={"contactInfo_socials"}>
                        <a href={resumeData.socials[key].link}>
                          {resumeData.socials[key].icon}
                        </a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
<script src="https://smtpjs.com/v3/smtp.js">
</script>

export default contact;
