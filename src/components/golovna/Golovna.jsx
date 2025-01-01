import { Header } from "./Header/Header"
import "./Golovna.scss"
import { Main } from "./Main/Main"
import { Footer } from "./Footer/Footer"

export const Golovna = () => {
  return (
    <div className="golovna">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}