import React from 'react'
import Sidebar from '../components/layout/sidebar'
import Main from '../components/layout/main'

export default function homePage() {
  return (
    <div className='flex'>  
       <Sidebar />
       <Main />
    </div>
  )
}
