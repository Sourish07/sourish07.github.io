import Section from './section';

export default function AboutMe({ text }) {
    return (
        <Section id="about-me" title="About Me">
            <style>
                {`
                    #about-me p {
                        margin: 10px 0px;
                    }
                `}
            </style>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </Section>
    );
};

