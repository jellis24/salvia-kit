import Image from 'next/image';
import V1NextFirstSection from '@/src/docs/v1-2/next/sections/first';
import V1NextSecondSection from '@/src/docs/v1-2/next/sections/second';
import V1NextThirdSection from '@/src/docs/v1-2/next/sections/third';
import V1NextFourthSection from '@/src/docs/v1-2/next/sections/fourth';
import V1NextFifthSection from '@/src/docs/v1-2/next/sections/fifth';
import V1NextSixthSection from '@/src/docs/v1-2/next/sections/sixth';
import V1NextSeventhSection from '@/src/docs/v1-2/next/sections/seventh';
import V1NextEighthSection from '@/src/docs/v1-2/next/sections/eighth';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1Next() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image
          src="/svg/nextjs.svg"
          height={70}
          width={70}
          alt="Next.js icon"
        />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <V1NextFirstSection />
      <V1NextSecondSection />
      <V1NextThirdSection />
      <V1NextFourthSection />
      <V1NextFifthSection />
      <V1NextSixthSection />
      <V1NextSeventhSection />
      <V1NextEighthSection />
    </div>
  );
}