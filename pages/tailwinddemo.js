import React from 'react'

function tailwinddemo() {
  return (
    <div class="flex flex-col bg-gray-100 shadow-lg   m-6 rounded ">
        <h1 class="font-bold sm:text-sky-900 m-6 md:text-sky-200 xl:text-red-200" >Login Form</h1>
        <input name="email" placeholder="email" type="email" class=" focus:bg-gray-200 px-2 m-2 border border-2 rounded" >
        </input>
        <input name="password" placeholder="password" type="password" class=" focus:bg-gray-200 px-2 m-2 border border-2 rounded">
        </input>
        <h1 class="font-bold text-sky-900 m-6">Login Form</h1>
    </div>
  )
}

export default tailwinddemo