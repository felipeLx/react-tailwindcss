import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import MoviesBuilder from '../containers/Movies/MoviesBuilder';

const Layout: React.FunctionComponent = () => (
    <div>
        <header className='bg-gray-200'>
            <Navbar />
        </header>
        <main className='bg-black'>
            <MoviesBuilder />
        </main>
        <footer className='bg-gray-200'></footer>
    </div>
);

export default Layout;