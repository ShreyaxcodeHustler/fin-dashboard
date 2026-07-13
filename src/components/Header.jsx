import { useTheme } from '../context/ThemeContext'

function Header({ searchTerm, onSearchChange }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search ticker..."
        className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-sm w-64 outline-none focus:border-neutral-600"
      />
      <div className="flex items-center gap-3 text-sm text-neutral-400">
        <span>Markets open</span>
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}

export default Header