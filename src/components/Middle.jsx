import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import RepoCard from './utils/RepoCard';

const Middle = () => {
    return (
        <div className='m-5 w-2/3'>
            <div className='flex justify-between '>
                <div className=' font-semibold text-xl'>
                    Home
                </div>
                <div className='flex items-center'>
                    <div className='text-blue-600 text-sm hover:underline cursor-pointer'>
                        Send feedback
                    </div>
                    <div className='ml-5 flex border rounded w-24 items-center justify-center bg-slate-100 font-medium  '>
                        <div className='text-gray-500 text-sm mr-2'>
                            <FilterListIcon />
                        </div>
                        Filter
                    </div>
                </div>
            </div>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
        </div>
    )
}

export default Middle