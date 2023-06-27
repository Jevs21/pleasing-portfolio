import { Divider, Grid, Stack, Typography } from "@suid/material";
import { useGlobalContext } from "../global/store";
import { Show } from "solid-js";
import DesktopNav from "../components/DesktopNav";
import StackRowCentered from "../elements/StackRowCentered";
import NameHeader from "../components/NameHeader";

const Home = () => {
  const { isMobile } = useGlobalContext();
  return (
    <>
      <NameHeader />


      <Show when={isMobile()} fallback={<DesktopNav />}>

      </Show>

      <Grid container item xs={12} md={7} >
        <Stack>
          <Typography variant="body1">
            I'm a full-stack developer with a specialty in human-computer interaction. 
            I love to build beautiful, functional, and accessible products.

          </Typography>
          {[...Array(10)].map((e, i) => {
            return (
              <StackRowCentered key={i} paddingBottom={10}>
                <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Typography>
              </StackRowCentered>
              )
            })}
          </Stack>
        </Grid>
    </>
  );
}

export default Home;