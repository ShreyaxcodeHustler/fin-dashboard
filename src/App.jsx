import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { useTheme } from './context/ThemeContext'


function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const { theme } = useTheme()

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
    <div className="flex h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm}  />
        <main className="flex-1 overflow-y-auto p-6">
          <Dashboard searchTerm={searchTerm}/>
        </main>
      </div>
      </div>
    </div>
  )
}

export default App