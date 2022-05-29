import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import { myContext } from '../App/App';

export function FindMeColors(){

    const {mainColor, setMainColor} = useContext(myContext);
    const [colors, setColors] = useState(["#ADD8E6", "#ADD8FF", "#ADD8D1", "#ADE1F1"]);
    const{foundColors, setFoundColors} = useContext(myContext);
    
    function addToBox(color){
      const newFoundColors = [...foundColors, color];
      setFoundColors(newFoundColors);
    };
    
    
    
    return(
        <div>
            <Box
  sx={{
    border: '2px solid black',
    width: 175,
    height: 100,
    margin: 'auto',
    marginTop: 2,
    marginBottom: 2,
    alignContent: 'center',
    backgroundColor: mainColor,
  }}
/>
{/* <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{marginBottom: 5}}
>
    <Grid item xs={2}>
        Color1
    </Grid>
    <Grid item xs={2}>
        Color2
    </Grid>
    <Grid item xs={2}>
        Color3
    </Grid>
    <Grid item xs={2}>
        Color4
    </Grid>
    <Grid item xs={1}>
        <Button><ArrowDropUpIcon/></Button>
        <Box>Lighter</Box>
        <Button><ArrowDropDownIcon/></Button>
        <Box>Darker</Box>
    </Grid>
    
</Grid> */}
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{marginBottom: 5}}>
{colors.map((color)=> (<Box><Grid item xs={2}><Box sx={{backgroundColor: color, border: '2px solid black', height: 140, width: 140, margin: 'auto'}}><Button onClick={() => addToBox(color)}>Add to box</Button></Box></Grid><Grid item xs ={1}>
  </Grid></Box>))}
  <Grid item><Button><ArrowDropUpIcon/></Button>
        <Box>Lighter</Box>
        <Button><ArrowDropDownIcon/></Button>
        <Box>Darker</Box></Grid>
</Grid>



        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', margin: 'auto', border: '4px solid black', marginRight: 2, marginLeft: 2}} >
          <Grid item xs={12} sx={{margin: 'auto', padding: 5, textAlign: 'center', fontSize: 20}}>COLORS</Grid>
          {foundColors.map((color) => <Grid item ><Box sx={{backgroundColor: color, border: '2px solid black', height: 140, width: 140, margin: 'auto'}}/></Grid>)}
        </Grid>
      
        </div>
    )




    
}