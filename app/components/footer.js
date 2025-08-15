import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            background: '#000',
            color: '#fff',
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid #222'
        }}>
            <div>
                <p>
                    Contact us:{" "}
                    <Link href="mailto:info@example.com" style={{ color: '#fff', textDecoration: 'underline' }}>
                        info@example.com
                    </Link>
                </p>
                <p>
                    Phone:{" "}
                    <Link href="tel:+1234567890" style={{ color: '#fff', textDecoration: 'underline' }}>
                        +1 (234) 567-890
                    </Link>
                </p>
                <p>&copy; {new Date().getFullYear()} Next Practice Project</p>
            </div>
        </footer>
    );
}