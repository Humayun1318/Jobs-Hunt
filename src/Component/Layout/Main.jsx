import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div className=''>

            <Header></Header>
            <div>
                {navigation.state === 'loading' && 'Loading...'}
            </div>


            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;