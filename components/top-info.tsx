import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface TopInfoProps {
    bio: string;
}

export default function TopInfo({bio}: TopInfoProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-md">
            <Image
                src="https://avatars.githubusercontent.com/u/92762031?v=4"
                alt="Avatar"
                width={200}
                height={200}
                className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-white py-2">Henrique Silveira</h1>
            <p className="text-center max-w-[75%] text-gray-300">
                {bio}
            </p>
            <div className="flex space-x-4 pt-4">
                <a href="https://github.com/henriquemtn" className="text-gray-200 hover:text-gray-400 transition-all">
                    <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/henriquemtn/" className="text-gray-200 hover:text-gray-400  transition-all">
                    <Linkedin className="h-6 w-6" />
                </a>
            </div>
        </div>
    )
}
