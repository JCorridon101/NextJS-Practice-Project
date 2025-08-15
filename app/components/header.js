import Link from 'next/link';

export default function Header() {
    return (
        <header style={{ padding: '1rem', borderBottom: '1px solid #eee', marginBottom: '2rem' }}>
            <nav>
                <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
                <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}