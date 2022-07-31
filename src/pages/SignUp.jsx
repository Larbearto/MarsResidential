import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='min-h-screen flex flex-col justify-center py-6 px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-white-900'>
            Welcome Back!!
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600 max-w'>
            Sign Up
            <br />
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md border-solid border-4 border-indigo-600 rounded-lg shadow-lg '>
          <div className='bg-white py-8 px-6 shadow sm:px-10'>
            <form
              onSubmit={onSubmit}
              className='mb-0 space-y-6'
              action='#'
              method='POST'>
              <div>
                <div className='relative block'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <input
                    id='name'
                    name='name'
                    type='name'
                    autoComplete='name'
                    required
                    className=''
                    placeholder='Name'
                    value={name}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div>
                <div className='relative block'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </span>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className=''
                    placeholder='Email'
                    value={email}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div>
                <div className='relative block'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
                    </svg>
                  </span>
                  <div>
                    <input
                      id='password'
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      autoComplete='current-password'
                      required
                      className=''
                      placeholder='Password'
                      value={password}
                      onChange={onChange}
                    />
                    <img
                      src={visibilityIcon}
                      alt='show password'
                      className='showPassword'
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  </div>
                </div>

                <div>
                  <Link to='/forgot-password' className='flex justify-end'>
                    Forgot Password
                  </Link>
                </div>
              </div>
              <div>
                <br />
                <button type='submit' className=''>
                  Sign Up
                </button>
              </div>
              <div>
                <p className='mt-2 text-center text-sm text-gray-600 max-w'>
                  Already Registered?
                  <br />
                  <Link
                    to='/sign-in'
                    className='font-large text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                    Sign In Instead
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
