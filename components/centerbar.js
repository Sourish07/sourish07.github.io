import Link from "next/link"

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
        <div id="center-bar" style={{
            "display": "flex", 
            "justifyContent": "space-evenly", 
            "flexWrap": "wrap",
            "marginTop": "20px",
            
            }}>
            {navbarItems.map((item) => (
                <Button key={item.name} icon={path + item.icon} href={item.href} text={item.name} />
            ))}
        </div>
    )
}

function Button(props) {

    return (
        <Link href={props.href}>
            <img src={props.icon} alt="Button" height={35} style={{filter: "var(--red-filter)"}}/>
        </Link>
    )
}