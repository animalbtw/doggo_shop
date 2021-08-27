import Admin from "./Pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, FEED_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./Utils/consts";
import Basket from "./Pages/Basket";
import Shop from "./Pages/Shop";
import Auth from "./Pages/Auth";
import FeedPage from "./Pages/FeedPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    component: Admin
  },
  {
    path: BASKET_ROUTE,
    component: Basket
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    component: Shop
  },
  {
    path: LOGIN_ROUTE,
    component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    component: Auth
  },
  {
    path: FEED_ROUTE + '/:id',
    component: FeedPage
  }
]