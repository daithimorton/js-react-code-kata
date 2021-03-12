import { useEffect, useState } from "react";

export default function ({ path, children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // update our current path as the user clicks links, see: Link
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  // route is using "*" to render on all base paths
  const currentPaths = currentPath.split("/");
  const routePaths = path.split("/");

  const renderOnAllPaths = routePaths[routePaths.length - 1] === "*";
  const basePathsEqual =
    JSON.stringify(currentPaths.slice(0, routePaths.length - 1)) ===
    JSON.stringify(routePaths.slice(0, routePaths.length - 1));

  if (renderOnAllPaths && basePathsEqual) {
    return children;
  }

  return currentPath === path ? children : null;
}
