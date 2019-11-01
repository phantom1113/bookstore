import React from 'react';
import Banner from '../components/Banner';
import ProductsList from '../components/ProductsList';
import ProductDetail from '../components/ProductDetail';
import ProductsCategory from '../components/ProductsCategory';
import Cart from '../components/Cart';
import Login from '../components/Login';
import RegisterModal from '../components/Register';
import UserDetail from  '../components/UserDetail';
import Checkout from '../components/Checkout';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => {
            return (
                <div>
                    <Banner />
                    <ProductsList/>
                </div>
            )
        }
    },
    {
        path: '/category/:id',
        exact: true,
        main: ({match}) => {
            return (
                <ProductsCategory match={match}/>

            )
        }
    },
    {
        path: '/detail/:id',
        exact: true,
        main: ({match,history}) => {
            return (
                <div>
                    <ProductDetail match={match} history={history}/>
                </div>
            )
        }
    },
    {
        path: '/cart',
        exact: true,
        main: () => {
            return (
                <div style={{marginBottom:"10%"}}>
                    <Cart />
                </div>
            )
        }
    },
    {
        path: '/login',
        exact: true,
        main: ({match,history}) => {
            return (
                <div>
                    <Login match={match} history={history}/>
                </div>
            )
        }
    },
    {
        path: '/register',
        exact: true,
        main: ({match,history}) => {
            return (
                <div>
                    <RegisterModal match={match} history={history}/>
                </div>
            )
        },
    },
    {
        path: '/user',
        exact: true,
        main: ({history}) => {
            return (
                <div>
                    <UserDetail history={history}/>
                </div>
            )
        }
    },
        {
        path: '/cart/checkout',
        exact: true,
        main: ({history}) => {
            return (
                <div>
                    <Checkout history={history}/>
                </div>
            )
        }
    }
];

export default routes;