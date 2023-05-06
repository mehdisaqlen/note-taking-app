import Link from "next/link";

function Navbar({ isAuth }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">toDO</Link>
      </div>

      <ul>
        {isAuth ? (
          <li>
            <Link href="#">Sign out</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/signin">Sign in</Link>
            </li>
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
