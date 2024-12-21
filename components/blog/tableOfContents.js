import { useState, useEffect } from 'react';
import styles from '@/styles/blog/TableOfContents.module.css';

export default function TableOfContents() {
    const [headings, setHeadings] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const processHeadings = () => {
            const article = document.querySelector('article');
            if (!article) return;

            // Get all headings h1-h6 from both static and dynamic content
            const elements = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const headingElements = Array.from(elements);

            // Create TOC data structure and ensure all headings have IDs
            const headings = headingElements.map((heading, index) => {
                // Create an ID if one doesn't exist
                if (!heading.id) {
                    heading.id = createId(heading.textContent) || `heading-${index}`;
                }
                
                return {
                    id: heading.id,
                    text: heading.textContent,
                    level: parseInt(heading.tagName.substring(1))
                };
            });

            setHeadings(headings);
        };

        // Initial processing
        processHeadings();

        // Set up a MutationObserver to watch for dynamically added content
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    // Wait a bit for any post-processing of added content
                    setTimeout(processHeadings, 500);
                }
            });
        });

        const article = document.querySelector('article');
        if (article) {
            observer.observe(article, {
                childList: true,
                subtree: true
            });
        }

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, []);

    const createId = (text) => {
        return text
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
            || '';
    };

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100; // Offset to account for any fixed headers
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    if (headings.length === 0) return null;

    return (
        <>
            <button 
                className={styles.tocButton}
                onClick={() => setIsOpen(true)}
                aria-label="Open Table of Contents"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Table of Contents"
                        >
                            ×
                        </button>
                        <nav className={styles.tableOfContents}>
                            <h2>Table of Contents</h2>
                            <ul>
                                {headings.map((heading) => (
                                    <li
                                        key={heading.id}
                                        style={{ marginLeft: `${(heading.level - 1) * 1}rem` }}
                                    >
                                        <button
                                            onClick={() => handleClick(heading.id)}
                                            className={styles.tocLink}
                                        >
                                            {heading.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
