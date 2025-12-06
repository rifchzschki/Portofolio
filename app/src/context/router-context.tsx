import { createContext, useContext, useEffect, useState } from "react";

interface RouterState {
  pathname: string;
}

const RouterContext = createContext<RouterState>({ pathname: "/" });

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    const update = () => setPathname(window.location.pathname);

    update(); // run once on mount

    // Support Astro View Transitions
    window.addEventListener("astro:after-swap", update);
    return () => window.removeEventListener("astro:after-swap", update);
  }, []);

  return (
    <RouterContext.Provider value={{ pathname }}>
      {children}
    </RouterContext.Provider>
  );
}

export function usePathname() {
  return useContext(RouterContext).pathname;
}
