import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    height: 'auto',
    margin: '1em',
    padding: '2em'
    
  },

  paper: {
    margin: '1em',
    padding: '2em',
    textAlign: 'justify'
  },

  heading: {
    textAlign: 'center'
  }
})

const TodoItem = (props) => {
  const classes = useStyles();
  const handleDelete = (e) => {
    // console.log('You clicked Delete');
    props.deleteItem(props.item);
  }
  return (
    <Grid container spacing={0}>
    <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4" className={classes.heading}>
            {props.item.task}
          </Typography>
          <hr />
          {props.item.body}
          <hr />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TodoItem;