import { Link } from 'react-router'
import '../../css/Nav.css'

export default function Nav() {
  return (
    <nav>
        <Link className='link' to="/">בית</Link>
        <Link className='link' to="/search-post">חיפוש פוסט</Link>
        <Link className='link' to="/add-post">הוסף פוסט</Link>
    </nav>
  )
}
