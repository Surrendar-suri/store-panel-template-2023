import { Navigate, Route, Routes} from "react-router-dom";
import Login from "../views/Login/login";

function PublicRouter() {
    return (
    <Routes>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/*" element={<Navigate to="/signin" />} />
    </Routes>
    
    );
  }

export default PublicRouter;
