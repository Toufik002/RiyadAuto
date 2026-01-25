import Header from "../components/Header";
import { useI18n } from "../i18n/I18nProvider";
import Hero from "../components/Hero";
import InfiniteSliderBasic from "../components/InfiniteSliderBasic";
import ActionCardsSection from "../components/ActionCardsSection";
import GlowingEffectDemo from "../components/GlowingEffectDemo";
export default function Landing() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <Hero />

      <ActionCardsSection />
      <InfiniteSliderBasic />
      <GlowingEffectDemo />
    </div>
  );
}
