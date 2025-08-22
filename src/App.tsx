import { Route, Routes } from "react-router-dom"
import { Home } from "./screens/Home/Home"
import Signin from "./screens/auth/signin"
import Notifications from "./screens/Notificatins"
import { NavbarSubsection } from "./screens/Home/sections/NavbarSubsection/NavbarSubsection"
import { FooterSubsection } from "./screens/Home/sections/FooterSubsection/FooterSubsection"
import SaveSearches from "./screens/SaveSearches"
import MyFavorites from "./screens/Home/MyFavorites"
import Messages from "./screens/Messages"
import MyAds from "./screens/MyAds"
import MyProfile from "./screens/MyProfile"
import ProfileSetting from "./screens/MyProfile/ProfileSettings"
import MyAddress from "./screens/MyProfile/MyAddress"
import MyPhoneNumber from "./screens/MyProfile/MyPhoneNunber"
import MySecurity from "./screens/MyProfile/Security"
import CarDetailsPage from "./screens/CarDetailsPage"
import AdPostingForm from "./screens/PostAds/AdPostingForm"

const App = () => {
  return (
    <div >
      <NavbarSubsection/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/save-searches" element={<SaveSearches/>} />
        <Route path="/my-favorites" element={<MyFavorites/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/my-ads" element={<MyAds/>} />
        <Route path="/post-ads" element={<AdPostingForm/>} />
        <Route path="/car-detail" element={<CarDetailsPage/>} />
         <Route path="/my-profile" element={<MyProfile />}>
        <Route index element={<ProfileSetting />} />
         <Route path="address" element={<MyAddress />} />
         <Route path="phone" element={<MyPhoneNumber/>} />
        <Route path="security" element={<MySecurity />} /> 
      </Route>

      </Routes>
        <FooterSubsection />
    </div>
  )
}

export default App