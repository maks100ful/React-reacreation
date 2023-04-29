import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const {id} = useParams();
  return (
    <div>My profile {id}</div>
  )
}

export default ProfilePage