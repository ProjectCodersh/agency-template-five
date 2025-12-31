import { lazy, Suspense, memo } from 'react';

const AppShowcaseSection = lazy(
  () => import('../Components/ShopifySingleSection/AppShowcaseSection')
);

const FeatureDocumentationSection = lazy(
  () => import('../Components/ShopifySingleSection/FeatureDocumentationSection')
);

const TrendingSections = lazy(() => import('../Components/ShopifySingleSection/TrendingSections'));

function ShopifySingleSection() {
  return (
    <main>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <AppShowcaseSection />
        <FeatureDocumentationSection />
        <TrendingSections />
      </Suspense>
    </main>
  );
}

export default memo(ShopifySingleSection);
