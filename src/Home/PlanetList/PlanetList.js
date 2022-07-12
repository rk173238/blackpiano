import React, { useEffect, useState } from 'react'
import { fetchPlanetData } from '../../service/planetService'
import Grid from '@mui/material/Grid';
import PlanetDetail from './PlanetDetail/PlanetDetail';
const PlanetList = (props) =>{

    const [planetListData,setPlanetListData] = useState([]);

    useEffect( ()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetchPlanetData();
        setPlanetListData(data.results)
    }

    return (
        <div>
            <Grid container spacing={2}>
                {planetListData.length > 0 ? 
                    planetListData.map((planetDetail,i)=>(
                        <Grid item xs={12} md={6} lg={4} key = {i}>
                            <PlanetDetail data = {planetDetail}></PlanetDetail>
                        </Grid>
                    ))
                :"LOADING"}
            
            </Grid>
        </div>
    )
}
export default PlanetList;