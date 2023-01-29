import Link from "next/link"
import styles from '@/styles/CenterBar.module.css';

export default function CenterBar() {
    const path = "resources/icons/"
    const navbarItems = [
        {
            name: "Resume",
            icon: "resume.svg",
            href: "/resume"
        },
        {
            name: "Portfolio",
            icon: "portfolio.svg",
            href: "#portfolio"
        },
        {
            name: "Blog",
            icon: "blog.svg",
            href: "/blog"
        },
        {
            name: "GitHub",
            icon: "github.svg",
            href: "https://github.com/Sourish07"
        },
        {
            name: "LinkedIn",
            icon: "linkedin.svg",
            href: "https://www.linkedin.com/in/sourish07/"
        },
    ];
    return (
        <div className={styles.centerBar}>
            {navbarItems.map((item) => (
                <Button key={item.name} icon={path + item.icon} href={item.href} text={item.name} />
            ))}
        </div>
    )
}

function Button(props) {

    return (
        <Link href={props.href}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", position: "relative"}}>
                <img src={props.icon} alt="Button" style={{filter: "var(--red-filter)"}}/>
                <span style={{opacity: "0", position: "absolute", bottom: "-90%", left: "50%", transform: "translate(-50%)", fontSize: "1.4rem", transition: "all 0.2s"}}>{props.text}</span>
            </div>
        </Link>
    )
}