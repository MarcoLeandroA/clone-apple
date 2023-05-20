import { Header } from './components/header'
import { Slider } from './components/slider'
import { Present } from './components/present'
import { Promotion } from './components/promotion'
import { Footer } from './components/footer'
import './styles/section.css'
import './styles/promotion.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/slider.css'
import './App.css'

function App() {

  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App
