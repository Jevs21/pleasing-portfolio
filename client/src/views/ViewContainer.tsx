import { Grid } from "@suid/material";
import colors from "../global/colors";
import { useGlobalContext } from "../global/store";

const ViewContainer = (props) => {
  const { isMobile } = useGlobalContext();
  return (
    <Grid container sx={{
      alignItems: "flex-start",
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundColor: colors.black,
    }}>
      <Grid item xs={1} sm={1} ></Grid>
      <Grid item container xs={10} sm={10}  >
        {props.children}
      </Grid>
      <Grid item xs={1} sm={1}  ></Grid>
    </Grid>
  )
}

export default ViewContainer;