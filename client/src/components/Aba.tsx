import { Link ,Outlet } from "react-router"

export default function Aba() {
  return (
    <div>
    <section>
        <nav id="login-nav">
          <Link className="link" to='signup'>הירשם</Link>
          <Link className="link" to='signin'>היכנס</Link>
        </nav>
      </section>
        <Outlet />
    </div>
  )
}
