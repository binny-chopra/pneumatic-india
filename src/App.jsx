import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Capabilities } from './components/sections/Capabilities'
import { Products } from './components/sections/Products'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { ProductModal } from './components/products/ProductModal'

export default function App() {
  const { dark, toggle } = useTheme()
  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <>
      <Navbar dark={dark} onToggle={toggle} />
      <main>
        <Hero />
        <Capabilities />
        <Products onOpen={setActiveProduct} />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  )
}
