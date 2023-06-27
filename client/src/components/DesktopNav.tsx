import { Grid, Stack, Typography, Divider } from "@suid/material";
import FadeText from "../elements/FadeText";
import { createSignal, onMount } from "solid-js";
import colors from "../global/colors";

const DesktopNav = () => {
  const showNavItems = Array.from({length: 5}, () => createSignal(false));
  const navItems = [
    { text: "about me", external: false, href: "" },
    { text: "work", external: false, href: "" },
    { text: "projects", external: false, href: "" },
    { text: "github", external: true, href: "" },
    { text: "linkedIn", external: true, href: "" },
  ];

  return (
    <Grid container item md={3} >
      <Stack spacing={1}>
        <Stack>
          {navItems.map((item, i) => 
              !item.external && 
              <FadeText 
                text={item.text} 
                textProps={{variant: 'h2'}} 
                show={true} 
                delay={i * 100} />
          )}
        </Stack>
        <Divider sx={{py: 2, borderColor: colors.white}}/>
        <Stack>
        {navItems.map((item, i) => 
              item.external && 
              <FadeText 
                text={item.text} 
                textProps={{variant: 'h2'}} 
                show={true} 
                delay={i * 100} />
          )}
        </Stack>
      </Stack>
    </Grid>
  )
}

export default DesktopNav;