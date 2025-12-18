
import useAuth from "../../hooks/useAuth";
import LoadingScreen from "./LoadingScreen";

const GlobalLoader = ({ children }) => {
  const { loading,tokenReady } = useAuth()

  if (loading && !tokenReady) {
    return <LoadingScreen />;
  }

  return children;
};

export default GlobalLoader;
