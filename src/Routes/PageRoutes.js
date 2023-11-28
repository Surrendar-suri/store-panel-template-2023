import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";

import MerchantList from "../views/Business/MerchantStore";
import AddMerchant from "../views/Business/MerchantStore/AddMerchant";
import EditMerchant from "../views/Business/MerchantStore/EditMerchant";
import MerchantDetails from "../views/Business/MerchantStore/ViewMerchant";
import Login from "../views/Login/login";

function PageRoutes() {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/*" exact element={<MerchantList />} />
          <Route path="/storemerchant/add" element={<AddMerchant />} />
          <Route path="/storemerchant/edit" element={<EditMerchant />} />
          <Route path="/storemerchant/details" element={<MerchantDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default PageRoutes;
