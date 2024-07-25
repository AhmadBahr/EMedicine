import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./components/users/Dashboard";
import Orders from "./components/users/Orders";
import Profile from "./components/users/Profile";
import Cart from "./components/users/Cart";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminOrders from "./components/admin/AdminOrders";
import CustomerList from "./components/admin/CustomerList";
import Medicine from "./components/admin/Medicine";
import MedicineDisplay from "./components/users/MedicineDisplay";

export default function RouterPage() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myorders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<MedicineDisplay />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminorders" element={<AdminOrders />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/medicine" element={<Medicine />} />
        </Routes>
    );
}
