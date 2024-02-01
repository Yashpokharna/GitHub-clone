import React from 'react'
// import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CircleIcon from '@mui/icons-material/Circle';

const Rightbar = () => {
  return (
    <div >
      <div className='mt-5 mr-3 border rounded p-5 text-sm font-semibold items-start flex justify-start flex-col'>
        Latest changes
        <ul>
          <li className=' list-disc ml-4 items-start mt-3 text-gray-300'>
            <div className='text-xs text-gray-500 font-normal flex justify-start ml-2'>2 days ago</div>
            <div className='font-normal flex items-start text-left ml-2 text-black hover:text-blue-500 hover:underline cursor-pointer'> Code faster and better with GitHub Copilot’s new features in Visual Studio </div>
          </li>
          <li className=' list-disc ml-4 items-start mt-3 text-gray-300'>
            <div className='text-xs text-gray-500 font-normal flex justify-start ml-2'>2 days ago</div>
            <div className='font-normal flex items-start text-left ml-2 text-black  hover:text-blue-500 hover:underline cursor-pointer'> GitHub Actions: macOS 14 (Sonoma) is now available </div>
          </li>
          <li className=' list-disc ml-4 items-start mt-3 text-gray-300'>
            <div className='text-xs text-gray-500 font-normal flex justify-start ml-2'>2 days ago</div>
            <div className='font-normal flex items-start text-left ml-2 text-black  hover:text-blue-500 hover:underline cursor-pointer'> GitHub Actions: Introducing the new M1 macOS runner available to open source!</div>
          </li>
          <li className=' list-disc ml-4 items-start mt-3 text-gray-300'>
            <div className='text-xs text-gray-500 font-normal flex justify-start ml-2'>2 days ago</div>
            <div className='font-normal flex items-start text-left ml-2 text-black  hover:text-blue-500 hover:underline cursor-pointer'> CodeQL 2.16.1: Swift 5.9.2 Support, New Queries, and Scanned-File Count Changes
            </div>
          </li>
        </ul>
        <div className='text-xs text-gray-500 font-normal mt-3 ml-6 hover:text-blue-500 cursor-pointer'>
          View changelog →
        </div>
      </div>
      <div className='border rounded mt-5 mr-3 '>
        <div className='p-5'>
          <h2 className='text-sm font-semibold  text-left'>Explore reprositories</h2>
          <div className='flex justify-between'>
            <div className='flex mt-4 items-center'>
              <img src="https://avatars.githubusercontent.com/u/1116469?s=40&v=4" alt="" className='w-4' />
              <p className='ml-2 text-sm font-semibold'>CESNET / libyang-python </p>
            </div>
            <div className='mt-5 border w-12 h-8 rounded-md items-center bg-slate-50 text-gray-500'>
              <StarBorderIcon />
            </div>
          </div>
          <p className='text-xs text-left text-gray-500 mt-2'>Python bindings for the libyang library</p>
          <div className='flex items-center text-gray-500 text-xs mt-3 '>
            <div className='flex items-center'>
              <StarBorderIcon />
              <p className='text-gray-600 ml-1'>57</p>
            </div>
            <div className=' text-blue-700 text-xs ml-10 flex items-center'>
              <CircleIcon />
              <p className='text-gray-600 ml-1'>Python</p>
            </div>
          </div>
        </div>
        <div className='mt-3 mr-3 p-5 border-t-2 ml-2'>
          <h2 className='text-sm font-semibold  text-left'>Explore reprositories</h2>
          <div className='flex justify-between'>
            <div className='flex mt-4 items-center'>
              <img src="https://avatars.githubusercontent.com/u/1116469?s=40&v=4" alt="" className='w-4' />
              <p className='ml-2 text-sm font-semibold'>CESNET / libyang-python </p>
            </div>
            <div className='mt-5 border w-12 h-8 rounded-md items-center bg-slate-50 text-gray-500'>
              <StarBorderIcon />
            </div>
          </div>
          <p className='text-xs text-left text-gray-500 mt-2'>Python bindings for the libyang library</p>
          <div className='flex items-center text-gray-500 text-xs mt-3 '>
            <div className='flex items-center'>
              <StarBorderIcon />
              <p className='text-gray-600 ml-1'>57</p>
            </div>
            <div className=' text-blue-700 text-xs ml-10 flex items-center'>
              <CircleIcon />
              <p className='text-gray-600 ml-1'>Python</p>
            </div>
          </div>
        </div>
        <div className='mt-3 mr-3 p-5 border-t-2 ml-2'>
          <h2 className='text-sm font-semibold  text-left'>Explore reprositories</h2>
          <div className='flex justify-between'>
            <div className='flex mt-4 items-center'>
              <img src="https://avatars.githubusercontent.com/u/1116469?s=40&v=4" alt="" className='w-4' />
              <p className='ml-2 text-sm font-semibold'>CESNET / libyang-python </p>
            </div>
            <div className='mt-5 border w-12 h-8 rounded-md items-center bg-slate-50 text-gray-500'>
              <StarBorderIcon />
            </div>
          </div>
          <p className='text-xs text-left text-gray-500 mt-2'>Python bindings for the libyang library</p>
          <div className='flex items-center text-gray-500 text-xs mt-3 '>
            <div className='flex items-center'>
              <StarBorderIcon />
              <p className='text-gray-600 ml-1'>57</p>
            </div>
            <div className=' text-blue-700 text-xs ml-10 flex items-center'>
              <CircleIcon />
              <p className='text-gray-600 ml-1'>Python</p>
            </div>
          </div>
        </div>
        <div className='mt-3 mr-3 p-5 border-t-2 ml-2'>
          <h2 className='text-sm font-semibold  text-left'>Explore reprositories</h2>
          <div className='flex justify-between'>
            <div className='flex mt-4 items-center'>
              <img src="https://avatars.githubusercontent.com/u/1116469?s=40&v=4" alt="" className='w-4' />
              <p className='ml-2 text-sm font-semibold'>CESNET / libyang-python </p>
            </div>
            <div className='mt-5 border w-12 h-8 rounded-md items-center bg-slate-50 text-gray-500'>
              <StarBorderIcon />
            </div>
          </div>
          <p className='text-xs text-left text-gray-500 mt-2'>Python bindings for the libyang library</p>
          <div className='flex items-center text-gray-500 text-xs mt-3 '>
            <div className='flex items-center'>
              <StarBorderIcon />
              <p className='text-gray-600 ml-1'>57</p>
            </div>
            <div className=' text-blue-700 text-xs ml-10 flex items-center'>
              <CircleIcon />
              <p className='text-gray-600 ml-1'>Python</p>
            </div>
          </div>
          <p className='text-sm text-blue-500 text-left cursor-pointer hover:underline mt-3'>Explore more →</p>
        </div>
      </div>
    </div>
  )
}

export default Rightbar