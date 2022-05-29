import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SquareIcon from '@mui/icons-material/Square';

export function Home() {
  const [myColor, setColor] = useState("#0000FF");
  return (
    <Box  sx={{margin: 'auto', marginTop:10, p: 3, border: '4px solid grey', width: 300,  alignSelf: 'center'}}>
      Welcome to the color chooser.
      Links will be added here
      <SquareIcon sx = {{color: myColor}}/>
    </Box>

  );
}