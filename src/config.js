import {
  BookOpen, Bus, CalendarCheck, ClipboardList, GraduationCap, IndianRupee, LayoutDashboard, Library, Megaphone, School, Settings, UserSquare2, Users,
} from 'lucide-react'

export const app = {
  name: 'EduSuite',
  tagline: 'School Management System',
  logo: School,
  user: { name: 'Mrs. Kavita Rao', role: 'Principal' },
  searchPlaceholder: 'Search student, admission no., class…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'School',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Attendance', to: '/attendance', icon: CalendarCheck },
      { label: 'Students', to: '/students', icon: GraduationCap },
    ],
  },
  {
    title: 'Academics',
    items: [
      { label: 'Classes & Timetable', icon: BookOpen },
      { label: 'Exams & Report Cards', icon: ClipboardList },
      { label: 'Teachers & Staff', icon: UserSquare2 },
      { label: 'Library', icon: Library },
    ],
  },
  {
    title: 'Administration',
    items: [
      { label: 'Fee Management', icon: IndianRupee },
      { label: 'Transport', icon: Bus },
      { label: 'Parent Portal & App', icon: Users },
      { label: 'Notices & SMS', icon: Megaphone },
      { label: 'Settings', icon: Settings },
    ],
  },
]
