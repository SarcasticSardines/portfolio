'use client'

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import afoScreenshot from "../assets/images/afoScreenshot.png"


export default function CardOneComponent() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 250, minHeight: 300, maxHeight: 325 }}>
      <a href='https://aforeact.vercel.app/'>
        <CardMedia
          component="img"
          height="140"
          image={afoScreenshot.src}
          alt="all for one react website"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='font-sec'>
            All For One
          </Typography>
          <Typography variant="body2" color="text.secondary" className='font-main'>
            A webpage built in react that uses custom endpoints to return custom values. There are over 10 different endpoints to test out.
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}
