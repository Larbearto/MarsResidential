import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
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
  }

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Create your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600 max-w'>
            Already registered?
            <a
              href='sign-up'
              className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
              Sign in
            </a>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
            <form
              onSubmit={onSubmit}
              className='mb-0 space-y-6'
              action='#'
              method='POST'>
              <div>
                <label>Email</label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className=''
                    onChange={onChange}
                    value={email}
                  />
                </div>
              </div>

              <div>
                <label>Password</label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='current-password'
                    required
                    className=''
                    onChange={onChange}
                    value={password}
                  />
                </div>
                <img
                  src={visibilityIcon}
                  alt='show password'
                  className='showPassword'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>

              <div className='flex items-center'>
                <input
                  id='terms-and-privacy'
                  name='terms-and-privacy'
                  type='checkbox'
                  className=''
                />
                <label className='ml-2 block text-sm text-gray-900'>
                  I agree to the
                  <Link
                    to='/'
                    className='text-indigo-600 hover:text-indigo-500'>
                    Terms
                  </Link>
                  and
                  <Link
                    to='/'
                    className='text-indigo-600 hover:text-indigo-500'>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
