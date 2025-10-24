import '../styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import "react-tooltip/dist/react-tooltip.css";

export const metadata = {
  title: 'Asia Trading Export | Premium Wood Charcoal Supplier',
  description: 'Delivering quality wood charcoal around the world.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900 scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
