import { Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

export default function Countries({ countries }) {

    const [filter, setFilter] = useState("")
    const [filteredCountries, setFilteredCountries] = useState(countries)

    useEffect(() => {
        setFilteredCountries(countries.filter(({Country}) => Country.toLowerCase().includes(filter.toLowerCase())))
    }, [filter, countries])

    const onFilterChange = (e) => { setFilter(e.target.value) }
    
    return <>
        <Box p={2} >
            <Grid
                container
                justifyContent="center"
            >
                <TextField sx={{ bgcolor: 'silver', width: 300, borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} label="Filter" type='text' value={filter} onChange={onFilterChange} variant="filled" />
            </Grid>
        </Box>
        <Grid
            container
            wrap='wrap'
            justifyContent='center'
            rowSpacing={3}
            columnSpacing={3}
            
        >
            {filteredCountries.map((country) => <Grid key={country.ID} item>
                <CountryCard country={country} />
            </Grid>
            )}
        </Grid>
    </>
}