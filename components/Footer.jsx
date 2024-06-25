import Socials from './Socials'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Footer() {
    return (
        <footer className='py-2 items-baseline text-center sm:text-center'>
            <div className="mx-auto px-1">
                <div className='flex flex-col items-center sm:text-center justify-between'>
                    {/* <Socials 
                        containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' 
                        iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
                    /> */}

                    <div className="flex items-center text-muted-foreground mb-2">
                        <ImQuotesLeft className="inline-block mr-2" />
                        <span>it's not a bug, it's an undocumented feature</span>
                        <ImQuotesRight className="inline-block ml-2" />
                    </div>
                </div>
            </div>
        </footer>
    )
}