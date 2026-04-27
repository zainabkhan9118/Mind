import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import Layout from '@/components/common/Layout'
import Home from '@/pages/Home'
import AboutPage from '@/pages/AboutPage'
import FeaturesPage from '@/pages/FeaturesPage'
import ExperiencePage from '@/pages/ExperiencePage'
import Pricing from '@/pages/Pricing'
import ContactPage from '@/pages/ContactPage'
import LearnMore from '@/pages/LearnMore'
import FAQsPage from '@/pages/FAQsPage'
import TermsPage from '@/pages/TermsPage'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage'
import CookiesPolicyPage from '@/pages/CookiesPolicyPage'

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/experiences" element={<ExperiencePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/cookies" element={<CookiesPolicyPage />} />
      </Routes>
    </Layout>
  )
}

export default Router

  