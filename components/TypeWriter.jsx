import { TypeAnimation } from 'react-type-animation';

export default function TypeWriter() {
    return (
        <TypeAnimation
            sequence={[
                'Backend Developer',
                1000,
                'Freelancer',
                1000,
            ]}
            preRenderFirstString={true}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    );
}
