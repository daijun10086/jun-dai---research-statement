
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, GraduationCap, Microscope, Cpu, Globe, Camera, ArrowRight, Brain, Zap, Image as ImageIcon, Film, Activity, Waves, Building2, Briefcase, Landmark, Layers } from 'lucide-react';

/**
 * --- 资产配置 (您可以直接在这里修改图片路径) ---
 * 建议将图片放在 public/assets/ 文件夹下
 */
const CONFIG = {
  profile: {
    name: "Jun Dai",
    website: "https://daijun10086.github.io/",
  },
  logos: {
    zju: "/jun-dai---research-statement/assets/logos/zju-logo.png",
    huawei: "/jun-dai---research-statement/assets/logos/huawei-logo.png",
    shlab: "/jun-dai---research-statement/assets/logos/ai-lab-logo.png",
    ur: "/jun-dai---research-statement/assets/logos/UR-logo.png",
    tju: "/jun-dai---research-statement/assets/logos/tju-logo.png",
  },
  figures: {
    visualComputing: "/jun-dai---research-statement/assets/images/visual_computing_new.png",
    unControllability: "/jun-dai---research-statement/assets/images/un-contralability.png",
    generativeAdaptation: "/jun-dai---research-statement/assets/images/generative-adaption-new.png",
  }
};

// --- Types & Interfaces ---
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

// --- 通用 Logo 组件 (带回退机制) ---
const AffiliationLogo: React.FC<{ src: string; fallback: React.ReactNode; title: string; label: string }> = ({ src, fallback, title, label }) => (
  <div className="flex flex-col items-center group cursor-default" title={title}>
    <div className="w-16 h-16 flex items-center justify-center transition-all group-hover:scale-110 duration-500">
      <img 
        src={src} 
        alt={title} 
        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
          (e.target as HTMLImageElement).parentElement!.classList.add('show-fallback');
        }}
      />
      <div className="hidden fallback-icon group-hover:text-stone-900 text-stone-300 transition-colors">
        {fallback}
      </div>
    </div>
    <span className="sans text-[10px] uppercase tracking-widest text-stone-400 mt-3 font-black group-hover:text-stone-800 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
      {label}
    </span>
    <style>{`.show-fallback .fallback-icon { display: block; }`}</style>
  </div>
);

// --- Visual Computing Diagram Component (Figure 1) ---
const VisualComputingDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white border border-stone-100 rounded-2xl p-4 md:p-8 my-12 shadow-sm animate-fade-in overflow-x-auto">
      <div className="min-w-[800px] relative pt-12">
        <div className="absolute top-0 left-[10%] right-[10%] h-12">
          <div className="w-full h-full relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 sans text-[10px] uppercase tracking-widest font-bold text-stone-400 bg-white px-4 z-10">Interaction</div>
            <svg className="w-full h-full" viewBox="0 0 800 40" fill="none">
              <path d="M720 30 C 720 0, 80 0, 80 30" stroke="url(#grad-top)" strokeWidth="3" fill="none" strokeDasharray="6 4" />
              <path d="M75 25 L 80 35 L 85 25" stroke="#94a3b8" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex flex-col items-center p-4 bg-cyan-50/50 rounded-xl border border-cyan-100">
            <Camera className="text-cyan-600 mb-3" size={32} />
            <h4 className="sans text-xs font-bold text-cyan-900 text-center uppercase tracking-tight mb-2">Capture RAW<br/>Visual Information</h4>
            <div className="text-[10px] text-cyan-700/70 sans text-center leading-tight">RGB cam<br/>Event cam<br/>Eye<br/>...</div>
          </div>
          <ArrowRight className="text-stone-300 shrink-0" size={20} />
          <div className="flex-[1.5] border-2 border-dashed border-stone-200 rounded-xl p-4 relative">
            <div className="absolute -top-3 left-4 bg-white px-2 sans text-[10px] font-bold text-stone-400 uppercase tracking-widest">Visual Data</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center"><ImageIcon size={18} className="text-indigo-400 mb-1" /><span className="text-[9px] sans text-stone-500">RGB Images</span></div>
              <div className="flex flex-col items-center"><Film size={18} className="text-indigo-400 mb-1" /><span className="text-[9px] sans text-stone-500">RGB Videos</span></div>
              <div className="flex flex-col items-center"><Activity size={18} className="text-indigo-400 mb-1" /><span className="text-[9px] sans text-stone-500">Event Stream</span></div>
              <div className="flex flex-col items-center"><Waves size={18} className="text-indigo-400 mb-1" /><span className="text-[9px] sans text-stone-500">Spectrum</span></div>
            </div>
          </div>
          <ArrowRight className="text-stone-300 shrink-0" size={20} />
          <div className="flex-1 flex flex-col items-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
            <div className="relative mb-3"><Cpu className="text-blue-600" size={32} /><Zap size={14} className="absolute -top-1 -right-1 text-yellow-500 fill-yellow-500" /></div>
            <h4 className="sans text-xs font-bold text-blue-900 text-center uppercase tracking-tight mb-2">Extract Visual<br/>Information</h4>
            <div className="text-[10px] text-blue-700/70 sans text-center leading-tight">Computer Vision<br/>algorithms</div>
          </div>
          <ArrowRight className="text-stone-300 shrink-0" size={20} />
          <div className="flex-1 flex flex-col items-center p-4 bg-purple-50/50 rounded-xl border border-purple-100">
            <Brain className="text-purple-600 mb-3" size={32} />
            <h4 className="sans text-xs font-bold text-purple-900 text-center uppercase tracking-tight mb-2">Inference the<br/>Physical World</h4>
            <div className="text-[10px] text-purple-700/70 sans text-center leading-tight">Predict Physical<br/>Properties</div>
          </div>
        </div>
        <defs>
          <linearGradient id="grad-top" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#9333ea" /></linearGradient>
        </defs>
      </div>
      <p className="mt-6 text-xs text-stone-400 italic text-center sans px-4 leading-relaxed">
        Figure 1: The overall pipeline and concept of visual computing. Visual information will be captured, transported, processed, extracted and finally utilized to infer properties of the physical world.
      </p>
    </div>
  );
};

// --- Navbar ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Introduction', href: '#intro' },
    { name: 'Past Research', href: '#past' },
    { name: 'Roadmap', href: '#future' },
    { name: 'Impact', href: '#impact' },
    { name: 'References', href: '#references' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200' : 'bg-transparent'}`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="sans font-bold tracking-tight text-stone-800 uppercase">{CONFIG.profile.name}</span>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="sans text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors font-bold">{link.name}</a>
          ))}
        </div>
        <button className="md:hidden text-stone-800" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (<a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="sans text-sm tracking-wide text-stone-600 px-6 py-2 font-medium">{link.name}</a>))}
        </div>
      )}
    </nav>
  );
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="py-20 md:py-32 animate-fade-in">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="sans text-4xl md:text-5xl font-black tracking-tighter text-stone-900 uppercase mb-16 border-b-4 border-stone-100 pb-6">{title}</h2>
      {children}
    </div>
  </section>
);

const Figure: React.FC<{ src: string; caption: string; alt?: string }> = ({ src, caption, alt }) => (
  <figure className="my-16 group animate-fade-in">
    <div className="overflow-hidden rounded-3xl bg-stone-50 border border-stone-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <img 
        src={src} 
        alt={alt || caption} 
        className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://placehold.co/1200x600/f8f9fa/adb5bd?text=Visual+Reference+Needed';
        }} 
      />
    </div>
    <figcaption className="mt-6 text-sm text-stone-400 italic text-center max-w-2xl mx-auto px-4 leading-relaxed font-medium">{caption}</figcaption>
  </figure>
);

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen selection:bg-stone-200">
      <Navbar />

      <header id="intro" className="pt-48 pb-20 px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-stone-900 leading-[1.0] mb-12 tracking-tighter">Bridging Generative Modeling and Visual Computing</h1>
          <div className="flex flex-col items-center justify-center gap-12">
            <a href={CONFIG.profile.website} target="_blank" rel="noopener noreferrer" className="sans text-4xl font-extrabold text-stone-800 tracking-tighter hover:text-stone-500 transition-all duration-300 border-b-2 border-transparent hover:border-stone-200 pb-1">{CONFIG.profile.name}</a>
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center gap-4"><span className="h-px w-16 bg-stone-100"></span><span className="sans text-sm text-stone-400 tracking-[0.4em] uppercase font-black">University of Rochester</span><span className="h-px w-16 bg-stone-100"></span></div>
              <div className="flex items-center justify-center gap-10 md:gap-16 py-8 px-12 md:px-20 bg-stone-50/40 border border-stone-100 rounded-full shadow-inner backdrop-blur-md">
                <AffiliationLogo src={CONFIG.logos.tju} fallback={<Landmark size={48} />} title="Tianjin University" label="TJU" />
                <AffiliationLogo src={CONFIG.logos.zju} fallback={<Landmark size={48} />} title="Zhejiang University" label="ZJU" />
                <AffiliationLogo src={CONFIG.logos.huawei} fallback={<Briefcase size={48} />} title="Huawei" label="Huawei" />
                <AffiliationLogo src={CONFIG.logos.shlab} fallback={<Building2 size={48} />} title="Shanghai AI Laboratory" label="SH Lab" />
                <AffiliationLogo src={CONFIG.logos.ur} fallback={<GraduationCap size={48} />} title="University of Rochester" label="Rochester" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-3xl mx-auto px-6">
          <p className="academic-p first-letter:text-7xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-stone-900 first-letter:mt-2 first-letter:serif">Visual computing is a profound multidisciplinary field that essentially explores how to efficiently acquire the maximum amount of useful visual information, transmit it through compact modules, and infer the intrinsic properties of the objective world. At its core, this process mirrors one of the most fundamental ways humans and animals interact with and learn from their environment.</p>
          <p className="academic-p">Historically, the classical computer vision paradigm has predominantly focused on information extraction. Researchers sought to empower machines with human-like perception by distilling physical laws from sensor-acquired data. However, for a long period, the community’s focus remained less on the information acquisition process itself. While we initially attempted to mimic the biological eye when designing cameras, inherent manufacturing complexities and power constraints made it difficult to achieve a comparable density of information capture.</p>
          <Figure src={CONFIG.figures.visualComputing} caption="Figure 1: The overall pipeline and concept of visual computing. Visual information will be captured, transported, processed, extracted and finally utilized to infer properties of the physical world." />
          <p className="academic-p">This bottleneck gave rise to computational imaging and photography, which demonstrated that co-designing physical acquisition devices for specific tasks could capture significantly more informative data, thereby drastically reducing the difficulty of downstream inference. This evolution underscored a vital principle: richer information acquisition is the prerequisite for more efficient processing.</p>
          <p className="academic-p">Despite the success of hardware-software co-design in tasks like depth sensing and hyperspectral imaging, a significant challenge remains: the lack of generalization. Designing bespoke physical hardware for every unique visual task is prohibitively expensive and lacks cross-domain flexibility. To overcome this, I propose that <strong>Deep Generative Models (DGMs)</strong> represent a transformative, universal, and highly generalizable "Information Engine." By learning the high-dimensional distributions of visual data, DGMs internalize the intrinsic properties of the world—such as lighting, geometry, and semantics—which can serve as a "virtual information source" to supplement physical sensors.</p>
          <p className="academic-p">In my research, I aim to explore how to accurately extract task-specific information from pre-trained generative models and how to design next-generation generative frameworks that provide greater "information gain" for visual computing. I am firmly convinced that this paradigm will not only catalyze a leap forward in visual perception but also provide new insights for broader scientific disciplines, ultimately driving profound societal progress.</p>
        </div>

        <Section id="past" title="Past Research Overview">
          <p className="academic-p italic text-stone-500 mb-16 border-l-4 border-stone-100 pl-10 text-xl font-light leading-relaxed">My research journey is rooted in a fundamental fascination with how visual information is captured, transmitted, and processed. With a multi-disciplinary background in Optoelectronic Information Science and Engineering, I view the visual computing pipeline not merely as a set of algorithms, but as a holistic system where physical constraints and computational priors must be synergistically optimized.</p>
          
          <div className="space-y-24 mt-16">
            <div className="group">
              <div className="flex items-center gap-6 mb-8"><div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-all duration-500"><Cpu size={28} className="text-stone-400 group-hover:text-cyan-600" /></div><h3 className="sans font-bold text-stone-800 text-2xl uppercase tracking-widest">Phase I: Accelerating Inference via Optical Computing</h3></div>
              <p className="academic-p">Early in my career at Zhejiang University and Huawei, I focused on the "efficiency" of the information extraction module. Recognizing that traditional silicon-based architectures struggle with the escalating power demands of AI models, I explored <strong>Optical Analog Computing</strong> to accelerate neural network inference. My work involved designing low-power convolutional neural networks (CNNs) using on-chip 4F systems [1, 6] and wavelength-routing architectures [2, 3]. These projects demonstrated that optical-layer processing can significantly reduce energy consumption while maintaining high throughput for large-scale visual data.</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-6 mb-8"><div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-all duration-500"><Microscope size={28} className="text-stone-400 group-hover:text-indigo-600" /></div><h3 className="sans font-bold text-stone-800 text-2xl uppercase tracking-widest">Phase II: Enhancing Acquisition via Hardware-Algorithm Co-design and Multi-modal Sensing</h3></div>
              <p className="academic-p">While accelerating processing is vital, I soon realized that the quality of downstream inference is fundamentally capped by the information density of the initial acquisition. This shift in perspective led me to explore <strong>Active Information Acquisition</strong> at the Shanghai AI Laboratory. I pioneered a framework for "Tolerance-Aware Deep Optics," which utilizes differentiable simulation to jointly optimize hardware parameters and reconstruction algorithms while accounting for manufacturing errors [4, 5]. This approach ensured that the maximum amount of task-specific information is captured at the sensor level. Furthermore, to push the boundaries of 3D/4D reconstruction in dynamic environments [7, 8], I integrated Event Cameras to capture high-temporal-resolution motion cues that are inaccessible to traditional RGB sensors. By developing asynchronous event-assisted algorithms, I achieved high-fidelity reconstruction even under extreme motion blur. These experiences solidified my conviction: high-efficiency visual computing begins with the intelligent acquisition of rich information.</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-6 mb-8"><div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 group-hover:bg-purple-50 group-hover:border-purple-100 transition-all duration-500"><GraduationCap size={28} className="text-stone-400 group-hover:text-purple-600" /></div><h3 className="sans font-bold text-stone-800 text-2xl uppercase tracking-widest">Transition: Toward Generative Information Engines</h3></div>
              <p className="academic-p">Currently, as a Ph.D. student at the University of Rochester, I am pivoting toward Deep Generative Models. I believe generative modeling represents the ultimate "Information Engine," capable of providing general world priors that transcend the limitations of physical hardware. My past experiences in hardware-software synergy have prepared me to bridge the gap between these powerful generative priors and specialized visual computing tasks—a goal I pursue with a solid technical foundation in both the physical and neural domains.</p>
            </div>
          </div>
        </Section>

        <Section id="future" title="Future Research Roadmap">
          <div className="space-y-24">
            <div>
              <h4 className="text-3xl font-bold mb-10 text-stone-900 italic serif tracking-tight">1. Advancing Generative Foundations: Efficiency, Controllability, and Physical Consistency</h4>
              <p className="academic-p">The premise of utilizing deep generative models as a transformative "Information Engine" is built upon their capacity to internalize the underlying distributions of vast visual datasets. To effectively harness these data-driven priors, the generative foundations themselves must be robust, efficient, and highly controllable. A "good" generative model should not only synthesize high-dimensional visual data but also provide a transparent and manipulable interface to its learned knowledge.</p>
              <p className="academic-p">Currently, despite the photorealistic synthesis capabilities of Diffusion Models and Flow Matching, several fundamental bottlenecks remain. First, sampling efficiency remains a prohibitive factor; the iterative nature of these models often forces a compromise between generation quality and computational throughput. My research investigates these models from a statistical perspective, analyzing ODE/SDE trajectories to optimize sampling efficiency and significantly reduce the number of function evaluations (NFE) required for high-quality synthesis.</p>
              <p className="academic-p">Second, current models lack causal interpretability and precise controllability over their latent variables. This limitation confines generative models primarily to the domain of AIGC (AI-Generated Content), preventing them from serving as rigorous simulators in scientific fields. Without the ability to manipulate underlying physical or semantic variables with precision, we cannot treat these models as reliable information sources for rigorous inference.</p>
              <p className="academic-p">Finally, I aim to tackle the challenge of physical consistency. It is imperative to distinguish whether a model has truly learned the laws of physics or has simply learned to "deceive" the human eye with visually plausible but physically grounded results. My objective is to explore the mechanisms by which generative models perceive physical properties and to design next-generation frameworks that are physically grounded. Only by achieving efficiency, controllability, and physical integrity can generative models truly function as impactful engines for visual computing and broader scientific discovery.</p>
            </div>

            <Figure src={CONFIG.figures.unControllability} caption="Figure 2: The controllability of generative models is extremely low. Input two prompts with only the difference in puppy or tiger, however, the visual content entirely changed." />

            <div>
              <h4 className="text-3xl font-bold mb-10 text-stone-900 italic serif tracking-tight">2. Precision Alignment: Automated Distillation of Generative Priors for Vision Tasks</h4>
              <p className="academic-p">The ambition of my research transcends the use of generative models as mere creative tools for the entertainment industry. Instead, I envision these models as a high-dimensional, universal data prior—represented as {'$x \\sim P_{data}(x)$'}—that serves as a fundamental information source for visual computing. Unlike hand-crafted priors of the past, these data-driven distributions are more expressive and more aligned with the complexity of the physical world, offering unprecedented potential for information augmentation.</p>
              <p className="academic-p">However, the core challenge lies in precision alignment: how to adapt these general-purpose priors to specialized tasks without compromising physical integrity. Generative models today function as "general experts"—they possess a vast understanding of global visual intrinsics but lack awareness of domain-specific constraints. For instance, in scientific imaging tasks such as lensless imaging, a generative model might "hallucinate" or modify fine details to enhance visual quality. For rigorous measurement tasks, such unconstrained modifications to objective physical reality are unacceptable.</p>
              <p className="academic-p">My research aims to develop automated mechanisms to efficiently distill and adapt generative knowledge to specialized fields including computational imaging, material science, and biology. I propose to explore constraint-aware adaptation frameworks that allow us to leverage the rich priors of generative models while strictly adhering to the physical and scene-specific boundaries of the target task. By establishing an automated pipeline for information extraction and alignment, we can ensure that generative priors are utilized within a "validity envelope," facilitating a transformative chemical reaction between generative modeling and broader scientific disciplines.</p>
            </div>

            <Figure src={CONFIG.figures.generativeAdaptation} caption="Figure 3: Task-Specific Adaptation of Generative Priors. General data distributions internalized by generative models serve as a universal information source. These priors are refined and aligned with specialized visual computing disciplines to respect unique physical boundaries and geometric constraints." />

            <div>
              <h4 className="text-3xl font-bold mb-10 text-stone-900 italic serif tracking-tight">3. A Universal Paradigm for Scientific Discovery: Generative Modeling Beyond Visual Data</h4>
              <p className="academic-p">In this final research direction, I aim to extend the generative modeling paradigm to a broader spectrum of theoretical and engineering disciplines. At its essence, generative modeling is a sophisticated statistical learning framework for high-dimensional probability density estimation. Although its most prominent successes to date have been in visual data synthesis, its underlying principles are universally applicable across scientific domains. The primary distinction lies not in the methodology, but in the specific data distributions and the physical laws they must obey.</p>
              <p className="academic-p">For instance, consider the Finite Element Method (FEM), which is fundamental to engineering simulations. One can envision a powerful generative model that internalizes the governing differential equations of a physical system. By treating boundary conditions as conditioning variables—analogous to prompts in image generation—such a model could directly synthesize simulation results through forward generation. This is theoretically grounded in the fact that generative models, particularly Flow Matching and Diffusion models, essentially learn a probability flow ODE to transport samples from a base distribution to the target manifold.</p>
              <p className="academic-p">Broadening the application of generative modeling to data-scarce or noisy scientific domains presents significant challenges, necessitating the development of more robust and data-efficient learning algorithms, as outlined in my first research objective. Ultimately, I believe that generative modeling represents a fundamental paradigm shift in scientific inquiry. It is my goal to evolve these models far beyond their current role as tools for visual content creation, transforming them into a universal engine for cross-disciplinary discovery and simulation.</p>
            </div>
          </div>
        </Section>

        <Section id="impact" title="Vision & Impact">
          <div className="bg-stone-900 text-stone-100 p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-1000"><Globe size={160} /></div>
            <h3 className="text-4xl md:text-5xl font-light mb-12 text-white serif tracking-tight">Toward a Generative-Informed Paradigm</h3>
            <p className="academic-p text-xl text-stone-300 leading-relaxed mb-8">The ultimate goal of my research is to catalyze a paradigm shift in visual computing by establishing Deep Generative Models as universal "Information Engines" that transcend the inherent limitations of physical sensors.</p>
            <p className="academic-p text-xl text-stone-300 leading-relaxed mb-12">Ultimately, this work seeks to democratize high-performance perception and discovery, moving toward a future where generalized, software-defined information engines replace bespoke, costly hardware to solve critical challenges in healthcare, autonomous systems, and broader scientific inquiry.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-12 border-t border-stone-800">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-800 rounded-2xl text-stone-400"><Globe size={28} /></div>
                <div>
                  <h5 className="sans text-xs font-black uppercase tracking-[0.2em] text-white mb-3">Global Impact</h5>
                  <p className="text-sm text-stone-500 sans leading-relaxed font-medium">Democratizing high-performance perception across healthcare and autonomous systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-800 rounded-2xl text-stone-400"><Layers size={28} /></div>
                <div>
                  <h5 className="sans text-xs font-black uppercase tracking-[0.2em] text-white mb-3">Scientific Discovery</h5>
                  <p className="text-sm text-stone-500 sans leading-relaxed font-medium">Replacing bespoke, costly hardware with software-defined information engines.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="references" title="References">
          <div className="space-y-10 academic-p text-[1.05rem] serif">
            {[
              { id: 1, text: "Dai, J., Dong, X., Li, C., and He, J.-J. (2023). \"On-chip 4F-system based on concave mirrors for optical neural networks.\" Holography, Diffractive Optics, and Applications XIII. SPIE." },
              { id: 2, text: "Cheng, J., Li, C., Dai, J., et al. (2024). \"Direct optical convolution computing based on arrayed waveguide grating router.\" Laser & Photonics Reviews." },
              { id: 3, text: "Cheng, J., Li, C., Dai, J., et al. (2024). \"First experimental demonstration of optical convolution computing based on wavelength routing.\"" },
              { id: 4, text: "Dai, J., Chen, L., Yang, X., Hu, Y., Gu, J., and Xue, T. (2025). \"Tolerance-Aware Deep Optics.\" arXiv:2502.04719." },
              { id: 5, text: "Chen, L., Li, Y., Dai, J., Gu, J., and Xue, T. (2025). \"A Physics-Informed Blur Learning Framework for Imaging Systems.\" CVPR." },
              { id: 6, text: "Fan, L., Long, X., Dai, J., et al. (2023). \"Optical–electronic hybrid Fourier convolutional neural network.\"" },
              { id: 7, text: "Dai, J., et al. (2025). \"AsyncEvGS: Asynchronous Event-Assisted Gaussian Splatting.\" Under review." },
              { id: 8, text: "Dai, J., et al. (2025). \"4D E-SloMo: 4D Reconstruction for High Speed Scene.\"" }
            ].map(ref => (
              <div key={ref.id} className="pl-10 -indent-10 leading-relaxed group">
                <span className="text-stone-300 font-bold mr-2 group-hover:text-stone-900 transition-colors">[{ref.id}]</span> {ref.text}
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="py-32 border-t border-stone-100 mt-32 bg-stone-50/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="sans text-[11px] text-stone-300 uppercase tracking-[0.5em] font-black mb-10">{CONFIG.profile.name} · Ph.D. Candidate · 2025</p>
          <div className="flex flex-wrap justify-center gap-12">
            <a href={CONFIG.profile.website} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors uppercase sans text-[10px] tracking-widest font-black border-b border-transparent hover:border-stone-400 pb-1">Personal Website</a>
            {['GitHub', 'Google Scholar', 'Twitter', 'Contact'].map(link => (
              <a key={link} href="#" className="text-stone-400 hover:text-stone-900 transition-colors uppercase sans text-[10px] tracking-widest font-black border-b border-transparent hover:border-stone-400 pb-1">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-12 right-12 p-5 bg-stone-900 text-white rounded-full shadow-2xl hover:bg-stone-700 transition-all animate-fade-in z-50 group scale-110">
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default App;
