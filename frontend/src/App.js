import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import {Signup} from './pages/Signup';
import AdminLogin from './pages/AdminLogin';
import Header from './pages/Header'
import Footer from './pages/footer'
import AdminDashboard from './pages/AdminDashboard';
import StationList from './pages/StationList';
import BookBike from './pages/BookBike';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header username={"meet nepali"} />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/station" element={<StationList />} />
            <Route path="/station/:id" element={<BookBike />} />
           </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
