"use client";

import React from 'react'

import ParticlesComponent from '@/components/particles';
import TopInfo from '@/components/top-info';
import BottomInfo from '@/components/bottom-info';

export default function PortuguesePage() {
  return (
    <div className="relative text-center flex flex-col items-center justify-center min-h-screen">
      <ParticlesComponent id="particles" />
      <TopInfo bio='Desenvolvedor FullStack apaixonado por desenvolver projetos web e games atrativos.' />
      <BottomInfo projects='Projetos' games='Jogos' experience='Experiência' />
    </div>
  )
}
