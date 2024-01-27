import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gift";
import Star from "./pages/Star";
import Memory from "./pages/memory";
import Chocolate from "./pages/Chocolate";
import Customize from "./pages/Customize";
import AdGift from "./pages/Add_Gift";
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
const Ad= () => {
  return (
    <div>
    < ProfileAdmin/>
      <SidebarAd/>
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
   <Route path="/my-account" element={
    <>
    <Ad/>
    <Sidebar/>
    </>
  }/>
   </Routes>
   </Router>
  )
}

export default App

