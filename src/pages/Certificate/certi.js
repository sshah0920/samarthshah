import React from "react";
import "./certi.css";
import resumeData from "../../utils/resumeData";
import { Grid } from "@material-ui/core";

const Certificate = () => {
  return (
    <>
      <Grid container className="section  p_t_40">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">Certificates</h6>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} lg={12} >
          <div class="list-group">
            <a href="https://coursera.org/share/eaab57ed05a3fd15a313e2835e1028aa" target= '_blank' class="list-group-item list-group-item-action ">
              AWS Cloud Technical Essentials - Amazon Web Services
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Introduction to Containers w/Docker, Kubernetes and OpenShift - IBM
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Data Structures and Algorithms Specialization - UCSD
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Java Programming and Software Engineering Fundamentals Specialization
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              Object Oriented Programming in Java Specialization
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Certificate;
