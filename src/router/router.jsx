import React, { useContext } from 'react';
import Root from '../routes/root';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signUp/SignUp';
import Profile from '../pages/profile/Profile';
import BookAService from '../pages/book-a-service/BookAService';
import AllBookings from '../pages/allBookings/AllBookings';
import PrivetRoute from '../routes/PrivetRoute';

const serverLink = 'http://localhost:5000'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: 'book-service/:id',
                element: <PrivetRoute><BookAService></BookAService></PrivetRoute>,
            },
            {
                path: 'my-bookings',
                element: <PrivetRoute><AllBookings></AllBookings></PrivetRoute>,
            },
        ]
    }
])

export default router;