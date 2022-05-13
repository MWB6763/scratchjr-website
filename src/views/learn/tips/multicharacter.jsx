import React from 'react';
import Section from '../../../components/sectionitem/section.jsx';

const MultiCharacterSection = () => (
    <Section
        id="multi-character-section"
        title="Multiple Characters"
        description="See how to add characters to your project."
    >
        <div className="content-section-video">
            <iframe
                width="640"
                height="480"
                src="https://youtube.com/embed/4qLVKpImrws?rel=0"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    </Section>
);
export default MultiCharacterSection;
