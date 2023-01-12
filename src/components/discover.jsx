import React from 'react'

import videos from '../data/discover.json'

import DiscoverVideoCard from './discoverVideoCard'

export default function discover() {

  return (
    <div className='flex flex-wrap justify-start md:justify-center py-2'>
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
  )
}
