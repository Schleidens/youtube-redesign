import React from 'react'
import TrendingVideoCard from './trendingVideoCard'
import videos from '../data/trending.json'

export default function trending() {
  return (
    <div className='flex flex-wrap justify-start md:justify-start py-2'>
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
  )
}
