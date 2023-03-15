import React from 'react'

import Shows from '../components/Shows'

function Account() {
  return (
    <>
    <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/8f90a0de-7e17-46e3-8f96-5241b38af33f/DZ-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />

        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
<div className='absolute top-[20%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
</div>

 </div>
<Shows />

 </>

  )
}


export default Account
