'use client';
import SearchInput from '@Atoms/input/SearchInput';
import React from 'react';
import { useRatingDetailStore } from '../_store';

export default function RatingDeatilSearchInput() {
  const searchValue = useRatingDetailStore(state => state.searchValue);
  const setSearchValue = useRatingDetailStore(state => state.setSearchValue);
  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchInput
      className="w-full desktop:w-[350px]"
      onChange={onSearchInputChange}
      value={searchValue}
    />
  );
}
