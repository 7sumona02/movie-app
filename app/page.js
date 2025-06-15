'use client'
import MovieCard from '@/components/MovieCard'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const myMovies = [  
    {
      title: "Weak Hero",
      year: 2023,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "The Simpsons",
      year: 2023,
      imgUrl: "/assets/m1.jpg" 
    },
    {
      title: "Inception",
      year: 2010,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Interstellar",
      year: 2014,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "The Dark Knight",
      year: 2008,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Fight Club",
      year: 1999,
      imgUrl: "/assets/m1.jpg"
    },
  ];

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Search function with debounce
  const handleSearch = useCallback(
    debounce((term) => {
      if (!term.trim()) {
        setFilteredMovies(myMovies);
        setIsSearching(false);
        return;
      }
      
      const filtered = myMovies.filter(movie =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredMovies(filtered);
      setIsSearching(false);
    }, 500),
    [myMovies]
  );

  // Initialize with all movies
  useEffect(() => {
    setFilteredMovies(myMovies);
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setIsSearching(true);
    handleSearch(term);
  };

  // Handle search button click
  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className='bg-neutral-50 min-h-screen py-10 pt-20'>
      <div className='container max-w-6xl mx-auto md:px-0 px-6'>
        <div className='flex items-center gap-2 pb-6'>
            <div className="relative">
              <Input className="peer ps-9 md:w-80 border border-black text-black" placeholder="Search movies here..." type="movies" value={searchTerm}
              onChange={handleInputChange} />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <SearchIcon className='text-black' size={16} aria-hidden="true" />
              </div>
            </div>

            <Button className='bg-black' onClick={handleSearchClick}>Search</Button>
        </div>

        {isSearching ? (
          <div className="flex justify-center items-center h-32">
            <p>Searching...</p>
          </div>
        ) : filteredMovies.length === 0 ? (
          <div className="flex justify-center items-center h-32">
            <p className='text-lg font-semibold text-neutral-600'>No movies found matching "{searchTerm}" 🥺</p>
          </div>
        ) : (
          <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
            {filteredMovies.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviesPage;