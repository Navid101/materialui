import { Grid } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

// const useStyles = makeStyles(()=>({
  
//   container:{
//     display: "flex",
//     alignItems:"center",
//     justifyContent:"center",
//     flexDirection:"column"
//   }
// }))

function App() {
  // const classes = useStyles()
  return (
    <div >
      <Navbar></Navbar>
      <Grid container>
        <Grid item sm={2}>
          <Leftbar></Leftbar>
        </Grid>
        <Grid item sm={7}>
          <Feed></Feed>
        </Grid>
        <Grid item sm={3}>
          <Rightbar></Rightbar>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
