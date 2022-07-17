import React from 'react';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import Search from 'src/domains/search/Search';

const SearchPage = () => {
  return (
    <DefaultLayout>
      <Search />
    </DefaultLayout>
  );
};

export default SearchPage;
