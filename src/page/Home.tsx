import Menu from "../component/menu";
import HeroSection from "../component/HeroSection";
import StatsSection from "../component/StatsSection";
import CommandCenterSection from "../component/CommandCenterSection";
import SeamlessSystemSection from "../component/SeamlessSystemSection";
import VideoShowcaseSection from "../component/VideoShowcaseSection";
import PerformanceSection from "../component/PerformanceSection";
import EmergencyDispatcherSection from "../component/EmergencyDispatcherSection";
import TwoWayNotificationSection from "../component/TwoWayNotificationSection";
import PushToTalkSection from "../component/PushToTalkSection";
import PreArrivalSection from "../component/PreArrivalSection";
import LiveFeedSection from "../component/LiveFeedSection";
import VitalSignsSection from "../component/VitalSignsSection";
import ProgressNoteSection from "../component/ProgressNoteSection";
import EMRSection from "../component/EMRSection";
import ReportSection from "../component/ReportSection";
import SummarySection from "../component/SummarySection";
import ProductPackageSection from "../component/ProductPackageSection";
import VideoSection from "../component/VideoSection";
import ComingSoonSection from "../component/ComingSoonSection";
import HospitalPartnersSection from "../component/HospitalPartnersSection";
import ContactFormSection from "../component/ContactFormSection";
import FooterSection from "../component/FooterSection";

export default function Home() {
    return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Menu */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Menu />
        </div>
      </header>

      {/* Main Content - 23 Sections */}
      <main className="flex flex-col pt-20">
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: Stats */}
        <StatsSection />
        
        {/* Section 3: Command Center */}
        <CommandCenterSection />
        
        {/* Section 4: Seamless System */}
        <SeamlessSystemSection />
        
        {/* Section 5: Video Showcase */}
        <VideoShowcaseSection />
        
        {/* Section 6: Performance */}
        <PerformanceSection />
        
        {/* Section 7: Emergency Medical Dispatcher */}
        <EmergencyDispatcherSection />
        
        {/* Section 8: Two-Way Parallel Notification */}
        <TwoWayNotificationSection />
        
        {/* Section 9: Push To Talk */}
        <PushToTalkSection />
        
        {/* Section 10: Pre-Arrival */}
        <PreArrivalSection />
        
        {/* Section 11: Ambulance Live Feed */}
        <LiveFeedSection />
        
        {/* Section 12: Stream Vital Signs & ECG */}
        <VitalSignsSection />
        
        {/* Section 13: Progress Note */}
        <ProgressNoteSection />
        
        {/* Section 14: EMR */}
        <EMRSection />
        
        {/* Section 15: Report */}
        <ReportSection />
        
        {/* Section 16: Summary */}
        <SummarySection />
        
        {/* Section 17: Product Package */}
        <ProductPackageSection />
        
        {/* Section 18: Video Section */}
        <VideoSection />
        
        {/* Section 19: Coming Soon */}
        <ComingSoonSection />
        
        {/* Section 20: Hospital Partners */}
        <HospitalPartnersSection />
        
        {/* Section 21: Contact Form */}
        <ContactFormSection />
        
        {/* Section 22 & 23: Footer (combined) */}
        <FooterSection />
      </main>
    </div>
    );
}