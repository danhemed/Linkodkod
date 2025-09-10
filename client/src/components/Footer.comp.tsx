import { Link } from 'react-router'
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer>
      <Link className="link" to='/Terms_and_Conditions'>תנאים והגבלות</Link>
      <p className='by'>נוצר ע"י דן חמד</p>
    </footer>
  )
}