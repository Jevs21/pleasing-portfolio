import { Accessor, Setter, createContext, useContext, createSignal } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

interface ContextProps {
  isMobile: Accessor<boolean>,
  setIsMobile: Setter<boolean>,
  prevRoute: Accessor<string>,
  setPrevRoute: Setter<string>,
  scrollPos: Accessor<number>,
  setScrollPos: Setter<number>,
  innerScrollPos: Accessor<number>,
  setInnerScrollPos: Setter<number>,
  logScroll: Function,
  apiCall: Function,
  navigate: Function,
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props) {

  const navigateFunc = useNavigate();
  const location = useLocation();
  
  const [isMobile, setIsMobile]     = createSignal(false);
  const [prevRoute, setPrevRoute]   = createSignal("/");
  const [scrollPos, setScrollPos] = createSignal(0);
  const [innerScrollPos, setInnerScrollPos] = createSignal(0);

  const logScroll = (e) => {
    console.log(e);
    // e.preventDefault();

    if (window.scrollY > 100) {
      setInnerScrollPos(innerScrollPos() + e.deltaY);
      setScrollPos(innerScrollPos() + e.deltaY);
    } else {
      setScrollPos(window.scrollY + e.deltaY);
      window.scrollTo(0, scrollPos());
    }
  }
  
  const navigate = (params) => {
    setPrevRoute(location.pathname);
    navigateFunc(params);
  }

  const apiCall = (endpoint: string, body: object = {}) => {
    let url = `scripts/${endpoint}`;
  
    const d = {
      method: "POST",
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(body)
    }
  
    return fetch(url, d)
      .then(response => {
        if (!response.ok) {
          if (response.status == 401) { // Unauthorized
            return response.json();
          }
        }
        return response.json();
      });
  };

  
	return (
		<GlobalContext.Provider value={{ 
      isMobile, setIsMobile,
      prevRoute, setPrevRoute,
      scrollPos, setScrollPos,
      innerScrollPos, setInnerScrollPos,
      logScroll,
      apiCall, 
      navigate
    }}>
			{props.children}
		</GlobalContext.Provider>
	);
}

export const useGlobalContext = () => useContext(GlobalContext)!;