import Section from './section';

export default function AboutMe() {
    return (
        <Section id="about-me" title="About Me">
            <style jsx>
                {`
                    p {
                        margin: 10px 0px;
                    }
                `}
            </style>
            <p>I am senior in college who is striving to build their career around their passion for computer science. My favorite subfields of CS are Machine Learning, Computer Graphics, and High Performance Computing, but that doesn't mean I don't enjoy learning about other areas as well. In the professional realm, I've had the opportunity to intern at many tech companies working on various projects such as ML systems, NLP with chatbots, and ML explainability. I have also founded my own startup in Madison. Additionally, I love working on personal projects which allow me to apply the knowledge I have acquired in the classroom while simultaneously obtaining new experiences I did not expect.</p>
            <p>I am currently studying at the University of Wisconsin-Madison, where I am pursuing a triple major in Computer Science, Data Science, and Economics. I have been involved in several clubs such as the Software Development Club, for which I was a board member for, the Federal Reserve Challenge, for which I was the Head of Training, LEAD @Econ, and the Wisconsin International Review.</p>
            <p>Outside of computer science, I have a vested interest in public speaking, international politics, rock climbing, and 3-D modeling. In my free time, if I am not with friends, I am either playing video games, working out, watching TV, listening to rap music/podcasts, or reading and researching topics that interest me to continue expanding my knowledge base.</p>
        </Section>
    );
};

