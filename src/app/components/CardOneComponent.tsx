'use client'

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import sc1 from '../assets/Screenshot afo React App.png'

export default function CardOneComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <a href='https://aforeact.vercel.app/'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sc1.src}
          alt="all for one react website"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            All For One
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A webpage built in react that uses custom endpoints to return custom values. There are over 10 different endpoints to test out.
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
    </Card>
  );
}
