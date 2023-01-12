import React from 'react'

import videos from '../data/discover.json'

import DiscoverVideoCard from './discoverVideoCard'

export default function discover() {

  return (
    <div className='flex flex-wrap justify-center py-2'>
        <div className="flex justify-start flex-wrap md:flex-nowrap">
        {
            videos.map((video, index)=>(
                <DiscoverVideoCard
                    key={index}
                    videoId={video.id}
                    title={video.title}
                    watch={video.watch}
                    time={video.time}
                />
            ))
        }
        </div>
    </div>
  )
}
