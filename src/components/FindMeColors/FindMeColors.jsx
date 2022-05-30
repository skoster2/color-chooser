import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import { myContext } from '../App/App';
import Menu from '@mui/material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';

export function FindMeColors(){

    const {mainColor, setMainColor} = useContext(myContext);
    const [colors, setColors] = useState(["#ADD8E6", "#ADD8FF", "#ADE1F1"]);
    const{foundColors, setFoundColors} = useContext(myContext);
    const {collections, setCollections} = useContext(myContext);
  

    function addToBox(color){
      const newFoundColors = [...foundColors, color];
      setFoundColors(newFoundColors);
    };
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    


    function addColorToCollection(collection){
        console.log(foundColors);
        console.log(collection);
         const newCollections = collections.map((currCollection) => {
          if(collection === currCollection.name){
            return {...collections, name: currCollection.name, colors: currCollection.colors.concat(foundColors)};
          }
          console.log(currCollection.name);
          return {...collections, name: currCollection.name, colors: currCollection.colors};;
        });
        setCollections(newCollections); 
    };

    function deleteColor(deletedColor) {
      console.log(deletedColor);
      console.log(foundColors);
      setFoundColors(foundColors.filter(color => color !== deletedColor));
  }


  function findSimilarColors(){
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'ai-color-generator.p.rapidapi.com',
        'X-RapidAPI-Key': 'febe9083afmshfb1adff99f34a49p127917jsnc93b5a839611'
      },
      body: '{"colorList":["'+mainColor+'"]}'
    };
  
    
    fetch('https://ai-color-generator.p.rapidapi.com/generate-color', options)
      .then(response => response.json())
      .then(response => console.log(response)).then((response) => {setColors(response);})
      .catch(err => console.error(err));
      


  }


    return(
        <Grid container>
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
<Box sx ={{margin: 'auto'}}><Button onClick={findSimilarColors} sx={{color: 'black', border: '2px solid black', margin: 'auto'}}>Find Similar Colors</Button></Box>
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

</Grid>



        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', margin: 'auto', border: '4px solid black', marginRight: 2, marginLeft: 2}} >
          <Grid item xs={12} sx={{margin: 'auto', padding: 5, textAlign: 'center', fontSize: 20}}>COLORS</Grid>
          {foundColors.map((color) => <Grid item >

            <Box sx ={{height: 100, backgroundColor: color,  border: '2px solid black', height: 140, width: 140, margin: 'auto'}}>
            <Button onClick={() => deleteColor(color)}><CloseIcon/></Button>
   
   </Box>



          </Grid>)}


          <Button
     id="add-color-to-collection"
     aria-controls={open ? 'basic-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={handleClick}
     sx = {{color: 'black'}}
   >
     <AddBoxIcon sx={{color: 'black'}}/>
     Add To Collection
   </Button>
   <Menu
     id="basic-menu"
     anchorEl={anchorEl}
     open={open}
     onClose={handleClose}
     MenuListProps={{
       'aria-labelledby': 'basic-button',
     }}
   >
     {collections.map((collection) => (<MenuItem  onClick={() => addColorToCollection(collection.name)}>
    {collection.name}</MenuItem>))}

   </Menu>
        </Grid>
      
        </Grid>
    )    
}



