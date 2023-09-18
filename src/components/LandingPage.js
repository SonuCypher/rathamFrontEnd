import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from 'react-redux';
import { toggleChatBot } from "../store/chatSlice";

function LandingPage() {
    const dispatch = useDispatch()
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography sx={{marginTop:"40px",fontWeight:"bold",color:"white"}} variant="h4"  textAlign="center">
            Enter into Student Info System
          </Typography>
        </Grid>
        <Grid sx={{marginTop:"40px"}} item xs={12}>
        
            <Button onClick={() => dispatch(toggleChatBot(true))} variant="contained" color="secondary">
                Enroll Now!
            </Button>
        
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
