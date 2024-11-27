// /app/[lang]/main.js
"use client";
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainLanguageValueProvider from '../context/MainLanguageValue';

const Main = ({ children }) => {


  return (
    <>
      <MainLanguageValueProvider>
      <Header />
        <main>{children}</main>
        <Footer />
      </MainLanguageValueProvider>
    </>
  );
};

export default Main;
