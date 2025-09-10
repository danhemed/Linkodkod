import { Link, Outlet } from 'react-router'

export default function Login() {
  return (
    <div>
      <section>
        <nav id="login-nav">
          <Link className="link" to='signup'>sign up</Link>
          <Link className="link" to='signin'>sign in</Link>
        </nav>
        <Outlet />
      </section>
    </div>
  )
}