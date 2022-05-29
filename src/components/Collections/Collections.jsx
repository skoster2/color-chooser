import React, {useContext, useState} from 'react';
import Grid from '@mui/material/Grid';
import { myContext } from '../App/App';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

export function Collections(){
    const {collections, setCollections} = useContext(myContext);
    const [inputText, setInputText] = useState('');
    const {mainColor, setMainColor} = useContext(myContext);

    const navigate = useNavigate();
    

    function addCollection(){
        const newCollections = [...collections, {name: inputText, colors: []}];
        setCollections(newCollections);
    }

    function deleteCollection(deletedCollection) {
        setCollections(collections.filter(collection => collection.name !== deletedCollection));
    }


    function findSimilarColors(color){
        setMainColor(color);
        navigate("/findmecolors");
    }

    return(
        <div>
            <Box sx = {{width: 375, height: 100, margin: 'auto', fontSize: 50}}>
                My Collections</Box>
            <Box sx={{margin: 'auto', width: 375}}>
            <TextField id="outlined-basic" label="Collection name" variant="outlined" onChange = {(event) => setInputText(event.target.value)}/>
            <Button onClick={addCollection}><AddBoxIcon fontSize='large'/></Button>
            </Box>
                {collections.map((collection) => (<CollectionItem name={collection.name} colors={collection.colors} deleteCollection={deleteCollection} findSimilarColors={findSimilarColors}/>))}
            
        </div>
    );
            };

    const CollectionItem = (props) => {
        return <Box sx={{width: 300, margin: 'auto', border: '1px solid black', padding: 3, marginTop: 3}}>
            {props.name}
            {props.colors.map((color) => (<ColorItem color={color} findSimilarColors={props.findSimilarColors}/>))}
            <Button onClick={() => props.deleteCollection(props.name)}><CloseIcon/></Button>
            </Box>;
    }


    const ColorItem = (props) => {
        console.log(props.color);
        return <Grid item ><Box sx={{backgroundColor: props.color, border: '2px solid black', height: 140, width: 140, margin: 'auto'}}><Button onClick={() => props.findSimilarColors(props.color)}>Find me similar colors</Button></Box></Grid>
    }
