import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="clients"><Clients /></section>
      <section id="contact"><Contact /></section>
    </main>
  )
}
