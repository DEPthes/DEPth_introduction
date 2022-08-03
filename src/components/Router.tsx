import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './page/about';
import { Contact } from './page/contact';
import { Member } from './page/member';
import { Project } from './page/project';
import { Header } from './header/Header';

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Member" element={<Member />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    );
};
