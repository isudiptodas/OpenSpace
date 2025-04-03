import React, { useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const NavBar: React.FC<{
  tabs: string[]
  selectedTab: string
  onTabChange: (tab: string) => void
  className?: string
}> = ({ tabs, selectedTab, onTabChange, className }) => {
  const fired = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentLink, setCurrentLink] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0
  })

  useLayoutEffect(() => {
    const selectedIndex = tabs.indexOf(selectedTab)
    const selectedButton = document.getElementById(`uuu-btn-${selectedIndex}`)

    if (selectedButton) {
      setCurrentLink({
        left: selectedButton.offsetLeft,
        width: selectedButton.getBoundingClientRect().width
      })
    }
  }, [selectedTab, tabs])

  return (
    <div
      ref={containerRef}
      className={twMerge(
        'relative border dark:border-neutral-800 border-neutral-300 rounded-full flex gap-5 items-center justify-center backdrop-blur-2xl',
        className
      )}
    >
      {tabs.map((link, i) => (
        <button
          key={i}
          id={`uuu-btn-${i}`}
          onClick={() => {
            fired.current = true
            onTabChange(link)
          }}
          className={twMerge(
            'transition-colors capitalize duration-200 flex cursor-pointer px-10 items-center justify-center rounded-full h-fit py-2 text-nowrap',
            selectedTab === link
              ? 'dark:text-neutral-900 text-white' // Selected tab text color
              : '',
            i === tabs.indexOf(selectedTab) // Apply background immediately on load
              ? 'dark:bg-white bg-neutral-950'
              : ''
          )}
        >
          {link}
        </button>
      ))}
      <div className="absolute inset-0 h-full p-2 -z-[1] overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          <div
            style={{
              left: `calc(${currentLink.left}px - 0.75rem + 0.25rem)`,
              width: `${currentLink.width}px`
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
              fired.current ? 'dark:bg-white bg-neutral-950' : 'dark:bg-white bg-neutral-950' // Apply background on first load
            )}
          />
        </div>
      </div>
    </div>
  )
}
