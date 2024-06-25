'use client';
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { useTheme } from 'next-themes'

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <MoonIcon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                <SunIcon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            </Button>
        </div>
        
    );
}