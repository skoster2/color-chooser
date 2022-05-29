import React, {useState, useContext} from 'react';
import './Choose.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SquareIcon from '@mui/icons-material/Square';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { orange, red, yellow } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { myContext } from '../App/App';
import Menu from '@mui/material/Menu';


export function Choose() {
    

  const [color, setColor] = useColor("#121212");
    
    const{color1, setColor1} = useContext(myContext);
    const{color2, setColor2} = useContext(myContext);

    const {collections, setCollections} = useContext(myContext);

  function changeColor1(){;
    setColor1(color.hex);
  }

  function changeColor2(){
    setColor2(color.hex);
  }

/*     function getColor1() {
          console.log(color.hex);
          fetch(
            `https://x-colors.herokuapp.com/api/random/${color.hex}`
          )
            .then((response) => response.json())
            .then((data) => {
              setColor1(data.hex);
            });   

      }
      function getColor2() {
        console.log(color.hex);
        fetch(
          `https://x-colors.herokuapp.com/api/random/${color.hex}`
        )
          .then((response) => response.json())
          .then((data) => {
            setColor2(data.hex);
          });   

    }; */

    function addColor1ToCollection(collection){
      console.log("did this work??");
        console.log(color1);
        console.log(collection);
         const newCollections = collections.map((currCollection) => {
          if(collection === currCollection.name){
            return {...collections, name: currCollection.name, colors: currCollection.colors.concat(color1)};
          }
          console.log(currCollection.name);
          return {...collections, name: currCollection.name, colors: currCollection.colors};;
        });
        setCollections(newCollections); 
    };



    function addColor2ToCollection(collection){
      console.log("color2");
      console.log(color1);
      console.log(collection);
       const newCollections = collections.map((currCollection) => {
        if(collection === currCollection.name){
          return {...collections, name: currCollection.name, colors: currCollection.colors.concat(color2)};
        }
        console.log(currCollection.name);
        return {...collections, name: currCollection.name, colors: currCollection.colors};;
      });
      setCollections(newCollections); 
  };






    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
    
    
    return(
    <>
    <Grid container spacing={4} sx={{margin: 'auto'}}>
  <Grid item xs={6}>
    <Box>Color 1</Box>
</Grid>
    <Grid item xs={6}>
  <Box>Color 2</Box>
  </Grid>
  <Grid item xs={6}>
    
    <Box sx ={{height: 100, backgroundColor: color1}}>
     <AddBoxIcon sx={{color: 'black'}}/>
      

      <Button
        id="add-color-to-collection"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx = {{color: 'black'}}
      >
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
        {collections.map((collection) => (<CollectionMenuItem1 name={collection.name} colors={collection.colors} addColor1ToCollection={addColor1ToCollection}/>))}

      </Menu>
      
      </Box>
</Grid>
<Grid item xs={6}>
  <Box sx ={{height: 100, backgroundColor: color2}}>
    <AddBoxIcon sx={{color: 'black'}}/>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx = {{color: 'black'}}
      >
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
                {collections.map((collection) => (<CollectionMenuItem2 name={collection.name} colors={collection.colors} addColor2ToCollection={addColor2ToCollection}/>))}


      </Menu>
    
    
    
    </Box></Grid>
<Grid item xs = {6}>
    <FormControl fullWidth>
  <InputLabel id="select-colors" >Choose a color</InputLabel>
  <Select
    labelId="select-colors"
    id="select-colors"
    value={"Color"}
    label="Age"
    onChange={() => changeColor1()}
  >
    {/* <MenuItem value={"red"} style={{color:red}}>Red</MenuItem>
    <MenuItem value={"yellow"} style={{color:yellow}}>Yellow</MenuItem>
    <MenuItem style={{}}value={"green"}>Green</MenuItem> */}
    <MenuItem><ColorPicker width={500} height={228} color={color} onChange={setColor} hideHSV dark /></MenuItem>
  </Select>
</FormControl>
</Grid>
<Grid item xs={6}>


    <FormControl fullWidth>
  <InputLabel id="select-colors" >Choose a color</InputLabel>
  <Select
    labelId="select-colors"
    id="select-colors"
    value={"Color"}
    label="Age"
    onChange={() => changeColor2()}
  >
    {/* <MenuItem value={"red"} style={{color:red}}>Red</MenuItem>
    <MenuItem value={"yellow"} style={{color:yellow}}>Yellow</MenuItem>
    <MenuItem style={{}}value={"green"}>Green</MenuItem> */}
        <MenuItem><ColorPicker width={500} height={228} color={color} onChange={setColor} hideHSV dark /></MenuItem>
  </Select>
</FormControl>
</Grid>
</Grid>


    </>
    );
}

const CollectionMenuItem1 = (props) => {
  return <MenuItem  onClick={() => props.addColor1ToCollection(props.name)}>
    {props.name}</MenuItem>
}

const CollectionMenuItem2 = (props) => {
  return <MenuItem  onClick={() => props.addColor2ToCollection(props.name)}>
    {props.name}</MenuItem>
}