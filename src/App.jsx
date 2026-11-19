import { LayoutDashboard, Users, Truck, Settings, Bell } from 'lucide-react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const chartData = [
  { name: 'Mon', orders: 20 },
  { name: 'Tue', orders: 30 },
  { name: 'Wed', orders: 25 },
  { name: 'Thu', orders: 35 },
  { name: 'Fri', orders: 40 },
  { name: 'Sat', orders: 50 },
  { name: 'Sun', orders: 45 }
]

function App() {
  return (
    <div className="grid h-screen grid-cols-[250px_1fr] bg-slate-50">
      <aside className='flex flex-col border-r bg-white p-4'>
        <h1 className='text-xl font-bold mb-8'>Sovereign Admin</h1>
        <nav className='flex flex-col gap-2'>
          <a href="" className="flex items-center gap-3 rounded-md p-2 text-slate-500 hover:bg-slate-100">
            <LayoutDashboard /> Dashboard
          </a>
          <a href="" className="flex items-center gap-3 rounded-md p-2 text-slate-500 hover:bg-slate-100">
            <Users /> Drivers
          </a>
          <a href="" className="flex items-center gap-3 rounded-md p-2 text-slate-500 hover:bg-slate-100">
            <Truck /> Orders
          </a>
          <a href="" className="flex items-center gap-3 rounded-md p-2 text-slate-500 hover:bg-slate-100">
            <Settings /> Settings
          </a>
        </nav>
      </aside>

      <main className='flex flex-col overflow-y-auto'>
        <header className='flex h-16 items-center justify-between border-b bg-white px-8'>
          <h1 className='text-lg font-semibold'>Admin Dashboard</h1>
          <div className='flex items-center gap-4'>
            <Bell size={20} />
            <div className='h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center text-sm font-bold'>
              GO
            </div>
          </div>
        </header>

        <div className="p-8 space-y-6">
          <h2 className='text-2xl font-bold'>Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className='text-sm text-slate-500'>Total Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-sm text-slate-500'>Active Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-sm text-slate-500'>Total GMV</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦4.2M</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-sm text-slate-500'>Pending Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦850k</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className='h-64 p-4'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Bar dataKey='orders' fill='#0f172a' radius={[4, 4, 0, 0]} />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            <Card className='h-64 flex items-center justify-center text-slate-400'>
              Table Placeholder
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;

// The End-of-Day Answer:
// Putting overflow-y-auto on the main tag locks the outer layout to the screen height and restricts scrolling strictly to the content area, keeping the sidebard fixed in place while the data table scrolls independently.