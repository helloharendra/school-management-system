import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Avatar, Card, PageHeader, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { classes, students } from '../data'

const states = {
  P: { label: 'Present', cls: 'bg-emerald-500 text-white shadow-emerald-500/30' },
  A: { label: 'Absent', cls: 'bg-rose-500 text-white shadow-rose-500/30' },
  L: { label: 'Leave', cls: 'bg-amber-400 text-white shadow-amber-500/30' },
}

export default function Attendance() {
  const { openContact } = useContact()
  const [cls, setCls] = useState(classes[0])
  const [marks, setMarks] = useState(() => Object.fromEntries(students.map((s) => [s.id, s.id === 4 ? 'A' : s.id === 10 ? 'L' : 'P'])))
  const [saved, setSaved] = useState(false)
  const count = (k) => Object.values(marks).filter((v) => v === k).length

  return (
    <>
      <PageHeader
        title="Daily attendance"
        subtitle={`${new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · Class teacher: Mr. Anil Mathur`}
        actions={<Segmented options={classes} value={cls} onChange={setCls} />}
      />
      <div className="mb-6 grid grid-cols-3 gap-4">
        {Object.entries(states).map(([k, s]) => (
          <div key={k} className="card flex items-center gap-4 p-4">
            <span className={`grid h-11 w-11 place-items-center rounded-xl text-lg font-bold shadow-lg ${s.cls}`}>{k}</span>
            <div><p className="text-2xl font-bold text-slate-900">{count(k)}</p><p className="text-xs text-slate-500">{s.label}</p></div>
          </div>
        ))}
      </div>
      <Card title={cls} subtitle="Tap P / A / L for each student" bodyClass="divide-y divide-slate-100"
        action={<button onClick={() => setMarks(Object.fromEntries(students.map((s) => [s.id, 'P'])))} className="text-sm font-semibold text-brand-600">Mark all present</button>}>
        {students.map((s) => (
          <div key={s.id} className="flex flex-wrap items-center gap-4 px-5 py-3">
            <span className="w-6 text-sm font-semibold text-slate-400">{s.roll}</span>
            <Avatar name={s.name} size="sm" />
            <div className="min-w-[160px] flex-1"><p className="font-semibold text-slate-800">{s.name}</p><p className="text-xs text-slate-400">{s.adm} · {s.att}% this term</p></div>
            <div className="flex gap-2">
              {Object.keys(states).map((k) => (
                <button key={k} onClick={() => setMarks({ ...marks, [s.id]: k })} className={`h-9 w-9 rounded-xl text-sm font-bold transition ${marks[s.id] === k ? `${states[k].cls} shadow-lg` : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}>{k}</button>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-3 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Parents of absent students will get an SMS / app notification.</p>
          <div className="flex gap-2">
            <button onClick={() => openContact('SMS & App Notifications to Parents')} className="btn-ghost"><Send className="h-4 w-4" /> Notify parents</button>
            <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 1500) }} className="btn-primary">{saved ? <><CheckCircle2 className="h-4 w-4" /> Saved</> : 'Submit attendance'}</button>
          </div>
        </div>
      </Card>
    </>
  )
}
