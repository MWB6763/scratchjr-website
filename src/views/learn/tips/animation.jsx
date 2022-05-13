import React from 'react';
import Section from '../../../components/sectionitem/section.jsx';

const AnimationSection = () => (
    <Section
        id="character-animation-section"
        title="Character Animation Using The ScratchJr Blocks"
        description="See how to make a simple script by connecting blocks together."
    >
        <div className="content-section-video">
            <iframe
                width="640"
                height="480"
                src="https://youtube.com/embed/JoHpVzltafU?rel=0"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    </Section>
);
export default AnimationSection;
