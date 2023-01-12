import React from 'react'
import TrendingVideoCard from './trendingVideoCard'
import videos from '../data/trending.json'

export default function trending() {
  return (
    <div className='flex flex-wrap justify-center py-2'>
        <div className="flex justify-start flex-wrap md:flex-nowrap">
           {
            videos.map((video, index) => (
                <TrendingVideoCard 
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
