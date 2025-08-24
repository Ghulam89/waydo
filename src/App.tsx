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
import SearchPage from "./screens/SearchPage"
import PublicProfile from "./screens/PublicProfile"
import PublicAds from "./screens/PublicProfile/PublicAds"
import PublicReviews from "./screens/PublicProfile/PublicReviews"
import Wallet from "./screens/History"
const App = () => {
  return (
    <div >
      <NavbarSubsection/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<SearchPage/>} />
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

       <Route path="/public-profile" element={<PublicProfile />}>
        <Route index element={<PublicAds />} />
         <Route path="public-reviews" element={<PublicReviews />} />
         
      </Route>

      <Route path="/wallet" element={<Wallet/>} />

      </Routes>
        <FooterSubsection />
    </div>
  )
}

export default App