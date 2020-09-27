import React, { useState } from 'react';

import {SEARCH_API} from '../../keys';

const Navbar: any = () => {
    const orderBy = ['popularity', 'release_date', 'revenue', 'vote_average'];
    const [selectedOrder, setSelectedOrder] = useState('popularity')
    const orderByHandle = () => (
       orderBy.map((element, idx) => <option key={idx}>{element}</option>)
    );

    return(
    <section>
        <nav className='flex flex-row space-between align-center w-full h-16 p-4 m-4'>
            <div>
            <input className='border-2 font-semibold text-black' type='search' placeholder='Search' />
            </div>
            <div>
            <label>Order By: </label>
            <select onChange={() => orderByHandle()}>
                {selectedOrder}
            </select>
            </div>
        </nav>
    </section>
    )
};

export default Navbar;