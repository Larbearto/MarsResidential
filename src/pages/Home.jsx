import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/skypad1.jpg'
import sellCategoryImage from '../assets/jpg/skypad2.jpg'

function Home() {
  return (
    <div className='border-4 border-red-500 container mx-auto'>
      <header className='border-4 border-white'>
        <p className='font-sans'>Explore</p>
      </header>

      <main>
        {/* /*Slider */}

        <p className='homeCategoryHeading'>Categories</p>
        <div className='aspect-'>
          <Link to='/category/rent'>
            <img src={rentCategoryImage} alt='rent' />
            <p className='homeCategoryName'>Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='homeCategoryImg'
            />
            <p className='homeCategoryName'>Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
export default Home
