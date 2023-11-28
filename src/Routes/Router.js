import { getCookie } from "gfdu";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

function Routes() {
  return getCookie("store_new_token") ? <PrivateRouter /> : <PublicRouter />;
}

export default Routes;