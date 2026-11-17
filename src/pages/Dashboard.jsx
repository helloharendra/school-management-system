import { Link } from 'react-router-dom'
import { CalendarCheck, GraduationCap, IndianRupee, Megaphone, UserSquare2 } from 'lucide-react'
import { Card, Hero, HeroStat, StatCard } from '../components/ui'
import { DonutChart, TrendChart } from '../components/Charts'
import { attendanceTrend, events, notices, strength } from '../data'

export default function Dashboard() {
  return (
    <>
      <Hero
        eyebrow="Academic session 2026–27"
        title="Good morning, Mrs. Rao ☀️"
        subtitle="92% of students and 97% of staff are present today. Half-yearly exams start in 7 days."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Present today" value="1,312" /><HeroStat label="Fee collected" value="₹4.2L" /></div>}
      >
        <Link to="/attendance" className="btn bg-white text-brand-700 hover:bg-brand-50"><CalendarCheck className="h-4 w-4" /> Mark attendance</Link>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total students" value="1,428" delta="6.2%" icon={GraduationCap} />
        <StatCard label="Teachers & staff" value="96" icon={UserSquare2} tone="sky" />
        <StatCard label="Fee collection (term)" value="82%" delta="4.0%" icon={IndianRupee} tone="emerald" />
        <StatCard label="Avg. attendance" value="92.4%" delta="-0.8%" icon={CalendarCheck} tone="amber" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Attendance this week" subtitle="% present" className="xl:col-span-2">
          <TrendChart data={attendanceTrend} series={[{ key: 'students', name: 'Students' }, { key: 'staff', name: 'Staff' }]} format={(v) => `${v}%`} />
        </Card>
        <Card title="Student strength"><DonutChart data={strength} centerValue="1,428" centerLabel="Students" /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Upcoming events">
          <ul className="space-y-3">
            {events.map((e) => (
              <li key={e.title} className="flex items-center gap-4 rounded-xl p-2 transition hover:bg-slate-50">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-center text-white shadow-lg shadow-brand-500/25">
                  <div><p className="text-lg font-extrabold leading-none">{e.date}</p><p className="text-[10px] uppercase opacity-80">{e.month}</p></div>
                </div>
                <div><p className="font-semibold text-slate-800">{e.title}</p><p className="text-xs text-slate-400">{e.meta}</p></div>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Notice board" action={<Megaphone className="h-5 w-5 text-brand-500" />}>
          <ul className="space-y-3">
            {notices.map((n) => (
              <li key={n.title} className="rounded-xl border-l-4 border-brand-500 bg-brand-50/50 p-4">
                <p className="font-semibold text-slate-800">{n.title}</p>
                <p className="mt-1 text-xs text-slate-500">{n.by} · {n.when}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  )
}
