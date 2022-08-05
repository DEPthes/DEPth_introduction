import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/page/about';
import { Contact } from './components/page/contact';
import { Member } from './components/page/member';
import { Project } from './components/page/project';
import { Header } from './components/header/Header';

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
