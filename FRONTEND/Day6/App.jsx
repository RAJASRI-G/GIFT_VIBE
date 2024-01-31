import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Display from "./crud/Display";
import Create from "./crud/Create";
import Edit from "./crud/Edit";
import Theme from "./Theme/Display";
import CreateTheme from "./Theme/Create";
import EditTheme from "./Theme/Edit";
import Gif from "./pages/Gift";
import Star from "./pages/Star";
import Memory from "./pages/memory";
import Chocolate from "./pages/Chocolate";
import Cart from "./pages/Cart";
import Customize from "./pages/Customize";
import AdGift from "./pages/Add_Gift";
import Order from "./pages/Order";
import Parent from "./pages/Show_details";
import Pro from "./pages/Profile";
import First from "./pages/first";
import ProfileAdmin from "./pages/ProfileAdmin";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SidebarAd from "./components/Sidebar_admin";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
const User = () => {
  return (
    <div>
    <Gift />
      <Sidebar />
    </div>
  );
};
const Admin = () => {
  return (
    <div>
      <SidebarAd />
      <Gift />
    </div>
  );
};
const Profile = () => {
  return (
    <div>
    < Pro/>
      <Sidebar />
    </div>
  );
};
const Gift= () => {
  return (
    <div>
    < Gif/>
      <Sidebar />
    </div>
  );
};
function App() {
  return (
   <Router>
   <Routes>
   <Route path="/home" element={<Home/>}/>
   <Route path="/" element={
   <>
   <Navbar/>
   <First/>
   <Signup/>
   </>}
   />
   <Route path="/about" element={<About/>}/>
   <Route path="/signup" element={
    <div>
    <Navbar/>
    <First/>
    <Signup/>
    </div>
  }/>
   <Route path="/signin" element={
    <div>
    <Navbar/>
    <First/>
    <Signin/>
    </div>
  }/>
  <Route path="/profileAd" element={
   <div>
   <ProfileAdmin/>
   <SidebarAd/>
   </div>
 }/>
  <Route path="/order" element={
   <div>
   <Order/>
   <SidebarAd/>
   </div>
 }/>
   <Route path="/display" element={
    <div>
    <Display/>
    <SidebarAd/>
    </div>
  }/>
   <Route path="/create" element={
    <div>
    <Create/>
    <Sidebar/>
    </div>
  }/>
   <Route path="/edit" element={
    <div>
    <Edit/>
    <Sidebar/>
    </div>
  }/>
   <Route path="/theme" element={
    <div>
    <Theme/>
    <SidebarAd/>
    </div>
  }/>
   <Route path="/createtheme" element={
    <div>
    <CreateTheme/>
    <Sidebar/>
    </div>
  }/>
   <Route path="/edittheme" element={
    <div>
    <EditTheme/>
    <Sidebar/>
    </div>
  }/>

   <Route path="/user" element={<User/>}/>
   <Route path="/gift" element={<Gift/>}/>
   <Route path="/star" element={
    <>
  <Star/>
    <Sidebar/>
    </>
  }/>
   <Route path="/memory" element={
    <>
  <Memory/>
    <Sidebar/>
    </>
  }/>
   <Route path="/choco" element={
    <>
  <Chocolate/>
    <Sidebar/>
    </>
  }/>
   <Route path="/cust" element={
    <>
  <Customize/>
    <Sidebar/>
    </>
  }/>
   <Route path="/cart" element={
    <>
  <Cart/>
    <Sidebar/>
    </>
  }/>
   <Route path="/profile" element={
    <>
    <Profile/>
    <Sidebar/>
    </>
  }/>
   <Route path="/orders" element={
    <>
    <AdGift/>
    <Sidebar/>
    </>
  }/>
   <Route path="/show-details" element={
    <>
    <Parent/>
    <Sidebar/>
    </>
  }/>
   <Route path="/admin" element={
    <>
    <Admin/>
    <Sidebar/>
    </>
  }/>
   </Routes>
   </Router>
  )
}

export default App

