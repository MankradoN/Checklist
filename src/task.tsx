import { hexToRgb, makeStyles, rgbToHex } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';

export interface TaskType{
    title: string;
    priority: "high"|"medium"|"low"| "done";
    description: string;
    duration:number;
    image:string;
}

 interface TaskProps extends TaskType {
    doneStateHandler?: (task:TaskType)=>void
}



const Task:React.FC<TaskProps> =({title,priority,duration, description,image,doneStateHandler})=>{
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          padding: '3%',
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
                    {priority!=="done" && <Typography variant="body2" onClick={()=>doneStateHandler!({title,priority,description,image,duration})} style={{ cursor: 'pointer' }}>
                      Move to done
                    </Typography>}
                  </Grid>
                </Grid>
                <Grid item>
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
