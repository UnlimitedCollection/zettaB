import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout/Layout';
import { PageTransition } from './components/PageTransition';
import { Work } from './pages/Work';
import { Home } from './pages/Home';
import { UIKit } from './pages/UIKit';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { Methodology } from './pages/Methodology';
import { StrategicInsights } from './pages/StrategicInsights';
import { ArticleDetail } from './pages/ArticleDetail';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

import { CustomCursor } from './components/CustomCursor/CustomCursor';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/web-development" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/work/scaling-momentum" element={<PageTransition><CaseStudyPage /></PageTransition>} />
          <Route path="/methodology" element={<PageTransition><Methodology /></PageTransition>} />
          <Route path="/insights" element={<PageTransition><StrategicInsights /></PageTransition>} />
          <Route path="/insights/:slug" element={<PageTransition><ArticleDetail /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/ui-kit" element={<PageTransition><UIKit /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
