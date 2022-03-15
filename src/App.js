import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

const useStyles = makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div >
      <Navbar></Navbar>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar></Leftbar>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed></Feed>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar></Rightbar>
        </Grid>
      </Grid>
      <Add></Add>
    </div>
  );
}

export default App;
