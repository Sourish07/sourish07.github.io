import { parseISO, format } from 'date-fns';
import { useState, useEffect } from 'react';

export default function Date({ dateString }) {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setDate(format(parseISO(dateString), "LLLL d, yyyy"));
      }, [date]);

    return <div>{date}</div>;
}