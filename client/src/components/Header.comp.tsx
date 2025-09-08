import Logo from "./application-layout/Logo.comp"
import Slogan from "./application-layout/Slogan.comp"
import './Header.css'

export default function Header() {
  return (
    <header>
        <Slogan/>
        <Logo/>
    </header>
  )
}
