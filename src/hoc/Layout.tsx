import React from 'react';

import MoviesBuilder from '../containers/Movies/MoviesBuilder';

const Layout = () => (
    <div>
        <main className='bg-black'>
            <MoviesBuilder />
        </main>
        <footer className='bg-gray-200'></footer>
    </div>
);

export default Layout;