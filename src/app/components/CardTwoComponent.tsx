'use client'

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PokeDexScreenshot from "../assets/images/PokeDexScreenshot.png"


export default function CardTwoComponent() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 250, minHeight: 300, maxHeight: 325 }}>
      <a href='https://poke-dex-dun.vercel.app/'>
        <CardMedia
          component="img"
          height="140"
          image={PokeDexScreenshot.src}
          alt="pokemon search website"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='font-sec'>
            Pokedex
          </Typography>
          <Typography variant="body2" color="text.secondary" className='font-main'>
            A webpage built in vanilla javascript that allows user input and returns information for the corresponding pokemon from an API.
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}