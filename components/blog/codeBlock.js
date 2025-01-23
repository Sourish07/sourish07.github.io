import { useEffect, useRef } from 'react';
import CopyButton from './copyButton';

export default function CodeBlock({ children, className, ...props }) {
    const preRef = useRef();
    const [codeString, setCodeString] = useState('');

    useEffect(() => {
        if (preRef.current) {
            // Get the text content from the pre element
            const code = preRef.current.textContent || '';
            setCodeString(code);
        }
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <pre ref={preRef} className={className} {...props}>
                {children}
            </pre>
            <CopyButton code={codeString} />
        </div>
    );
}
