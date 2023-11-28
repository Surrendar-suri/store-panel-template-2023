import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageRoutes from "./PageRoutes";
let leftSideBarType = "default";
function PrivateRouter() {
  const dispatch = useDispatch();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const updateState = (actionType, value) => dispatch => {
      dispatch({type : actionType, payload : value});
      return Promise.resolve();
  };
  const {layout} = useSelector((state)=>state);
  useEffect(() => {
    changeBodyAttribute("data-sidebar", layout.leftSideBarTheme);
    changeBodyAttribute("data-topbar", layout.topbarTheme);
    changeBodyAttribute("data-layout-mode", layout.layoutModeType);
  },[]);
  const changeBodyAttribute = (attribute, value) => {
    if (document.body) document.body.setAttribute(attribute, value);
    return true
  }
  const toggleMenuCallback = () => {
      if (leftSideBarType === "default") {
          dispatch(updateState("leftSidebar",{"condensed":isMobile}));
      } else if (leftSideBarType === "condensed") {
          dispatch(updateState("leftSidebar",{"default":isMobile}));
      }
  };

  return (
    <>
        <Header toggleMenuCallback={toggleMenuCallback} />
        <Sidebar theme={"dark"} type={"default"} isMobile={isMobile} />
        <PageRoutes />
    </>
  );
}

export default PrivateRouter;
