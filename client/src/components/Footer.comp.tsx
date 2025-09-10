import { Link } from 'react-router'
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer>
      <Link className="link" to='/Terms_and_Conditions'>Terms and Conditions</Link>
      <p>Created by 'Dan Hemed'</p>
    </footer>
  )
}