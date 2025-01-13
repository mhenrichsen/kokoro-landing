'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

export function ApiStatus() {
  const [isUp, setIsUp] = useState<boolean | null>(null)

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('https://api.kokorotts.com')
        setIsUp(response.ok)
      } catch (_error) {
        setIsUp(false)
      }
    }

    checkStatus()
    // Check status every 30 seconds
    const interval = setInterval(checkStatus, 30000)

    return () => clearInterval(interval)
  }, [])

  if (isUp === null) return null // Initial loading state

  return (
    <div className="flex items-center gap-1">
      {isUp ? (
        <CheckCircle className="h-4 w-4 text-green-500" />
      ) : (
        <XCircle className="h-4 w-4 text-red-500" />
      )}
      <span className="text-sm">API</span>
    </div>
  )
} 