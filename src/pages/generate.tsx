import type { NextPage } from 'next';
import StoryGenerator from '../components/StoryGenerator';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GeneratePage: NextPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <Image
        src="/images/bg_2.jpg"
        alt="Background"
        fill
        className="object-cover fixed inset-0 -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/50 -z-10" /> {/* Dark overlay */}
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8 pt-28">
          <div className="max-w-4xl mx-auto">
            <StoryGenerator />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GeneratePage;
