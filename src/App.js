
import { Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Global from './components/Global';
import Header from './components/Header';

export default function App() {
  const [global, setGlobal] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setGlobal(data.Global);
        setCountries(data.Countries);
      });
  }, []);
  console.log('global....',global);
  console.log('countries....',countries);
  const date = new Date(global.Date);

  return (
    <>
      <Header date={date}/>
      <Container>
        <Paper elevation={5}>
          <Box width="100%" minHeight="calc(100vh - 80px)" bgcolor="#35363a" p={3} sx={{ color: "#fff"}}>
            <Global global={global} />
            <Countries countries={countries} />
          </Box>
        </Paper>
      </Container>
    </>
  );
}
