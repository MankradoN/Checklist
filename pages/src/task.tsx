import { hexToRgb, makeStyles, rgbToHex } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';


interface TaskProps {
    title: string;
    priority: "high"|"medium"|"low"| "done";
    description: string;
    duration:number;
    image:string;
}

const Task:React.FC<TaskProps> =({title,priority,duration, description,image})=>{
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          padding: '10%',
        },
        paper: {
          padding: theme.spacing(2),
          margin: 'auto',
          maxWidth: 500,
          backgroundColor:
              priority === "high"
                ? "pink"
                : priority === "medium"
                ? "amber"
                : priority === "low"
                ? "turquoise"
                : "green",
        },
        image: {
          width: 128,
          height: 128,
        },
        img: {
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
        },
       

      }));
      const classes = useStyles();

    return(
      <div>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} src={image} width="128" height="128" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Duration :  {duration} hours
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Move to done
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                <IconButton aria-label="delete">
                     <DeleteIcon />
                </IconButton>
                  <Typography variant="subtitle1" style={{ color: 'red' }}>x</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        </div>
      );
}


export default Task;
