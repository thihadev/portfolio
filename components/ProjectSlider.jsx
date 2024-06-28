import Image from 'next/image';
import { 
    Card
} from '@/components/ui/card'

export default function ProjectSlider ({ item, className }) {
  return (
    <>
    <Card className={`m-1 lg:h-[340px] md:h-[380px] sm:h-[400px] h-auto rounded-lg dark:shadow-[0px_0px_2px_0px_#5d5d5d] shadow-[0px_0px_2px_0px_#e2e8f0]`}>
      <div className="block rounded-lg text-center">
        <div className="relative overflow-hidden">
          <div className="mt-8 inset-0 flex items-center justify-center">
            <Image
              alt={item.title}
              src={item.image}
              width={130}
              height={130}
              className="rounded-full shadow-[0px_0px_6px_0px_#e2e8f0]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="text-left z-10 mt-2 pb-5">
            {item.description}
          </div>
          <div className="flex flex-wrap align-bottom gap-1 text-sm text-left">
            {item.languages.map((language, index) => (
              <div key={language} className="z-10">
                <p className="bg-black text-white dark:bg-primary dark:text-secondary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs leading-2">
                  {language}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
    </>
  );
};




// const ProjectData: React.FC<WorkProps> = ({ item, className }) => {
//   return (
//     <div
//       className="card m-2 overflow-hidden shadow-lg border"
//       key={item.title}
//     >
//       <Image
//         src={item.image}
//         alt={`Logo of ${item.title}`}
//         className="w-48 h-48 rounded-t-lg object-cover bg-no-repeat"
//         width={100}
//         height={100}
//         unoptimized
//       />
//       <div className="p-4">
//         <a className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
//           {item.title}
//         </a>
//         <div className=" z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
//           {item.description}
//         </div>
//         <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1 ">
//           {/* {item.tags.map((techStackItem) => (
//             <p
//               className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
//               key={techStackItem}
//             >
//               {techStackItem}
//             </p>
//           ))} */}
//         </div>

//       </div>
//     </div>
//   );
// };