import NextIcon from '@/src/components/icons/next';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import ComponentsSection from '@/src/docs/common/components';
import V9NextFirstSection from '@/src/docs/v9/next/sections/first';
import V9NextThirdSection from '@/src/docs/v9/next/sections/third';
import V9NextReactSecondSection from '@/src/docs/v9/shared/secondSection';
import { V9ReactNextFifthSection } from '@/src/docs/v9/shared/fifthSection';

export default function DocV9Next() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <NextIcon className="mt-2 w-20 h-12" />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <V9NextFirstSection />
      <V9NextReactSecondSection />
      <V9NextThirdSection />
      <LintersSection />
      <V9ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
