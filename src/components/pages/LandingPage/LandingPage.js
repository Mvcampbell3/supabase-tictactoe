import React, { useState } from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [wasToggled, setWasToggled] = useState(false);

    const toggleDisplayOptions = (state) => {
        console.log('toggle display options');
        setDisplayOptions(state);
        if (!wasToggled) {
            setWasToggled(true);
        }
    };

    return (
        <div className="landing-page-background">
            <div
                className="mouse-enter-leave-container"
                onMouseEnter={() => toggleDisplayOptions(true)}
                onMouseLeave={() => toggleDisplayOptions(false)}
            >
                {displayOptions ? (
                    <div className="main-title-wrapper">
                        <div className="main-title main-title-game">
                            Tic Tac Toe
                        </div>
                    </div>
                ) : (
                    <div className="main-title-wrapper">
                        <div
                            className={`main-title ${
                                !wasToggled ? 'main-title-1' : ''
                            }`}
                        >
                            Would
                        </div>
                        <div
                            className={`main-title ${
                                !wasToggled ? 'main-title-2' : ''
                            }`}
                        >
                            {' '}
                            you
                        </div>
                        <div
                            className={`main-title ${
                                !wasToggled ? 'main-title-3' : ''
                            }`}
                        >
                            {' '}
                            like
                        </div>
                        <div
                            className={`main-title ${
                                !wasToggled ? 'main-title-4' : ''
                            }`}
                        >
                            {' '}
                            to
                        </div>
                        <div
                            className={`main-title ${
                                !wasToggled ? 'main-title-5' : ''
                            }`}
                        >
                            {' '}
                            play
                        </div>
                        <div
                            className={`main-title ${
                                !wasToggled ? 'main-title-6' : ''
                            }`}
                        >
                            {' '}
                            a
                        </div>
                        <div
                            className={`main-title ${
                                !wasToggled ? 'main-title-7' : ''
                            }`}
                        >
                            {' '}
                            game?
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandingPage;
