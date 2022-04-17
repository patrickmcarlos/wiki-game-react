import React from 'react';
import { sidebarStyle } from './styles';

const Sidebar: React.FC = () => {
    return (
        <div css={sidebarStyle}>
            <h3>The Wiki Game</h3>
            <ul>
                <li>Navigation link</li>
                <li>Navigation link</li>
                <li>Navigation link</li>
                <li>Navigation link</li>
                <li>Navigation link</li>
            </ul>
        </div>
    );
};

export { Sidebar };
