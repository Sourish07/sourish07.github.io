import Section from './section';

const AboutMe = () => {
    return (
        <Section id="about-me" title="About Me">
            <style jsx>
                {`
                    p {
                        margin: 10px 0px;
                    }
                `}
            </style>
            <p>I am senior in college who is striving to build their career around their passion for computer science. My favorite subfield of CS is Machine Learning, but that doesn't mean I don't enjoy picking up other skills as well. In the professional realm, I've had the opportunity to intern at many tech companies on various topics such as ML systems, NLP with chatbots, and data analysis. I have also founded my own startup in Madison. Additionally, I love working on projects which allow me to apply the knowledge I have acquired in the classroom while simultaneously obtaining new experiences I did not expect.</p>
            <p>I am currently studying at the University of Wisconsin-Madison, where I am pursuing a triple major in Computer Science, Economics, and Data Science. I am involved in several clubs such as the Software Development Club, for which I am a board member for, the Federal Reserve Challenge, for which I am the Head of Training, LEAD @Econ, and the Wisconsin International Review.</p>
            <p>Outside of computer science, I have a vested interest in public speaking, international politics, economics, rock climbing, and 3-D modeling. In my free time, if I am not with friends, I am either playing video games, working out, watching TV, listening to rap music, or reading and researching topics that interest me to continue expanding my knowledge base.</p>
        </Section>
    );
};

export default AboutMe;
