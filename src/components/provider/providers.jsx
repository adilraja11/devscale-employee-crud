'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

export const Providers = ({children}) => {
  return (
    <NextUIProvider>
        <div>{children}</div>
        <Toaster position='bottom-center'/>
    </NextUIProvider>
  )
}

