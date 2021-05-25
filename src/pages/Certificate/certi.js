import React from "react";
import "./certi.css";
import resumeData from "../../utils/resumeData";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  classes,
  MenuIcon,
  Typography,
  Button
} from "@material-ui/core";

const Certificate = () => {
  return (
    <>
      <Grid container className="section p_b_45 p_t_40">
        <Grid item className="resume_title m_b_30">
          <span></span>
          <h6 className="section_title_text">Certificates</h6>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="	#D44500"
                aria-label="menu"
              >
              </IconButton>
              <Typography variant="h6">
                News
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
};

export default Certificate;
