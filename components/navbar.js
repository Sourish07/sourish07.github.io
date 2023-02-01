import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/NavBar.module.css';


export default function Navbar() {
    const navbarItems = ["About me", "Experience", "Skills", "Portfolio", "Blog", "Contact"];
    return (
        <>
            <nav style={{ position: "absolute", width: "100vw", display: "flex", justifyContent: "space-between", alignItems: "center", top: "0", padding: "10px" }}>
                <div>
                    <Link href="/" className={styles.navbarLink} style={{ display: "none", fontSize: "2rem" }}>sourish.dev</Link>
                </div>

                <div style={{ display: "flex" }}>
                    {navbarItems.map((item) => (
                        <NavbarLink
                            key={item}
                            className={styles.navbarLink}
                            href={(item === "Blog" ? "/" : "#") + item.replaceAll(' ', '-').toLowerCase()}
                            text={item}
                            style={{ display: "none", fontSize: "1.25rem", marginRight: "10px", transition: "all 0.2s" }}
                        />
                    ))}
                    <NavbarIcon />
                </div>
            </nav>
            <Sidebar items={navbarItems} />
        </>
    )
}

function Sidebar(props) {
    return (
        <div id={styles.sidebar}>
            <div id={styles.sidebarContent}>
                {props.items.map((item) => (
                    <NavbarLink key={item} href={(item === "Blog" ? "/" : "#") + item.replaceAll(' ', '-').toLowerCase()} text={item} className={styles.sidebarLink} onClick={toggleSidebar}/>
                ))}
            </div>
        </div>
    )
}

function NavbarLink(props) {
    return (
        <Link href={props.href ? props.href : ""} onClick={props.onClick}>
            <div style={props.style} className={props.className}>{props.text}</div>
        </Link>
    )
}

function toggleSidebar() {
    let sidebar = document.getElementById(styles.sidebar);
    let icon = document.getElementById(styles.navbarIcon);

    if (sidebar.style.transform === "translateX(0%)") { // If sidebar is open
        sidebar.style.transform = "translateX(100%)";
        icon.style.backgroundImage = `url(resources/icons/hamburger.svg)`;
        icon.style.filter = "var(--red-filter)";
    } else { // If sidebar is closed
        sidebar.style.transform = "translateX(0%)";
        icon.style.backgroundImage = `url(resources/icons/close.svg)`;
        icon.style.filter = "brightness(0) invert(1)";
    }
}

function NavbarIcon() {
    return (
        <button id={styles.navbarIcon} onClick={toggleSidebar}></button>
    )
}