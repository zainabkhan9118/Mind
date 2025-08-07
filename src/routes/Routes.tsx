import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/common/Layout'
import Home from '@/pages/Home'
import AboutPage from '@/pages/AboutPage'
import FeaturesPage from '@/pages/FeaturesPage'
import ExperiencePage from '@/pages/ExperiencePage'
function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/experiences" element={<ExperiencePage />} />

      </Routes>
    </Layout>
  )
}

export default Router

  