import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from '../Pages/Login'
import ForgetPass from '../Pages/ForgetPass'
import PrivateRouter from "./PrivateRouter"
import ProductsPage from "../Pages/ProductsPage"
import SingleProduct from "../Pages/SingleProduct"
import PaymentsPage from "../Pages/PaymentsPage"
import CheckoutPage from "../Pages/CheckoutPage"
import AdminPage from "../Pages/AdminPage"
import PropertyListing from "../Pages/PropertyListing"
import LoaderPage from "../Pages/LoaderPage"
import SuccessPayment from "../Pages/SuccessPayment"
import OwnerPortal from "../Pages/OwnerPortal"

import MapContainer from "../Components/MapContainer"
import AddHostel from "../Components/AddHostel"

export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgetpass" element={<ForgetPass/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/singleproduct' element={<SingleProduct/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/payment' element={<PaymentsPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/map' element={<MapContainer/>}/>
            <Route path='/owner' element={<OwnerPortal/>}/>
            <Route path='/addhostel' element={<AddHostel/>}/>
            {/* <Route path='/propertylist' element={<PropertyListing/>}/> */}
            <Route path='/loader' element={<LoaderPage/>}/>
            <Route path='/paymentdone' element={<SuccessPayment/>   }/>
        </Routes>
    )
}