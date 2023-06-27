import { Accessor, Setter, createContext, useContext, createSignal } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

interface ContextProps {
  isMobile: Accessor<boolean>,
  setIsMobile: Setter<boolean>,
  prevRoute: Accessor<string>,
  setPrevRoute: Setter<string>,
  scrollPosition: Accessor<number>,
  setScrollPosition: Setter<number>,
  apiCall: Function,
  navigate: Function,
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props) {

  const navigateFunc = useNavigate();
  const location = useLocation();
  
  const [isMobile, setIsMobile]     = createSignal(false);
  const [prevRoute, setPrevRoute]   = createSignal("/");
  const [scrollPosition, setScrollPosition] = createSignal(0);

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
      scrollPosition, setScrollPosition,
      apiCall, 
      navigate
    }}>
			{props.children}
		</GlobalContext.Provider>
	);
}

export const useGlobalContext = () => useContext(GlobalContext)!;