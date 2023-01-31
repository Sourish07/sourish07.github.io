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
                            href={(item === "Blog" ? "/" : "#") + item.replaceAll(' ', '-').toLowerCase()}
                            text={item}
                            style={{ display: "none", fontSize: "1.25rem", marginRight: "10px", transition: "all 0.2s" }}
                        />
                    ))}
                    <NavbarMoreIcon />
                </div>
            </nav>
            <Sidebar items={navbarItems} />
        </>
    )
}

function Sidebar(props) {
    return (
        <div id="sidebar" style={{ display: "flex", position: "fixed", width: "0", height: "100%", top: "0", right: "0", overflowX: "hidden", transition: "0.5s", zIndex: "1" }}>
            <div onClick={hideSidebar} style={{ background: "rgba(4, 4, 4, 0)", height: "100%", flexGrow: "1" }}></div>
            <div id="sidebarContent"
                style={{ height: "100%", width: "180px", backgroundColor: "var(--red)", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", paddingTop: "20px", position: "absolute", right: "0", display: "flex", flexDirection: "column" }}>
                {props.items.map((item) => (
                    <NavbarLink key={item} href={(item === "Blog" ? "/" : "#") + item.replaceAll(' ', '-').toLowerCase()} text={item} className={styles.sidebarLink} />
                ))}
            </div>
        </div>
    )
}

function NavbarLink(props) {
    return (
        <Link href={props.href ? props.href : ""} >
            <div style={props.style} className={props.className}>{props.text}</div>
        </Link>
    )
}

function showSidebar() {
    document.getElementById("sidebar").style.width = "100%";
}

function hideSidebar() {
    document.getElementById("sidebar").style.width = "0";
}


function NavbarMoreIcon() {
    return (
        <img src="resources/icons/hamburger.svg" id={styles.navbarMoreIcon} alt="Button" width={35} onClick={showSidebar} style={{ filter: "var(--red-filter)", cursor: "pointer" }} />
    )
}