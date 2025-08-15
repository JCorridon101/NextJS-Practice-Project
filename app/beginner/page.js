import Link from "next/link";

export default function BeginnerPage() {
  return (
    <main>
      <h1>Beginner Projects</h1>
      <p>
        Here you will find many of the beginner projects John has worked on many
        of these ideas have been inspired by{" "}
        <a
          href="https://www.geeksforgeeks.org/reactjs/reactjs-projects/"
          style={{ color: "blue", textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          GeeksforGeeks
        </a>
        .
      </p>
    </main>
  );
}
