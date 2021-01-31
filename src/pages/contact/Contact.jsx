import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import NotesIcon from '@material-ui/icons/Notes';

const Contact = () => {
    return (
        <>
        {/* <Typography variant="h4" style={{ textDecoration: 'none', color: "white" }}>
            <Card>
              <li class="contact-list">Phone: </li>
              <a href="tel:503-927-9423">503-927-9423</a>
              </Card>
              <li class="contact-list">Email: </li>
              <a href="mailto: reanderson89@gmail.com">reanderson89@gmail.com</a>
             
              <li class="contact-list">GitHub:</li>
              <a href="https://github.com/reanderson89">@reanderson89</a>
              <li class="contact-list">LinkedIn: </li>
              <a href="https://www.linkedin.com/in/robert-anderson-034ba71b0/">Robert Anderson</a>
              <li class="contact-list">Resume:</li><a href="./assets/robert-anderson-resume.pdf" download="Robert Anderson's Resume"target="_blank">Download</a>
            </Typography> */}
            
                <Grid container spacing={2} alignItems="center">
                        <Grid item sm={4} md={4} xs={8} style={{marginTop:16}}>
                        <Card>
                            <Typography variant="h4"><PhoneIphoneIcon fontSize="large"/> Phone: </Typography>
                            <Typography variant="h5"><a href="tel:503-927-9423" style={{ textDecoration: 'none', color: "blue" }}>503-927-9423</a></Typography>
                            </Card>
                        </Grid>
                    
                    
                        <Grid item sm={4} md={4} xs={8} style={{marginTop:16}}>
                        <Card>
                            <Typography variant="h4"><EmailIcon fontSize="large"/> Email: </Typography>
                            <Typography variant="h5"><a href="mailto: reanderson89@gmail.com" style={{ textDecoration: 'none', color: "blue" }}>reanderson89@gmail.com</a></Typography>
                            </Card>
                        </Grid>
                    
                    
                        <Grid item sm={4} md={4} xs={8} style={{marginTop:16}}>
                        <Card>
                            <Typography variant="h4"><GitHubIcon fontSize="large"/> GitHub: </Typography>
                            <Typography variant="h5"><a href="https://github.com/reanderson89" style={{ textDecoration: 'none', color: "blue" }}>@reanderson89</a></Typography>
                            </Card>
                        </Grid>
                    
                </Grid>
                <Grid container spacing={2}>   
                        <Grid item sm={6} md={6} xs={8} style={{marginTop:16}}>
                        <Card>
                            <Typography variant="h4"><LinkedInIcon fontSize="large"/> LinkedIn: </Typography>
                            <Typography variant="h5"><a href="https://www.linkedin.com/in/robert-anderson-034ba71b0/" style={{ textDecoration: 'none', color: "blue" }}>Robert Anderson</a></Typography>
                            </Card>
                        </Grid>
                        <Grid item sm={6} md={6} xs={8} style={{marginTop:16}}>
                        <Card>
                            <Typography variant="h4"><NotesIcon fontSize="large"/> Resume: </Typography>
                            <Typography variant="h5"><a href="/assets/images/robert-anderson-resume.pdf" download="Robert Anderson's Resume"target="_blank" style={{ textDecoration: 'none', color: "blue" }}>Download</a></Typography>
                            </Card>
                        </Grid>
                </Grid>
                
            
            </>
    );
};

export default Contact;