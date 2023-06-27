import { Fade, Typography } from "@suid/material"
import { createEffect, createSignal } from "solid-js";

interface FadeTextProps {
  text: string;
  textProps?: any;
  show: boolean;
  delay?: number;
}

const FadeText = ({text, textProps, show, delay}: FadeTextProps) => {
  const [showText, setShowText] = createSignal(false);
  createEffect(() => {
    if (show) {
      setTimeout(() => {
        setShowText(true);
      }, delay || 0);
    }
  });

  return (
    <Fade in={showText()}>
      <Typography {...textProps}>{text}</Typography>
    </Fade>
  );
}

export default FadeText;