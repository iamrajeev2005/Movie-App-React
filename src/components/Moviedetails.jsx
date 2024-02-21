import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncSetMovies } from '../store/actions/movieAction'
import { useParams } from 'react-router-dom'

function Moviedetails() {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncSetMovies(id))
  },[])
  return (
    <div>Moviedetails</div>
  )
}

export default Moviedetails