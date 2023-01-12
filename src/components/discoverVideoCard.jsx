import React from 'react'
import { BsPeople } from 'react-icons/bs'


export default function discoverVideoCard({videoId, title, watch, time}) {
  return (
    <div className='mr-2.5 pb-4 hover:scale-125 ease-in duration-300  hover:bg-neutral-800 hover:rounded-md'>
                    <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                     alt={title}
                     className='h-auto w-full max-w-[full] md:max-w-[290px] rounded-md'
                    />
                   
                    <div className="flex flex-col px-2 mt-1">
                        <div className="flex justify-between text-xs text-gray-400">
                            <span className='flex'>
                               <BsPeople className='text-base mr-1 text-red-600'/> {watch} watching now
                            </span>
                            <span>
                                {time} hour ago
                            </span>
                        </div>
                        
                        <span className='font-bold'>
                         {title}
                        </span>
                    </div>
                </div>
  )
}
