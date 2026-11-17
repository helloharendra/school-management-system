// Sample data for the UI demo. The complete project uses live APIs + database.
export const attendanceTrend = [
  { label: 'Mon', students: 94, staff: 98 }, { label: 'Tue', students: 92, staff: 97 }, { label: 'Wed', students: 95, staff: 99 },
  { label: 'Thu', students: 91, staff: 96 }, { label: 'Fri', students: 89, staff: 98 }, { label: 'Sat', students: 86, staff: 95 },
]

export const strength = [
  { name: 'Pre-primary', value: 182 }, { name: 'Primary (1–5)', value: 486 }, { name: 'Middle (6–8)', value: 342 }, { name: 'Secondary (9–12)', value: 418 },
]

export const events = [
  { date: '20', month: 'Nov', title: 'Parent–Teacher Meeting', meta: 'Classes 6–10 · 9:00 AM' },
  { date: '24', month: 'Nov', title: 'Half-yearly exams begin', meta: 'All classes' },
  { date: '28', month: 'Nov', title: 'Annual Sports Day', meta: 'School ground · 8:00 AM' },
  { date: '05', month: 'Dec', title: 'Science Exhibition', meta: 'Auditorium' },
]

export const notices = [
  { title: 'Winter uniform mandatory from 1 December', by: 'Admin office', when: '2h ago' },
  { title: 'Bus route 7 timing changed to 7:10 AM', by: 'Transport', when: 'Yesterday' },
  { title: 'Class 10 pre-board datesheet released', by: 'Exam cell', when: '2 days ago' },
]

export const classes = ['Class 8-A', 'Class 8-B', 'Class 9-A', 'Class 10-A']

export const students = [
  { id: 1, roll: 1, adm: 'ES2019-041', name: 'Aadhya Sharma', cls: 'Class 8-A', parent: 'Rajesh Sharma', phone: '+91 98XXXX 1201', att: 96, fee: 'Paid', transport: 'Route 3' },
  { id: 2, roll: 2, adm: 'ES2019-052', name: 'Arnav Gupta', cls: 'Class 8-A', parent: 'Sunita Gupta', phone: '+91 97XXXX 3345', att: 91, fee: 'Due', transport: '—' },
  { id: 3, roll: 3, adm: 'ES2019-063', name: 'Diya Patel', cls: 'Class 8-A', parent: 'Hitesh Patel', phone: '+91 99XXXX 7720', att: 98, fee: 'Paid', transport: 'Route 1' },
  { id: 4, roll: 4, adm: 'ES2019-071', name: 'Ishaan Verma', cls: 'Class 8-A', parent: 'Pooja Verma', phone: '+91 90XXXX 6612', att: 84, fee: 'Overdue', transport: 'Route 7' },
  { id: 5, roll: 5, adm: 'ES2019-078', name: 'Kiara Nair', cls: 'Class 8-A', parent: 'Suresh Nair', phone: '+91 96XXXX 4410', att: 95, fee: 'Paid', transport: '—' },
  { id: 6, roll: 6, adm: 'ES2019-085', name: 'Mohammed Zaid', cls: 'Class 8-A', parent: 'Imran Zaid', phone: '+91 88XXXX 2093', att: 89, fee: 'Paid', transport: 'Route 3' },
  { id: 7, roll: 7, adm: 'ES2019-090', name: 'Navya Reddy', cls: 'Class 8-A', parent: 'Krishna Reddy', phone: '+91 95XXXX 1187', att: 97, fee: 'Due', transport: 'Route 5' },
  { id: 8, roll: 8, adm: 'ES2019-096', name: 'Reyansh Singh', cls: 'Class 8-A', parent: 'Amit Singh', phone: '+91 93XXXX 5530', att: 92, fee: 'Paid', transport: '—' },
  { id: 9, roll: 9, adm: 'ES2019-104', name: 'Saanvi Joshi', cls: 'Class 8-A', parent: 'Manoj Joshi', phone: '+91 94XXXX 8811', att: 99, fee: 'Paid', transport: 'Route 1' },
  { id: 10, roll: 10, adm: 'ES2019-112', name: 'Vihaan Khanna', cls: 'Class 8-A', parent: 'Neha Khanna', phone: '+91 91XXXX 7702', att: 87, fee: 'Due', transport: 'Route 7' },
]
