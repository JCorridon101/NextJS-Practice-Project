import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <h1>Sample Projects</h1>
      <p>
        This page will be dedicated to keeping track of John Corridon's Projects
        with Next.js and React. Here are projects featured on this website:
      </p>
      <ul>
        <li>
          <Link href="/">Random Fact Generator</Link>
        </li>
      </ul>
    </main>
  );
}
