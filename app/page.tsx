"use client";

import React from 'react'

import ParticlesComponent from '../components/particles'
import TopInfo from '@/components/top-info';
import BottomInfo from '@/components/bottom-info';

export default function Home() {
  return (
    <div className="relative text-center flex flex-col items-center justify-center min-h-screen">
      <ParticlesComponent id="particles" />
      <TopInfo bio='FullStack developer passionate about developing attractive web projects and games.' />
      <BottomInfo projects='Projects' games='Games' experience='Experience' />
    </div>
  )
}
