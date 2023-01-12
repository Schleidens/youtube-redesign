import React from 'react'
import { AiOutlineFire } from 'react-icons/ai'

export default function trendingVideoCard({videoId, title, watch, time, channelName}) {
  return (
    <div className='pr-2.5 py-2'>
    <img 
    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
     alt={title}
     className='h-auto w-full max-w-[full] md:max-w-[230px] rounded-md'
    />
   
    <div className="flex flex-col px-2 mt-1">
        <div className="flex justify-between text-xs text-gray-400">
            <span className='flex'>
               <AiOutlineFire className='text-base mr-1 text-red-600'/> {watch} views
            </span>
            <span>
                {time} days ago
            </span>
        </div>
        
        <div className='font-bold'>
         {title}
        </div>

        <div className="text-gray-400">
            {channelName}
        </div>
    </div>
</div>
  )
}
