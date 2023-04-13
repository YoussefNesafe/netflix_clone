import { useContext } from "react";
import appProps from "/context/appPropsContext";

const useAppProps = () => useContext(appProps);

export default useAppProps;
