import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Header({date}) {
    return (
        <Paper elevation={3}>
            <Box pb={2} pt={2} width="100%" bgcolor="silver">
            <Grid
                container
                justifyContent='center'
                alignItems='center'
            >
                <Typography variant='h4'>COVID-19 Daily Report: {date.toDateString()}</Typography>  
            </Grid>
        </Box>
        </Paper>
    )
}
