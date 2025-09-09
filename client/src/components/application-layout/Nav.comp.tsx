import { Link } from 'react-router'
import '../../css/Nav.css'

export default function Nav() {
  return (
    <nav>
        <Link className='link' to="/">בית</Link>
        <Link className='link' to="/searchPost">חיפוש פוסט</Link>
    </nav>
  )
}
