import Logo from "./application-layout/Logo.comp"
import Slogan from "./application-layout/Slogan.comp"
import Nav from './application-layout/Nav.comp'
import './Header.css'

export default function Header() {
  return (
    <header>
        <Nav/>
        <Slogan/>
        <Logo/>
    </header>
  )
}
