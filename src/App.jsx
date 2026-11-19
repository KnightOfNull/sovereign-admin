import { LayoutDashboard, Users, Truck, Settings, Bell } from 'lucide-react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ContractorView from '@/components/ContractorView'

const chartData = [
  { name: 'Mon', orders: 20 },
  { name: 'Tue', orders: 30 },
  { name: 'Wed', orders: 25 },
  { name: 'Thu', orders: 35 },
  { name: 'Fri', orders: 40 },
  { name: 'Sat', orders: 50 },
  { name: 'Sun', orders: 45 }
]

const recentOrders = [
  { id: '#1001', driver: 'Emeka', route: ' Lagos to Ibadan ', plate: 'KJA-123-XY' },
  { id: '#1002', driver: 'Chinedu', route: ' Abuja to Kaduna ', plate: 'KJA-456-ZY' },
  { id: '#1003', driver: 'Aisha', route: ' Kano to Sokoto ', plate: 'KJA-789-AB' },
  { id: '#1004', driver: 'Tunde', route: ' Port Harcourt to Warri ', plate: 'KJA-321-CD' },
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

      {/* Admin Dashboard */}

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
            <Card className='h-64 p-4 overflow-y-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Plate No.</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map(order => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.driver}</TableCell>
                      <TableCell>{order.route}</TableCell>
                      <TableCell>{order.plate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

          </div>
        </div>
      </main>

      {/* Contractor View */}
      {/* <ContractorView /> */}
    </div>
  )
}

export default App;

// The End-of-Day Answer:
// React uses the unique key prop to track each element's identity across renders during its diffing (reconciliation) process.
// When your data changes—such as when an order is deleted, added, or reordered—React compares the new list of elements with the previous one to figure out the minimum number of changes needed on the real screen (the DOM).