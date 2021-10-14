import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function CountryCard({ country }) {
    const {Country, NewConfirmed, TotalConfirmed, TotalDeaths, TotalRecovered} = country
  return (
    <Paper elevation={3}  sx={{ width: 275, height: 200, color: "#fff", borderRadius: '15px', padding: '15px',  backgroundColor: "#202124"}}>
        <CardContent>
            <Typography sx={{ fontSize: 26 }} textAlign='center'  gutterBottom>
                {Country}
            </Typography>
            <Typography >New Confirmed: {NewConfirmed}</Typography>
            <Typography >Total Confirmed: {TotalConfirmed}</Typography>
            <Typography >Total Deaths: {TotalDeaths}</Typography>
            <Typography >Total Recovered: {TotalRecovered}</Typography>
        </CardContent>
    </Paper>
  )
}