import { useState, useEffect } from "react";
import axios from 'axios';


// import {RAPID_API_KEY} from "../env"
// const rapidApiKey = RAPID_API_KEY

export default function useFetch(endpoint, query) 
{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query },
          headers: {
            'X-RapidAPI-Key': "23d494d9a6msh6b279f85dc007f6p15985ajsnebe9f8d9e19e",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          }
      };

      const fetchData = async () =>{
        setIsLoading(true)

        try {
            const response = await axios.request(options);
    
            setData(response.data.data);
            console.log(response.data.data)
            setIsLoading(false)
            
        } 
        catch (error) {
            setError(error)
            // alert("There is an error")
        }
        finally{
            setIsLoading(false)
        }
       
      }

    useEffect(()=>{
        fetchData();
    }, [])

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

  return {data, isLoading, error, refetch}
}

