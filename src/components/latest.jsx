import React from 'react'
import VideoCard from './videoCard'
import videos from '../data/latest.json'

export default function latest() {
  return (
    <div className='flex flex-wrap justify-center py-2'>
        <div className="flex justify-start flex-wrap md:flex-nowrap">
           {
            videos.map((video, index) => (
              <VideoCard
                key={index}
                videoId={video.id}
                title={video.title}
                watch={video.watch}
                time={video.time}
                channelName={video.name}
            />
            ))
           }
        </div>
    </div>
  )
}
