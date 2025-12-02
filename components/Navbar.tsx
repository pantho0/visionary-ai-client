import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <p>
            Visionary<span className="#5dfeca">AI</span>
          </p>
        </Link>

        <ul>
          <Link href="/">Home</Link>
          <Link href="/">Generate Image</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
