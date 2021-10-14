import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Global({global}) {
    return (
        <Paper elevation={3} sx={{ color: "#fff", borderRadius: '15px', padding: '15px',  backgroundColor: "#202124"}}> 
            <Grid
                container
                justifyContent='center'
            >
                <Grid item xs={2}>
                    <Typography>Global Numbers: </Typography>
                </Grid>

                <Grid item xs={8}>
                    <Grid
                        container
                        wrap='wrap'
                        justifyContent='center'
                        rowSpacing={1}
                        columnSpacing={3}
                    >
                        <Grid item xs={6}>
                            <Paper sx={{ color: "#000", borderRadius: '15px',  backgroundColor: "silver"}}>
                            <Typography textAlign='center'>New Confirmed Cases: {global.NewConfirmed}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper sx={{ color: "#000", borderRadius: '15px',  backgroundColor: "silver"}}>
                            <Typography textAlign='center'>Total Confirmed Cases: {global.TotalConfirmed}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper sx={{ color: "#000", borderRadius: '15px',  backgroundColor: "silver"}}>
                            <Typography textAlign='center'>New Deaths: {global.NewDeaths}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper sx={{ color: "#000", borderRadius: '15px',  backgroundColor: "silver"}}>
                            <Typography textAlign='center'>Total Deaths: {global.TotalDeaths}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper sx={{ color: "#000", borderRadius: '15px',  backgroundColor: "silver"}}>
                            <Typography textAlign='center'>New Recovered: {global.NewRecovered}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper sx={{ color: "#000", borderRadius: '15px',  backgroundColor: "silver"}}>
                            <Typography textAlign='center'>Total Recovered: {global.TotalRecovered}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
