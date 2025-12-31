import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Allbooks from "./components/Allbooks.jsx"
import Book from "./components/Book.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import AuthLayout from "./AuthLayout.jsx"
import Cart from "./components/Cart.jsx"
import Home from "./components/Home.jsx"
import AdminLayout from "./AdminLayout.jsx"
import AddBook from "./admin/Addbook.jsx"
import BookList from "./admin/BookList.jsx"

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Allbooks />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin" element={<AddBook />} />
        <Route path="/admin/allbooks" element={<BookList />} />
      </Route>
    </Routes>
  </BrowserRouter>

)
