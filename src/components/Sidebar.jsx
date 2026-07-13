import { useRef, useState, useCallback } from 'react'

function Sidebar() {
  const navItems = ['Overview', 'Watchlist', 'Markets', 'News', 'Portfolio']

  const [width, setWidth] = useState(224) // starting width in px
  const isDragging = useRef(false)
  const sidebarRef = useRef(null)

  const handlePointerDown = (e) => {
    isDragging.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none' // stop text selection while dragging
  }

  const handlePointerMove = useCallback((e) => {
    if (!isDragging.current) return
    const newWidth = Math.min(Math.max(e.clientX, 160), 400) // clamp between 160-400px
    setWidth(newWidth)
  }, [])

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
  }, [])

  return (
    <aside
      ref={sidebarRef}
      style={{ width: `${width}px` }}
      className="relative bg-neutral-900 border-r border-neutral-800 p-4 flex flex-col gap-1 shrink-0"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="text-xl font-bold mb-6 px-2">FinDash</div>
      {navItems.map((item) => (
        <button
          key={item}
          className="text-left px-3 py-2 rounded-lg hover:bg-neutral-800 text-sm text-neutral-300"
        >
          {item}
        </button>
      ))}

      <div
        onPointerDown={handlePointerDown}
        className="absolute top-0 right-0 h-full w-1 cursor-col-resize hover:bg-blue-500/50 active:bg-blue-500"
      />
    </aside>
  )
}

export default Sidebar

//{item} Inserts the current array value into the JSX