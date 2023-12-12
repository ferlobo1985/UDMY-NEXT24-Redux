'use client'
import { useSelector } from "react-redux"

export default function Home() {
  const movies =  useSelector(state=>state.movies.list)
  console.log(movies)

  return (
   <>
    Home
   </>
  )
}
