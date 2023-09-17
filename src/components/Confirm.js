import React from 'react'
import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
function Confirm() {

    const name = useSelector((state) => state.chat.name);
    const age = useSelector((state) => state.chat.age);
    console.log("name:",name)
    console.log("age:",age)
    return (
        <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
          Your name Sonu aged 23 has been added to student system. You may now exit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
    )
}

export default Confirm
