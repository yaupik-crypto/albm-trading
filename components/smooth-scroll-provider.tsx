"use client"

import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Handle anchor link clicks for smoother scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return <>{children}</>
}
