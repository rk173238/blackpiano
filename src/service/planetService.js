import axios from "axios";

export function fetchPlanetData (){
    let url = "https://swapi.dev/api/planets/?size=100"

    return axios.get(url).then(res=>{

        // console.log(res)
        return res.data;
    }).catch(err=>{
        console.log(err)
    })
}