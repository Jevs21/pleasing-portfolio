import { Stack, Typography } from "@suid/material";
import { useGlobalContext } from "../global/store";
import StackRowCentered from "../elements/StackRowCentered";

const Home = () => {
  const { isMobile } = useGlobalContext();

  return (
    <>
      <Stack>
        <Typography variant="body1">
          I'm a full-stack developer with a specialty in human-computer interaction. 
        </Typography>
        <Typography variant="body1">
          I love to build beautiful, functional, and accessible products.
        </Typography>
        <Typography variant="body1">
          I've recently began writing about my continued research into an immersive sports experiences for users with visual impairments.
        </Typography>
        {[...Array(10)].map((e, i) => {
          return (
            <StackRowCentered key={i} paddingBottom={10}>
              <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Typography>
            </StackRowCentered>
            )
          })}
        </Stack>
    </>
  );
}

export default Home;