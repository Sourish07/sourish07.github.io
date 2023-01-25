export const SectionTitle = ({ title }) => {
    return (
        <h2 style={{fontSize: "3rem", fontWeight: "300", textAlign: "center" }}>
            <span style={{borderBottom: "1.5px solid var(--red)", display: "inline-block", lineHeight: "0.95"}}>{title[0]}</span>{title.slice(1, title.length)}
        </h2>
    );
};

export const SectionSubheader = ({ text }) => {
    return (
        <h3 style={{fontSize: "1.5rem", fontWeight: "100", textAlign: "center"}}>
            {text}
        </h3>
    );
};
