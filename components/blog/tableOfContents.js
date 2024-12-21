import { useState, useEffect } from 'react';
import styles from '@/styles/blog/TableOfContents.module.css';

export default function TableOfContents() {
    const [nonTechHeadings, setNonTechHeadings] = useState([]);
    const [techHeadings, setTechHeadings] = useState([]);
    const [regularHeadings, setRegularHeadings] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('regular');

    useEffect(() => {
        const processHeadings = () => {
            const nonTechContent = document.querySelector('#nonTechnicalContent');
            const techContent = document.querySelector('#technicalContent');
            const article = document.querySelector('article');
            
            // Check if this is a split article or regular article
            if (nonTechContent && techContent) {
                // Process non-technical headings if visible
                const nonTechHeadings = getComputedStyle(nonTechContent).display !== 'none' 
                    ? processContentHeadings(nonTechContent) 
                    : [];
                setNonTechHeadings(nonTechHeadings);

                // Process technical headings if visible
                const techHeadings = getComputedStyle(techContent).display !== 'none'
                    ? processContentHeadings(techContent)
                    : [];
                setTechHeadings(techHeadings);

                // Update current section based on visibility
                setCurrentSection(getComputedStyle(nonTechContent).display !== 'none' ? 'nonTech' : 'tech');
                setRegularHeadings([]); // Clear regular headings for split articles
            } else if (article) {
                // Process regular article headings
                const headings = processContentHeadings(article);
                setRegularHeadings(headings);
                setNonTechHeadings([]);
                setTechHeadings([]);
                setCurrentSection('regular');
            }
        };

        const processContentHeadings = (contentElement) => {
            const elements = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
            return Array.from(elements).map((heading, index) => {
                if (!heading.id) {
                    heading.id = createId(heading.textContent) || `heading-${index}`;
                }
                
                return {
                    id: heading.id,
                    text: heading.textContent,
                    level: parseInt(heading.tagName.substring(1))
                };
            });
        };

        // Initial processing
        processHeadings();

        // Set up observers
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0 || 
                    mutation.attributeName === 'style' || 
                    mutation.attributeName === 'class') {
                    setTimeout(processHeadings, 100);
                }
            });
        });

        const article = document.querySelector('article');
        const nonTechContent = document.querySelector('#nonTechnicalContent');
        const techContent = document.querySelector('#technicalContent');

        // Observe the appropriate elements
        if (nonTechContent && techContent) {
            observer.observe(nonTechContent, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style', 'class']
            });
            observer.observe(techContent, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style', 'class']
            });

            // Listen for section changes
            const handleSectionChange = () => {
                setTimeout(processHeadings, 100);
            };

            const nonTechLink = document.querySelector('#nonTechnicalLink');
            const techLink = document.querySelector('#technicalLink');

            nonTechLink?.addEventListener('click', handleSectionChange);
            techLink?.addEventListener('click', handleSectionChange);

            // Cleanup event listeners
            return () => {
                observer.disconnect();
                nonTechLink?.removeEventListener('click', handleSectionChange);
                techLink?.removeEventListener('click', handleSectionChange);
            };
        } else if (article) {
            observer.observe(article, {
                childList: true,
                subtree: true,
                attributes: true
            });

            return () => {
                observer.disconnect();
            };
        }
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
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    // Get current headings based on section type
    const currentHeadings = currentSection === 'regular' 
        ? regularHeadings 
        : currentSection === 'nonTech' 
            ? nonTechHeadings 
            : techHeadings;

    // Don't render anything if there are no headings
    if (!currentHeadings || currentHeadings.length === 0) return null;

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
                            <h2>
                                Table of Contents
                                {currentSection !== 'regular' && 
                                    ` (${currentSection === 'nonTech' ? 'Non-Technical' : 'Technical'})`
                                }
                            </h2>
                            <ul>
                                {currentHeadings.map((heading) => (
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
