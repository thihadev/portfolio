import { Button } from './ui/button'
import Link from 'next/link'
import { LuMail } from 'react-icons/lu';

export default function Cta() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:thihasoe.soelay@gmail.com'; // Replace with your email address
      };

    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className='h2 max-w-xl text-center mb-5'>
                        Prepared to turn your ideas into reality?
                        I'm here to help.
                    </h2>
                    <div onClick={handleEmailClick} className="iconContainer">
                        <LuMail size={50} className="icon wave dark:text-white" />
                    </div>
                </div>
            </div>
        </section>
    )
}