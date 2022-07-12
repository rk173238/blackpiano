import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@mui/material';
import Modal from '@mui/material/Modal';

const PlanetDetail = (props) =>{
    const [residentOpen, setResidentOpen] = useState(false)
    const [filmsOpen, setFilmsOpen] = useState(false)
    const listItem = (keyy,value)=>{
        return (
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={keyy}/>
                    <ListItemText secondary={value} />
                </ListItemButton>
            </ListItem>
        )
    }
    
    return(
        <div>
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.data.name}
                    </Typography>
                    <List>
                        {listItem("Climate",props.data.climate)}
                        {listItem("Terrain",props.data.terrain)}
                        {listItem("Diameter",props.data.diameter)}
                        {listItem("Gravity",props.data.gravity)}
                        {listItem("Water",props.data.surface_water)}
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"Url"}/>
                                <ListItemText><Link href = {props.data.url}>Link</Link></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" onClick = {()=>setResidentOpen(true)}>Residents</Button>
                    <Button size="small" onClick = {()=>setFilmsOpen(true)}>Films</Button>
                </CardActions>
            </Card>



            <Modal open={residentOpen} onClose={()=>setResidentOpen(false)}>
                <div style ={{marginTop:"25%",marginLeft:"25%",marginRight:"25%", backgroundColor:"white"}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.data.residents.length < 1 ? "No Resident" : "Resident List"}
                    </Typography>
                    {props.data.residents.map(resident=>(
                        <li key = {resident}>
                            <Link href = {resident}>{resident}</Link>
                        </li>
                    ))}
                </div>
            </Modal>
            <Modal open={filmsOpen} onClose={()=>setFilmsOpen(false)}>
                <div style ={{marginTop:"25%",marginLeft:"25%",marginRight:"25%", backgroundColor:"white"}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.data.films.length < 1 ? "No Films" : "Film List"}
                    </Typography>
                    {props.data.films.map(film=>(
                        <li key = {film}>
                            <Link href = {film}>{film}</Link>
                        </li>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default PlanetDetail