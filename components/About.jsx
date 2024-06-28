import { Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'
import { 
    User2, 
    MailIcon, 
    HomeIcon, 
    PhoneCall, 
    GraduationCap, 
    Calendar,
    Briefcase, 
} from 'lucide-react';
import DevImg from './DevImg';
import Image from 'next'
import Skills from './Skills';

const infoData = [
    {
        icon: <User2 size={20} />,
        text : "Thiha Soe",
    },
    {
        icon: <MailIcon size={20} />,
        text : "thihasoe.soelay@gmail.com",
    },
    {
        icon: <GraduationCap size={20} />,
        text : "BA (English)",
    },
    {
        icon: <GraduationCap size={20} />,
        text : "BSc IT (Web Programming)",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "Myitkyina University",
                qualification: "Bachelor of Arts (English)",
                years: "2011 - 2014"
            },
            {
                university: "European International University",
                qualification: "Bachelor of Science IT (Web Programming)",
                years: "2019 - 2022"
            },
        ]
    },
    {
        title: "experience",
        data: [
            {
                company: "Blazon Group",
                role: "Excuetive Backend Developer",
                years: "2023 - Present"
            },
            {
                company: "COMQUAS",
                role: "Backend Developer",
                years: "2018 - 2023"
            },
            {
                company: "Freelancer",
                role: "Backend Developer",
                years: "2020 - Present"
            },
            {
                company: "Clover Bakery",
                role: "Self-employed",
                years: "2015 - 2017"
            },
        ]
    }
]

export default function About() {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className='py-9'>
        {/* <section className='py-9 xl:h-[860px] pb-12 xl:py-24'> */}
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className='flex flex-col xl:flex-row'>
                    <div className='hidden xl:flex flex-1 relative'>
                    <div className='rounded-full dark:bg-zinc-400 bg-secondary w-[505px] h-[505px] overflow-hidden'>
                            <img 
                                src='/about/profile3.png' 
                                alt='Profile' 
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border-none dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                                    Skills
                                </TabsTrigger>
                            </TabsList>

                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* {Personal} */}
                                <TabsContent value="personal">
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Unmatched Service Quality for Over 5 Years</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            I specialize in crafting intuitive websites with cutting-edge technolody,
                                            delivering dynamic and engaging user experiences. 
                                            Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.
                                        </p>

                                        {/* <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div> */}
                                    </div>
                                </TabsContent>
                                {/* {Qualificatin} */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            My Awesome Journey
                                        </h3>

                                        {/* {Wrapper Exp, Edu} */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* {Experience} */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>

                                                <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'experience').data.map((item, index) => {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>
                                                                    {company}
                                                                </div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                    {role}
                                                                </div>
                                                                <di className="text-base font-medium">
                                                                    {years}
                                                                </di>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                </div>
                                            </div>

                                            {/* {education} */}
                                            <div className='flex flex-col gap-y-6'>

                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap  size={28}/>
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>

                                                <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'education').data.map((item, index) => {
                                                    const {university, qualification, years} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>
                                                                    {university}
                                                                </div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                    {qualification}
                                                                </div>
                                                                <di className="text-base font-medium">
                                                                    {years}
                                                                </di>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>

                                {/* {Skill} */}
                                <TabsContent value="skills">
                                    <div className='text-center xl:text-left'>
                                        {/* <h3 className="h3 mb-8">Skills</h3> */}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            <Skills/>
                                        </div>
                                        {/* <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                            <div className='border-b border-border mb-4'></div>

                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                           <div className='font-medium'>
                                                           {name}
                                                           </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div> */}

                                        {/* {tools} */}
                                        {/* <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                                                Tools
                                            </h4>
                                            <div className='border-b border-border mb-4'></div>

                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {getData(skillData, 'tools').data.map((item, index) => {
                                                    const imgPath = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image 
                                                                src={imgPath} 
                                                                width={48} 
                                                                height={48}
                                                                priority
                                                                alt=''
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div> */}
                                    </div>
                                </TabsContent>

                            </div>
                        </Tabs>
                    </div>

                </div>
            </div>
        </section>
    )
}