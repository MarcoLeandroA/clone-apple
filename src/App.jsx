import { Header } from './components/header'
import { Slider } from './components/slider'
import { Present } from './components/present'
import { Promotion } from './components/promotion'
import { Footer } from './components/footer'
import { Product } from './components/product'
import './styles/section.css'
import './styles/product.css'
import './styles/promotion.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/slider.css'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Slider />
        <Present
          title="iPhone 14"
          expression="Maravilla tras maravilla."
          image="2"
          descripttion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Promotion
          title="iPhone 14 Pro"
          expression="Se pasa de Pro."
          image="1"
          descripttion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className='products-container'>
          <Product
            image="1"
            alt="WWDC23"
            title="WWDC23"
            desc="Conferencia Mundial de Desarrollo de Apple. Acompáñanos online del 5 al 9 de junio."
          />
          <Product
            image="2"
            alt="iPad"
            title="iPad"
            desc="Inspírate. Exprésate. Diviértete."
          />
          <Product
            image="3"
            alt="MacBook Pro"
            title="MacBook Pro"
            desc="Con los superpoderes de los chips M2 Pro y M2 Max."
          />
          <Product
            image="4"
            alt="Watch ULTRA"
            title="Watch"
            desc="A la aventura.*"
          />
          <Product
            image="6"
            alt="iPad Pro"
            title="iPad Pro"
            desc="Con los superpoderes de los chips M2."
          />
          <Product
            image="5"
            alt="AirPods Pro"
            title="AirPods Pro"
            desc="Remasterizados por completo."
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
