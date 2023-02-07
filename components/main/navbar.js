import Link from 'next/link';
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
                            text={item}
                            style={{ display: "none", fontSize: "1.25rem", marginRight: "10px", transition: "all 0.2s" }}
                            onClick={scrollTo(item.replaceAll(' ', '-').toLowerCase())}
                        />
                    ))}
                    <button id={styles.navbarIcon} onClick={toggleSidebar} aria-label="menu"></button>
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
                    <NavbarLink 
                        key={item} 
                        href={"#" + item.replaceAll(' ', '-').toLowerCase()} 
                        text={item} 
                        className={styles.sidebarLink} 
                        onClick={scrollTo(item.replaceAll(' ', '-').toLowerCase(), true)}
                    />
                ))}
            </div>
        </div>
    )
}

function NavbarLink(props) {
    return (
        <div href={props.href} onClick={props.onClick} alt={props.text} style={{cursor: "pointer"}}>
            <div style={props.style} className={props.className}>{props.text}</div>
        </div>
    )
}

function scrollTo(id, sidebarOpen=false) {
    return function() {
        if (sidebarOpen) toggleSidebar();
        let element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }
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