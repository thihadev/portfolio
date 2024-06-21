import Image from 'next/image'

export default function DevImg({containerStyles, imgSrc}) {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} alt='Thiha soe' fill priority/>
        </div>
    )
}