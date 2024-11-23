"use client"
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar = ({ 
  placeholder = "Search for products...",
  onSearch = () => {} 
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleClear = () => {
    setSearchValue('');
    onSearch('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 size-5 text-gray-500" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          className="pl-8 pr-8"
        />
        {searchValue && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1 h-7 w-7 p-0 hover:bg-transparent"
            onClick={handleClear}
          >
            <X className="size-4 text-gray-500" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;