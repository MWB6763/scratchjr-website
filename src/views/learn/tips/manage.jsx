import React from 'react';
import Section from '../../../components/sectionitem/section.jsx';

const ManageSection = () => (
    <Section
        id="manage-projects-section"
        title="Making, Renaming, And Deleting Projects"
    >
        <div className="content-section-description">
            Watch the video to learn how to make a new project, rename
            an existing project, and delete a project.
        </div>
        <div className="content-section-video">
            <iframe
                width="640"
                height="480"
                src="https://youtube.com/embed/RXXDUxqBzBI?rel=0"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    </Section>
);
export default ManageSection;
