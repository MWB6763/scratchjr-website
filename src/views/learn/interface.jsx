import React from 'react';
import GuideButton from '../../components/guidebutton/guidebutton.jsx';
import GuideButtonLine from '../../components/guidebutton/guidebuttonline.jsx';
import GuideKey from '../../components/guidekey/guidekey.jsx';
import TxSpan from '../../components/transifex/txspan.jsx';

import interfaceKey from './interface.json';
import './interface.scss';

export default class InterfaceSection extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // default to first key item
            currentIndex: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (i) {
        this.setState({currentIndex: i});
    }
    render () {
        return (
            <div
                className="content-section learn-interface"
                id="interface-section"
            >
                <TxSpan
                    className="download-guide-link"
                    txContent="translate_urls block"
                >
                    <a
                        href="/pdfs/scratchjr-interface-guide.pdf"
                    title="Download Guide As PDF">
                        <span className="download-icon">&#x2193;</span>Download Guide As PDF
                    </a>
                </TxSpan>
                <div className="interface-container">
                    <img
                        className="ipad-project-view"
                        src="/images/learninterface.png"
                    />
                    {/* 1. Save */}
                    <GuideButton
                        name="interface-button-save"
                        index={0}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 0}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-save"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-save"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 2. Stage */}
                    <GuideButton
                        name="interface-button-stage"
                        index={1}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 1}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-stage-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-horizontal-line-stage-1"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-stage-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-horizontal-line-stage-2"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="interface-horizontal-line-stage-3"
                            type="horizontal"
                        />
                    </GuideButton>
                    {/* 3. Presentation Mode */}
                    <GuideButton
                        name="interface-button-presentation-mode"
                        index={2}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 2}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-presentation-mode"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-presentation-mode"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 4. Grid */}
                    <GuideButton
                        name="interface-button-grid"
                        index={3}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 3}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-grid"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-grid"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 5. Change Background */}
                    <GuideButton
                        name="interface-button-add-text"
                        index={4}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 4}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-add-text"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-add-text"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 6. Add Text */}
                    <GuideButton
                        name="interface-button-change-background"
                        index={5}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 5}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-change-background"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-change-background"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 7. Reset Characters */}
                    <GuideButton
                        name="interface-button-reset-characters"
                        index={6}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 6}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-reset-characters"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-reset-characters"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 8. Green Flag */}
                    <GuideButton
                        name="interface-button-green-flag"
                        index={7}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 7}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-green-flag"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-green-flag"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 9. Pages */}
                    <GuideButton
                        name="interface-button-pages"
                        index={8}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 8}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-pages"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-pages"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 10. Project Information */}
                    <GuideButton
                        name="interface-button-project-information"
                        index={9}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 9}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-project-information"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-project-information"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 11. Undo Redo */}
                    <GuideButton
                        name="interface-button-undo-redo"
                        index={10}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 10}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-undo-redo-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-horizontal-line-undo-redo"
                            type="horizontal"

                        />
                        <GuideButtonLine
                            id="interface-vertical-line-undo-redo-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-undo-redo-3"
                            type="vertical"
                        />
                    </GuideButton>
                    {/* 12. Programming Script */}
                    <GuideButton
                        name="interface-button-programming-script"
                        index={11}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 11}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-programming-script-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-horizontal-line-programming-script"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-programming-script-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-programming-script-3"
                            type="vertical"
                        />
                    </GuideButton>
                    {/* 13. Programming Area */}
                    <GuideButton
                        name="interface-button-programming-area"
                        index={12}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 12}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-programming-area"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-dot-programming-area"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 14. Blocks Palette */}
                    <GuideButton
                        name="interface-button-block-palette"
                        index={13}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 13}
                    >
                        <GuideButtonLine
                            id="interface-horizontal-line-blocks-palette"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-blocks-palette-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-blocks-palette-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-blocks-palette-3"
                            type="vertical"
                        />
                    </GuideButton>
                    {/* 15. Block Categories */}
                    <GuideButton
                        name="interface-button-block-categories"
                        index={14}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 14}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-block-categories-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-horizontal-line-block-categories"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-block-categories-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-block-categories-3"
                            type="vertical"
                        />
                    </GuideButton>
                    {/* 16. Characters */}
                    <GuideButton
                        name="interface-button-characters"
                        index={15}
                        onClick={this.handleClick}
                        selected={this.state.currentIndex === 15}
                    >
                        <GuideButtonLine
                            id="interface-vertical-line-characters-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-horizontal-line-characters"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-characters-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="interface-vertical-line-characters-3"
                            type="vertical"
                        />
                    </GuideButton>
                    <div id="right-column">
                        <GuideKey
                            id={this.state.currentIndex + 1}
                            {...interfaceKey[this.state.currentIndex]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
