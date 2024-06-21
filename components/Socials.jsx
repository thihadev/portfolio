'use client';
import Link from 'next/link';
import {
    RiGithubFill,
    RiLinkedinFill,
    RiDiscordFill
} from 'react-icons/ri'

const icons = [
    {
        path : 'https://github.com/thihadev',
        name : <RiGithubFill />
    },
    {
        path : 'https://www.linkedin.com/in/thiha-soe-3826ab153/',
        name : <RiLinkedinFill />
    },
    {
        path : 'https://discordapp.com/users/thiha7111',
        name : <RiDiscordFill />
    },
];

export default function Socials( { containerStyles, iconsStyles }) {
    return (
        <div className={`${containerStyles}`}>
            { icons.map((icon, index) => {
                return (
                    <Link target="_blank" href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                );
            }) }
        </div>
    )
}