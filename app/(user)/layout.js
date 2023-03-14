'use client'
import '../../styles/globals.css'
import StateContext from '../StateContext'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function RootLayout({ children }) {
  const [lightMode, setLightMode] = useState(false)

  // light/dark mode
  const switchDisplayMode = () => {
    setLightMode((prev) => !prev)
  }
  return (
    <html lang='en'>
      <body
        className={`${
          lightMode ? 'bg-gray-100 text-black' : '  bg-[#151516] text-white'
        } relative transform transition ease-in duration-500 overflow-hidden `}
      >
        {/* <body> */}
        <StateContext>
          <Header
            lightMode={lightMode}
            switchDisplayMode={switchDisplayMode}
          />
          {children}
          <Footer />
        </StateContext>
      </body>
    </html>
  )
}

// ${!lightMode ? 'bg-[#151516] text-white' : ' bg-white text-black '}
