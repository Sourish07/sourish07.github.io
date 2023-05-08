import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/NavBar.module.css';

import Drawer from '@mui/material/Drawer';
import PersonIcon from '@mui/icons-material/Person';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import DrawIcon from '@mui/icons-material/Draw';
import ContactPageIcon from '@mui/icons-material/ContactPage';


export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(!drawerOpen);
    };

    return (
        <nav style={{ position: "absolute", width: "100vw", display: "flex", justifyContent: "space-between", alignItems: "center", top: "0", padding: "10px" }}>
            <div>
                <Link href="/" className={styles.navbarLogo} style={{ display: "none", fontSize: "2rem" }}>sourish.dev</Link>
            </div>

            <NavBarLinks />

            {!drawerOpen && <button id={styles.navbarIcon} onClick={toggleDrawer} aria-label="menu"></button>}
            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                <NavBarLinks setDrawerOpen={setDrawerOpen} />

            </Drawer>
        </nav>
    );
}

function NavBarLinks({ setDrawerOpen }) {
    const navbarItems = [
        {
            name: "About me",
            icon: <PersonIcon />,
        },
        {
            name: "Experience",
            icon: <EngineeringIcon />,
        },
        {
            name: "Skills",
            icon: <ScienceIcon />,
        },
        {
            name: "Portfolio",
            icon: <WorkIcon />,
        },
        {
            name: "Blog",
            icon: <DrawIcon />,
        },
        {
            name: "Contact",
            icon: <ContactPageIcon />,
        },
    ]
    return (
        <div className={setDrawerOpen ? styles.sidebarContent : styles.navbarlinks}>
            {navbarItems.map(({name, icon}) => (
                <div
                    onClick={scrollTo(`${name.replaceAll(' ', '-').toLowerCase()}`, setDrawerOpen)}
                    key={name}
                >
                    {setDrawerOpen && icon}
                    <span>
                        {name}
                    </span>
                </div>
            ))}
        </div>
    );
}

function scrollTo(id, setDrawerOpen) {
    return function () {
        setDrawerOpen(false);
        let element = document.getElementById(id);
        console.log(id, element);
        element.scrollIntoView({ behavior: "smooth" });
    }
}
