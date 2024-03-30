import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const [data, setFollowers] = useState(0)

  useEffect(() => {
    fetch('https://api.github.com/users/asadityasonu')
    .then(res => res.json())
    .then((data) => {setFollowers(data)})
  },[])

  // const data = useLoaderData()
  // console.log(data)

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
  )
}

export default Github;

// export const githubInfoLoader = async () => {
//   const res = await fetch('https://api.github.com/users/asadityasonu')
//   const data = await res.json()
//   return data
// }