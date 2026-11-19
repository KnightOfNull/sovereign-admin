import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

function ContractorView() {
    return (
        <div className="max-w-md mx-auto p-6 bg-white min-h-screen shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Contractor Portal</h1>
            <div className="space-y-4">
                <Label htmlFor="totp">Enter TOTP Code</Label>
                <Input id="totp" placeholder="000 000"></Input>
                <Button className='w-full'>Login</Button>
            </div>

            <hr className='my-8' />

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-500 mb-4">Tap to Upload POD</div>
            <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" id="confirm" />
                <Label htmlFor="confirm">I confirm the package was delivered</Label>
            </div>
            <Button className="w-full">Submit</Button>
            <Button className="w-full mt-1" variant='destructive'>Report Dispute</Button>

            <hr className="my-8" />

            <h2>Report a Dispute</h2>
            <Textarea placeholder="Describe the issue..." />
            <Button variant="destructive" className="w-full mt-4">Submit Dispute</Button>
        </div>
    )
}

export default ContractorView;