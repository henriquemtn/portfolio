import React from 'react'
import { Button } from './ui/button'

interface BottomInfoProps {
    projects: string;
    games: string;
    experience: string;
}

export default function BottomInfo({projects, games, experience}: BottomInfoProps) {
  return (
    <div className='flex gap-x-2 pt-8'>
        <Button variant='outline'>
          {projects}
        </Button>
        <Button variant='outline'>
          {games}
        </Button>
        <Button variant='outline'>
          {experience}
        </Button>
      </div>
  )
}
