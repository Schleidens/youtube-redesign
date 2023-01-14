import React from 'react'
import { AiOutlineFire } from 'react-icons/ai'

export default function trendingVideoCard({videoId, title, watch, time, channelName}) {
  return (
    <div className='mr-2.5 pb-4 hover:scale-125 ease-in duration-300  hover:bg-neutral-800 hover:rounded-md'>
    <div>
    <img 
    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
     alt={title}
     className='h-auto w-full max-w-[full] md:max-w-[230px] rounded-md'
    />
    <img 
        src="https://avatars.githubusercontent.com/u/53914451?v=4"
        alt="" 
        className="rounded-full relative h-5 bottom-6 left-1" />
    </div>
   
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
