import Link from "next/link"
import styles from '../styles/CenterBar.module.css'

export default function CenterBar() {
    const navbarItems = [
        {
            name: "Resume",
            icon: "icon.svg",
            href: "/resume"
        },
        {
            name: "Portfolio",
            icon: "icon.svg",
            href: "#portfolio"
        },
        {
            name: "Blog",
            icon: "icon.svg",
            href: "/blog"
        },
        {
            name: "GitHub",
            icon: "icon.svg",
            href: "https://github.com/Sourish07"
        },
        {
            name: "LinkedIn",
            icon: "icon.svg",
            href: "https://www.linkedin.com/in/sourish07/"
        },
    ];
    return (
        <div style={{
            "display": "flex", 
            "justify-content": "center", 
            "flexWrap": "wrap"
            }}>
            {navbarItems.map((item) => (
                <Button icon={item.icon} href={item.href} text={item.name} />
            ))}
        </div>
    )
}

function Button(props) {

    return (
        <Link href={props.href} style={{
                // "background-color": "#888",
                // "border": "none",
                // "cursor": "pointer",
                display: "flex",
                // "flex-direction": "column",
                alignItems: "center",
                // "justify-content": "center",
                margin: "10px",
                }}>
            <img src={props.icon} alt="Button" width={35} style={{}}/>
            {/* <div>{props.text}</div> */}
        </Link>
    )
}