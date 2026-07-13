import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App