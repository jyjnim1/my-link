import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 lg:p-12 selection:bg-neo-pink selection:text-black">
      
      {/* Header / Nav */}
      <nav className="flex justify-between items-center mb-8 border-4 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
        <div className="text-2xl font-black uppercase tracking-tighter">Yujin Jung</div>
        <a href="mailto:example@example.com" className="bg-neo-yellow border-2 border-black px-4 py-2 font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_#000] transition-all">
          Contact Me
        </a>
      </nav>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Hero & Intro (lg:col-span-8) */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Hero Card */}
          <div className="border-4 border-black bg-neo-sky p-8 md:p-12 shadow-[8px_8px_0px_#000] flex flex-col justify-center relative overflow-hidden group min-h-[400px]">
            <h1 className="text-5xl md:text-7xl font-black mb-4 z-10 leading-none">
              안녕하세요, <br className="hidden md:block"/> 
              <span className="bg-white px-2 mt-2 inline-block border-4 border-black">정유진</span>입니다.
            </h1>
            <p className="text-xl md:text-2xl font-bold mt-6 z-10 max-w-xl bg-neo-yellow inline-block p-2 border-2 border-black w-fit">
              대학교 4학년 • 프론트엔드 개발자 지망생
            </p>
            
             {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neo-pink rounded-full border-4 border-black group-hover:scale-110 transition-transform duration-500 z-0 opacity-80 md:opacity-100 flex items-center justify-center">
                <span className="text-6xl font-black rotate-12">UI/UX</span>
            </div>
            
            <div className="absolute top-10 right-10 w-12 h-12 bg-white border-4 border-black rotate-45 z-0"></div>
            <div className="absolute top-32 right-24 w-6 h-6 bg-neo-blue border-2 border-black rounded-full z-0"></div>
          </div>

          {/* About / Vibe Card */}
          <div className="border-4 border-black bg-white p-6 md:p-10 shadow-[8px_8px_0px_#000]">
            <h2 className="text-3xl font-black mb-4 border-b-4 border-black pb-2 inline-block">About Me</h2>
            <p className="text-lg font-medium leading-relaxed mt-4">
              사용자에게 즐거움을 주는 인터랙티브한 웹을 만드는 것에 관심이 많습니다. 
              명확한 대비와 직관적인 형태를 좋아하며, 사용자 경험을 고민하는 개발자가 되고자 합니다.
              <br/><br/>
              현재 대학교 4학년으로 졸업을 앞두고 있으며, 새로운 기술(Next.js, Tailwind CSS 등)을 배우고 사이드 프로젝트에 적용해보는 과정을 즐기고 있습니다. 언제나 긍정적인 에너지로 문제 해결에 앞장섭니다!
            </p>
          </div>

        </section>

        {/* Right Column: Links & Skills (lg:col-span-4) */}
        <section className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Social Links Matrix */}
          <div className="grid grid-cols-2 gap-4">
            <a href="https://github.com" target="_blank" className="bg-neo-yellow border-4 border-black p-6 flex flex-col items-center justify-center gap-2 shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <span className="text-4xl">🐙</span>
              <span className="font-bold text-lg hidden sm:block">GitHub</span>
            </a>
            <a href="https://instagram.com" target="_blank" className="bg-neo-pink border-4 border-black p-6 flex flex-col items-center justify-center gap-2 shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <span className="text-4xl">📸</span>
              <span className="font-bold text-lg hidden sm:block">Insta</span>
            </a>
            <a href="https://notion.so" target="_blank" className="bg-white border-4 border-black p-6 flex flex-col items-center justify-center gap-2 shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <span className="text-4xl">📓</span>
              <span className="font-bold text-lg hidden sm:block">Notion</span>
            </a>
            <a href="https://linkedin.com" target="_blank" className="bg-neo-blue border-4 border-black p-6 flex flex-col items-center justify-center gap-2 shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <span className="text-4xl">💼</span>
              <span className="font-bold text-lg hidden sm:block">LinkedIn</span>
            </a>
          </div>

          {/* Skills Card */}
          <div className="border-4 border-black bg-neo-green p-6 md:p-8 shadow-[8px_8px_0px_#000] flex-1">
            <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2 inline-block">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[ "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Figma", "Git" ].map((skill) => (
                <span key={skill} className="bg-white border-2 border-black px-3 py-1 font-bold shadow-[2px_2px_0px_#000] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] hover:bg-neo-sky transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-black mt-10 mb-6 border-b-4 border-black pb-2 inline-block">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {[ "Frontend", "UI/UX Design", "Web Animation" ].map((interest) => (
                <span key={interest} className="bg-black text-white border-2 border-black px-3 py-1 font-bold shadow-[2px_2px_0px_#fff]">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-12 border-t-4 border-black pt-6 pb-2 text-sm font-bold flex flex-col md:flex-row justify-between items-center bg-white p-6 border-x-4 border-b-4 shadow-[8px_8px_0px_#000] border-black gap-4">
        <p className="text-lg">© 2026 <span className="underline decoration-wavy decoration-neo-pink decoration-2">Yujin Jung</span>. All rights reserved.</p>
        <p className="bg-black text-white px-3 py-1 -skew-x-12">Built with Next.js & Tailwind CSS</p>
      </footer>

    </div>
  );
}
