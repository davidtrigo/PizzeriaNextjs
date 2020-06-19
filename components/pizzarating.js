import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

export default function PizzaRating({pizza}) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Valoración</Typography>
        <Rating name="customized-10" readOnly
        value={pizza.rating} max={10} />
      </Box>
    </div>
  );
}
