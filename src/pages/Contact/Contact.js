import React from 'react'
import './contact.css'
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Buttons/Button";


const contact = () => {
    return (
        <>
        <Grid container spacing={7} className="section p_t_40 p_b_45">
        {/* Contact Form*/}
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
        {/* Contact Information*/}
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
        <Grid container>
          <Grid item>
          </Grid>
        </Grid>
      </Grid>
        </>
    )
}

export default contact
