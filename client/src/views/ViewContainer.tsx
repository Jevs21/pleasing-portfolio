import { Grid } from "@suid/material";
import colors from "../global/colors";
import { useGlobalContext } from "../global/store";
import NameHeader from "../components/NameHeader";
import { Show, createEffect, createSignal, onMount } from "solid-js";
import DesktopNav from "../components/DesktopNav";

const ViewContainer = (props) => {
  const { isMobile, innerScrollPos } = useGlobalContext();
  const [scrollRef, setScrollRef] = createSignal(null);
  const [headerHeight, setHeaderHeight] = createSignal(250);

  onMount(() => {
    setScrollRef(document.getElementById("content-container"));
  });

  createEffect(() => {
    const container = scrollRef();
    if (container) {
      container.scrollTop = innerScrollPos();
    }
  });

  return (
    <Grid container sx={{
      alignItems: "flex-start",
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundColor: colors.black,
    }}>
      <Grid item xs={1} lg={2}></Grid>
      <Grid item container xs={10} lg={8}>
        <Grid container item xs={12} height={headerHeight()}>
          <NameHeader />
        </Grid>

        <Show when={isMobile()} fallback={<DesktopNav />}>

        </Show>

        <Grid id={"content-container"} container item xs={12} md={7} overflow="auto">
          {props.children}
        </Grid>
      </Grid>
      <Grid item xs={1} lg={2}></Grid>
    </Grid>
  )
}

export default ViewContainer;