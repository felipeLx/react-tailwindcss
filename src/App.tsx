import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import './tailwind.css';
import Aux from './hoc/Aux';
import Layout from './hoc/Layout';

const queryCache = new QueryCache();

function App() {
  return (
    <Aux>
      <ReactQueryCacheProvider queryCache={queryCache}>
      <Layout />
      </ReactQueryCacheProvider>
    </Aux>
  );
}

export default App;
