//link (next js)
import Link from "next/link";

//next hooks
import { usePathname } from "next/navigation";

//framer motion
import { motion } from "framer-motion";

const links = [
    { path: "/", name: "home" },
    { path: "/projects", name: "my projects" },
    { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            <div className="flex space-x-4">
                {links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`capitalize ${linkStyles}`}
                        >
                            {link.path === path && (
                                <motion.span
                                    initial={{ y: "-100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ type: "tween" }}
                                    layoutId="underline"
                                    className={`${underlineStyles}`}
                                />
                            )}
                            <div>{link.name}</div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Nav;
