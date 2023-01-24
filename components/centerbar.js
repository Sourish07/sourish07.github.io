import Link from "next/link"

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
            "justifyContent": "center", 
            "flexWrap": "wrap"
            }}>
            {navbarItems.map((item) => (
                <Button key={item.name} icon={item.icon} href={item.href} text={item.name} />
            ))}
        </div>
    )
}

function Button(props) {

    return (
        <Link href={props.href}>
            <img src={props.icon} alt="Button" width={35} style={{margin: "10px"}}/>
        </Link>
    )
}