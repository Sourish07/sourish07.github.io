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
            <p>I am a 21-year-old striving to build their career around their passion for computer science & business. My favorite subfields of CS are Machine Learning, Computer Graphics, and High Performance Computing, but that doesn't mean I don't enjoy learning about other areas as well. In the professional realm, I've had the opportunity to intern at many tech companies working on various projects such as Machine Learning Systems, Natural Language Processing with chatbots, and Artificial Intellignce explainability. I have also founded my own startup in Madison, Wisconsin where I learned that the intersection of tech and business is where I want to be.</p>
            <p>Additionally, I love working on personal projects which allow me to apply the knowledge I have acquired in the classroom while simultaneously obtaining new experiences I did not expect, whether its creating my own homelab server or upgrading my 3-D printer. I have come to learn that building things that can benefit the lives of others is what I am passionate about. The enjoyment and pleasure gained from learning while creating is a feeling for which I am still seeking the words to describe.</p>
            <p>Outside of computer science, I have a vested interest in rock climbing, working out, 3-D modeling, public speaking, and international politics & business. In my free time, if I am not with friends, I am either playing video games, watching TV, or listening to rap music/podcasts, alongside reading and researching topics that intrigue me in order to continue expanding my knowledge base.</p>
        </Section>
    );
};

