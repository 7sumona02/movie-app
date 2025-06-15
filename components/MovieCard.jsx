'use client'
import { HeartIcon } from '@phosphor-icons/react'
import React, { useState } from 'react'

const MovieCard = ({movie}) => {
  const [isFavourite, setIsFavourite] = useState(false)

  const handleFavourite = () => {
    setIsFavourite(!isFavourite)
  }

  return (
    <div>
      <div className='relative w-full rounded-lg overflow-hidden'>
        <img className='w-full rounded-lg hover:scale-105 transition-all duration-300' src={movie.imgUrl} alt={movie.title} />
        <HeartIcon weight={isFavourite ? 'fill' : 'regular'} className='absolute top-3 right-3 w-6 h-6 text-red-600' onClick={handleFavourite}/>
      </div>
      <div className='text-lg font-semibold text-black pt-2'>{movie.title}</div>
      <div className='text-neutral-600 font-medium text-sm'>{movie.year}</div>
    </div>
  )
}

export default MovieCard