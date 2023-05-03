import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import App from './App';
import './index.css';

import { Header } from './components/Header';
import MainPage from './app/pages/MainPage';
import AboutPage from './app/pages/AboutPage';
import BlogPage from './app/pages/BlogPage';
import NewsPage from './app/pages/NewsPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>

  <Header/>

  <Routes>
    <Route path="/" element={<App/>}>
      <Route index element={<MainPage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='blog' element={<BlogPage/>}/>
      <Route path='news' element={<NewsPage/>}/>
    </Route>
  </Routes>
  </BrowserRouter>

);
