import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem",
        borderBottom: "1px solid #eee",
        marginBottom: "2rem",
      }}
    >
      <nav>
        <Link href="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link href="/beginner" style={{ marginRight: "1rem" }}>
          Beginner
        </Link>
        <Link href="/intermediate" style={{ marginRight: "1rem" }}>
          Intermediate
        </Link>
        <Link href="/advanced" style={{ marginRight: "1rem" }}>
          Advanced
        </Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
