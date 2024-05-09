'use client'

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import jobInterestScreenshot from "../assets/images/jobInterestScreenshot.png"


export default function CardThreeComponent() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 250, minHeight: 300, maxHeight: 325 }}>
      <a href='https://jobinterest-six.vercel.app/'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={jobInterestScreenshot.src}
          alt="pokemon search website"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='font-sec'>
            {/* try unity project upload and link for 2nd draft */}
            Job Interest
          </Typography>
          <Typography variant="body2" color="text.secondary" className='font-main'>
            A webpage built in react that focused on researching five different job listings and positions I am interested in pursuing.
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
    </Card>
  );
}