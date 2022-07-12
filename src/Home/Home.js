import { Divider } from '@mui/material'
import React from 'react'
import PlanetList from './PlanetList/PlanetList'


const Home = ()=>{

    return(
        <div>
            <div>
                <h2>BlackPiano</h2>
                <h4>Planet </h4>
            </div>
            <Divider></Divider>
            <PlanetList></PlanetList>
        </div>
    )
}
export default Home;