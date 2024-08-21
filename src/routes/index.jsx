import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SelectorPage from '../pages/SelectorPage'
import BookingsPage from '../pages/BookingsPage'

const router = createBrowserRouter([
    {path: '/',element: <SelectorPage/>},
    {path: '/bookings/:period',element: <BookingsPage/>}
])

export default function Router() {
    return <RouterProvider router={router} />
}