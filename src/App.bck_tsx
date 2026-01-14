import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import logo from './assets/logo.svg'


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<img src={logo} className="h-8" />
<span className="text-xl font-semibold">TeKSignal</span>
</div>
<nav className="space-x-6">
<Link to="/">Home</Link>
<Link to="/services">Services</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</nav>
</header>


<main className="flex-grow">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>


<footer className="bg-slate-900 text-slate-300 text-center py-4">
© {new Date().getFullYear()} TeKSignal · Clean Signal. Clear Results.
</footer>
</div>
)
}