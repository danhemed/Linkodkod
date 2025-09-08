import { Link } from 'react-router'
import './Nav.css'

export default function Nav() {
  return (
    <nav>
        <Link className='link' to="/">בית</Link>
        <Link className='link' to="/searchPost">חיפוש פוסט</Link>
    </nav>
  )
}
