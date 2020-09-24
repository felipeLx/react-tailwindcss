import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import MoviesBuilder from '../containers/Movies/MoviesBuilder';

const Layout: React.FunctionComponent = () => (
    <div>
        <header>
            <div className='bg-gray-200'>
            <Navbar />
            </div>
        </header>
        <main className='bg-blue-600'>
            <MoviesBuilder />
        </main>
        <footer className='bg-gray-200'></footer>
    </div>
);

export default Layout;