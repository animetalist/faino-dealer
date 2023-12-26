'use client'

import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  }, [router])
  return (
    <html lang="uk">
      <body>
        <body>
          <h1
            style={{
              height: '100svh',
              display: 'grid',
              placeContent: 'center',
            }}
          >
            404 - Page Not Found
          </h1>
        </body>
      </body>
    </html>
  )
}

export default NotFound
