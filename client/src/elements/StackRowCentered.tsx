import { Stack } from "@suid/material";

const StackRowCentered = (props) => {
  // const [ju, setJu] = createSignal(props.justifyContent | 'center');
  const style = { display: 'flex', alignItems: 'center'};
  return (
    <Stack 
      direction='row' 
      width='100%' 
      {...props}
      sx={{...style, ...props.sx}}>
      {props.children}
    </Stack>
  );
}

export default StackRowCentered;