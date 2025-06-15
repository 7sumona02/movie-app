'use client'
import MovieCard from '@/components/MovieCard'

const page = () => {
  
  const myMovies = [  
    {
      title: "Weak Hero",
      year: 2023,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Simpsons",
      year: 2023,
      imgUrl: "/assets/m1.jpg" 
    },
    {
      title: "Movie 3",
      year: 2023,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Movie 4",
      year: 2023,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Movie 5",
      year: 2023,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Movie 6",
      year: 2023,
      imgUrl: "/assets/m1.jpg"
    },
    {
      title: "Movie 7",
      year: 2023,
      imgUrl: "/assets/m1.jpg"
    },
  ];

  return (
    <div className='bg-neutral-50 h-full w-screen py-10'>
      <div className='container max-w-6xl mx-auto grid grid-cols-4 gap-4'>
       {myMovies.map((movie,index) => (
        <MovieCard movie={movie} key={index} />
       ))}
      </div>
    </div>
  )
}

export default page