import { useState } from 'react'
import { Download, Search, UserPlus } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Person, Progress } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { students } from '../data'

const feeTone = { Paid: 'green', Due: 'amber', Overdue: 'red' }

export default function Students() {
  const { openContact } = useContact()
  const [q, setQ] = useState('')
  const rows = students.filter((s) => `${s.name} ${s.adm} ${s.parent}`.toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <PageHeader title="Students" subtitle="Admissions, profiles, guardians and records."
        actions={<>
          <button onClick={() => openContact('Export Student Data')} className="btn-ghost"><Download className="h-4 w-4" /> Export</button>
          <button onClick={() => openContact('Online Admission Form')} className="btn-primary"><UserPlus className="h-4 w-4" /> New admission</button>
        </>} />
      <Card bodyClass="">
        <div className="border-b border-slate-100 p-4">
          <div className="relative max-w-sm"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, admission no., parent" className="input pl-9" /></div>
        </div>
        <DataTable
          rows={rows}
          onRowClick={(s) => openContact(`${s.name} – full student profile`)}
          columns={[
            { key: 'name', label: 'Student', render: (s) => <Person name={s.name} sub={s.adm} /> },
            { key: 'cls', label: 'Class' },
            { key: 'parent', label: 'Guardian', render: (s) => <div><p className="text-slate-700">{s.parent}</p><p className="text-xs text-slate-400">{s.phone}</p></div> },
            { key: 'att', label: 'Attendance', render: (s) => <div className="w-28"><p className="mb-1 text-xs font-semibold text-slate-600">{s.att}%</p><Progress value={s.att} tone={s.att < 85 ? 'red' : s.att < 92 ? 'amber' : 'green'} /></div> },
            { key: 'transport', label: 'Transport' },
            { key: 'fee', label: 'Fee status', render: (s) => <Badge tone={feeTone[s.fee]}>{s.fee}</Badge> },
          ]}
        />
      </Card>
    </>
  )
}
