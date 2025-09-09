import Logo from "./application-layout/Logo.comp"
import Slogan from "./application-layout/Slogan.comp"
import Nav from './application-layout/Nav.comp'
import '../css/Header.css'

export default function Header() {
  return (
    <header>
        <Logo/>
        <Nav/>
        <Slogan/>
    </header>
  )
}
