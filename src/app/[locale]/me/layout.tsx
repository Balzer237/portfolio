import { AnimatePresence } from 'framer-motion'
import React from 'react'
import NavigationBar from '../../_components/navigationBar'
import Footer from '../../_components/footer'

export default function layout({
    children,
    
}:{children:React.ReactNode}) {
  return (
    
        <div>
          <div className=''>
            <NavigationBar/>
          </div>
          <AnimatePresence mode="wait">
            <div className=''>
              {children}
            </div>
          </AnimatePresence>
            
          <Footer/>
        </div>
    
  )
}
