import { Typography } from "@suid/material";
import StackRowCentered from "../elements/StackRowCentered";
import { createMemo } from "solid-js";
import { useGlobalContext } from "../global/store";

const NameHeader = () => {
  const {isMobile, scrollPosition} = useGlobalContext();
  const paddingLeft = createMemo(() => {
    return 0;
    // return Math.max(15 - Math.floor(scrollPosition() / 2), 0);
  });
  const paddingY = createMemo(() => {
    return 12;
    // return Math.max(0 - Math.floor(scrollPosition() / 2), 0);
  });

  const layers = createMemo(() => {
    const delta = scrollPosition() * 0.2;
    // const colors = [
    //   "#c78283", 
    //   "#f3d9dc", 
    //   "#46b59b",
    //   "#017e7f", 
    //   "#744253", 
    //   "#560213",
    //   "#77031b", 
    //   "#910421", 
    //   "#ffc43d"];
    const colors = [
        "#c78283", 
        "#f3d9dc", 
        "#46b59b",
        "#017e7f", 
        "#744253", 
        "#560213",
        "#77031b", 
        "#910421", 
        "#ffc43d"];
    // const delta = 3;
    const layers = colors.map((color, i) => {
      const val = Math.floor(delta * (i + 1));
      return `-${val}px -${val}px 0px ${color}`
    });
    return layers.join(", ");
  } );
    


  return (
    <StackRowCentered
      paddingLeft={paddingLeft()}
      paddingY={paddingY()}
      paddingBottom={6}>
      <Typography variant="h1" sx={{
        textShadow: layers()
      }}>Jordan Evans</Typography>

    </StackRowCentered>
  );
};

export default NameHeader;