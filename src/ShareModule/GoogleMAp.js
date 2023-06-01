import { Box } from '@mui/material';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const GoogleMAp = ({lat,lng}) => {
    return(
        <Box sx={{ml:3,mt:2,position:'relative',width: '50vw'}}>
   <LoadScript googleMapsApiKey="AIzaSyCUgo2W44Usm3qe7K_lEZGvLGsMyH6qJ_k">
      <GoogleMap
     mapContainerStyle={{ width: '50vw', height: '300px'}}
        center={{ lat: Number(lat), lng:Number(lng) }}
        zoom={3}
       
      >
        <Marker position={{ lat: Number(lat), lng: Number(lng)}} />
      </GoogleMap>
    </LoadScript>
    <Box sx={{display:'flex',justifyContent:'right', color:'gray',mt:1,fontSize:'13px'}}>
    <p>lat:{lat}</p>
    <p style={{marginLeft:'10px'}}>lng: {lng}</p>
    </Box>
        </Box>
    )
}
export default GoogleMAp;



// AIzaSyCUgo2W44Usm3qe7K_lEZGvLGsMyH6qJ_k