import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Product({ product, onClickHander }) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <Link to={`/Catalog/${product.id}`}>
      <CardMedia
          component="img"
          height="160"
          image={product.img}
          alt="green iguana"
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`/Catalog/${product.id}`} state={{ data: product }}>{product.name}</Link>
            <div style={{ fontSize: '15px' }}>{product.price}czk</div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}