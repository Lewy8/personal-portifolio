'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export default function Navbar(){
    const pathname = usePathname();

    const navLinks = [
        {id: 1, name: 'Home', path: '/'},
        {id: 2, name: 'About', path: '/about'},
        //{id: 3, name: 'Portifolio', path: '/portfolio'},
        {id: 4, name: 'Services', path: '/services'},
        //{id: 5, name: 'Projects', path: '/projects'},
        {id: 6, name: 'Contact', path: '/contact'}
    ];

    return (
        <>
            <nav className="font-[family-name:var(--font-geist-mono)]">
                <ul className="flex gap-8">
                {navLinks.map((link) => (
                    <Link href={link.path} passHref key={link.id}>
                    <li
                        className={`text-sm text-center sm:text-left hover:underline hover:underline-offset-4 ${
                        pathname === link.path? "font-extrabold" : ""
                        }`}
                    >
                        {link.name}
                    </li>
                    </Link>
                ))}
                </ul>
            </nav>
        </>
    );
}