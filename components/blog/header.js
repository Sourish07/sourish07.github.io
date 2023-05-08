import { useState } from 'react';
import Link from "next/link";

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DrawIcon from '@mui/icons-material/Draw';
import WorkIcon from '@mui/icons-material/Work';

import styles from "@/styles/blog/Blog.module.css";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(!drawerOpen);
    };

    return (
        <header id={styles.header}>
            <div className={styles.wrapper}>
                <Link id={styles.title} href="/blog" style={{ fontWeight: "300" }}>Sourish Shares</Link>
                <NavBarLinks />
                <Link href="" onClick={toggleDrawer} className={styles.drawerIcon}><MenuIcon/></Link>
            </div>
            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                <NavBarLinks inDrawer={true} />

            </Drawer>
        </header>
    );
}

function NavBarLinks({ inDrawer }) {
    return (
        <div className={inDrawer ? styles.navbarlinksDrawer : styles.navbarlinks}>
            <Link href="/blog/quotes">{inDrawer && <FormatQuoteIcon/>}<span>Favorite Quotes</span></Link>
            <Link href="/blog/why">{inDrawer && <DrawIcon/>}<span>Why I Write</span></Link>
            <Link href="/">{inDrawer && <WorkIcon/>}<span>Personal Website</span></Link>
        </div>
    );
}