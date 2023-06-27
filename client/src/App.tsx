import { ThemeProvider } from "@suid/material";
import { mainTheme } from "./global/theme";
import "./global/App.module.css"

import { Routes, Route } from '@solidjs/router';

import { createEffect, lazy, onMount } from "solid-js";
import { useGlobalContext } from "./global/store";

import ViewContainer from "./views/ViewContainer";
const Home = lazy(() => import("./views/Home"));

export default function App() {
  const { setIsMobile, setScrollPosition } = useGlobalContext();

  // onMount(() => loadLocalStorage());
  const PageResize = () => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900); // Set isMobile to true if screen width is less than 768px
    };
    window.addEventListener('resize', handleResize); // Add event listener for window resize
    handleResize(); // Call handleResize function on component mount to set initial value of isMobile
    return () => {
      window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
    };
  }

  const TrackScroll = () => {
    const logScroll = (e) => {
      e.preventDefault();
      window.scrollY += e.deltaY;

      setScrollPosition(window.scrollY);
    };
    // window.addEventListener('scroll', logScroll, { passive: false });
    window.addEventListener('wheel', logScroll, { passive: false })
    return () => {
      // window.removeEventListener('scroll', logScroll);
      window.removeEventListener('wheel', logScroll);
    };
  };

  createEffect(() => {
    PageResize();
    TrackScroll();
  });

  onMount(() => {
    // loadLocalStorage();
    console.log("Mounted")
    PageResize();
    TrackScroll();
  })
  return (
    <ThemeProvider theme={mainTheme}>
      <ViewContainer>
        <Routes>
          <Route path="/" component={Home} />
          {/* <Route path="/admin" component={Admin} /> */}
        </Routes>
      </ViewContainer>
    </ThemeProvider>
  );
}
