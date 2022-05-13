import React from 'react';
import Section from '../../../components/sectionitem/section.jsx';

const TriggersSection = () => (
    <Section
        id="trigger-blocks-section"
        title="Trigger Blocks"
        description="See how to use trigger blocks to specify when a script should run."
    >
        <div className="content-section-video">
            <iframe
                width="640"
                height="480"
                src="https://youtube.com/embed/123AdwR_JxI?rel=0"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    </Section>
);
export default TriggersSection;
