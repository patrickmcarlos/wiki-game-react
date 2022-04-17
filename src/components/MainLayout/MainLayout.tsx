import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../NavigationBar';
import { Sidebar } from '../Sidebar';
import { bodyStyle, contentStyle, mainLayoutStyle } from './styles';

const MainLayout = () => {
    return (
        <div css={mainLayoutStyle}>
            <Sidebar />
            <div css={bodyStyle}>
                <NavigationBar />
                <div css={contentStyle}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export { MainLayout };
