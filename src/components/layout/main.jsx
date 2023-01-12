import React from 'react'
import Navbar from './navbar'
import Content from './content'

export default function main() {
  return (
    <div className='sm:ml-14 ml-0 w-full'>
        <Navbar />
        <Content />
    </div>
  )
}
