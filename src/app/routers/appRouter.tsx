import {
    createHashRouter,
    createRoutesFromElements,
    Link,
    Route,
    RouterProvider,
} from 'react-router-dom'
import clsx from 'clsx'
import { HomePage } from 'pages/homePage'

import '../styles/index.scss'

export const AppRouter = () => {
    const routers = createRoutesFromElements(
        <Route path='/' handle={{ crumb: <Link to='/'>Home</Link> }}>
            <Route index element={<HomePage />} />
            {/* <Route
                path='books'
                handle={{
                    crumb: <Link to='/books'>Books</Link>,
                }}>
                <Route index element={<Categories />} />
            </Route>

            <Route
                path='cart'
                element={<Cart />}
                handle={{
                    crumb: <Link to='/cart'>Cart</Link>,
                }}
            />
            <Route path='/search/:searchLine' element={<SearchResults />} /> */}
        </Route>
    )

    const router = createHashRouter(routers, {})

    return (
        <div className={clsx('app')}>
            <RouterProvider router={router} />
        </div>
    )
}
