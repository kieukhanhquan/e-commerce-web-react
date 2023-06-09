
import AboutUs from "../Pages/AboutUs/AboutUs";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Review from "../Pages/Review/Review";
import UserInfor from "../Pages/UserInfor/UserInfor";
import News from "../Pages/News/News";
import Home from "../Pages/Home/Home";
import Payment from "../Pages/Payment/Payment";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import Cart from "../Pages/Cart/Cart";
import StatusOrder from "../Pages/StatusOrder/StatusOrder";
import Reset from "../Pages/ForgetPassword/reset";
import Register from "../Pages/Register/Register";


export const routes = [
    {
        path: "/", component: Home, layout: MainLayout
    },
    {
        path: "/Login", component: Login, layout: MainLayout
    },
    {
        path: "/reset", component: Reset, layout: MainLayout
    },
    {
        path: "/Register", component: Register, layout: MainLayout
    },
    {
        path: "/ForgetPassword", component: ForgetPassword, layout: MainLayout
    },
    {
        path: "/AboutUs", component: AboutUs, layout: MainLayout
    },
    {
        path: "/CategoryProduct", component: CategoryProduct, layout: MainLayout
    },
    {
        path: '/ProductDetail/:id',  component: ProductDetail, layout: MainLayout
    },
    {
        path: '/Review',  component: Review, layout: MainLayout
    },
    {
        path: '/UserInfor', component: UserInfor, layout: MainLayout
    },
    {
        path: '/News', component: News, layout: MainLayout
    },
    {
        path: '/Payment', component: Payment, layout: MainLayout
    },
    {
        path: '/NewsDetail/:id', component: NewsDetail, layout: MainLayout
    },
    {
        path: '/Cart', component: Cart, layout: MainLayout
    },
    {
        path: '/StatusOrder', component: StatusOrder, layout: MainLayout
    },
    
]