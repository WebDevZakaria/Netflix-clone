import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AutContext'



function Login() {


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const history = useNavigate()

    const {user, logIn }  = UserAuth();


    const handleSubmitHandler = async (e) =>{
        e.preventDefault()
        setError('')

        try{

            await logIn(email,password)
            history('/')

        }catch(error){
            console.log(error)
            setError(error.message)
        }
    }



  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/8f90a0de-7e17-46e3-8f96-5241b38af33f/DZ-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full  h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[580px] mx-auto bg-black/75 text-white'>

                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold text-center text-red-700'>Sign In</h1>
                    {error ? <p className='p-3 border-r-red-500'>{error}</p>: null}
                    <form onSubmit={handleSubmitHandler} className='w-full flex flex-col py-4 mt-10'>
                        <input onChange={(e) => setEmail(e.target.value)}  className='p-3 my-3 bg-gray-700 rounded-lg' type='email' placeholder='Email' autoComplete='email'/>
                        <input onChange={(e) => setPassword(e.target.value)}  className='p-3 my-3 bg-gray-700 rounded-lg mt-10'type='password' placeholder='Passowrd' autoComplete='xurrent-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold '>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input type='checkbox' /> Remember Me </p>
                        <p>Need Help ?</p>
                        </div>
                        <p className='py-8'
                        ><span className=' text-gray-500 pr-8'>New to Netflix ?  </span> {' '}
                        <Link to='/signup'>
                        Sign Up
                        </Link>
                        </p>

                    </form>

                </div>

            </div>

        </div>
      
    </div>
    </>
     
  )
}

export default Login
