import Logo from "./application-layout/Logo"
import Slogan from "./application-layout/Slogan"
import './Header.css'

export default function Header() {
  return (
    <header>
        <Slogan/>
        <Logo/>
    </header>
  )
}
