import React, { useState, useEffect } from 'react';
import { Shield, Calendar, Monitor, DollarSign, CheckCircle, Star, Users, TrendingUp, Award, Zap, Target, Clock, HelpCircle, Video, Wallet, Flame } from 'lucide-react';

function App() {
  const [counters, setCounters] = useState({ students: 0, earnings: 0, days: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasTrackedViewContent, setHasTrackedViewContent] = useState(false);
  const [tomorrowDate, setTomorrowDate] = useState('');

  useEffect(() => {
    // Calcular data de amanhã
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const day = tomorrow.getDate().toString().padStart(2, '0');
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0');
    
    setTomorrowDate(`${day}/${month}`);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasTrackedViewContent && window.scrollY > 100) {
        trackViewContent();
        setHasTrackedViewContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTrackedViewContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { students: 322, earnings: 2500, days: 30 };
    const duration = 2000; // 2 segundos
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(targets.students * progress),
        earnings: Math.floor(targets.earnings * progress),
        days: Math.floor(targets.days * progress)
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, stepDuration);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBonus = () => {
    const bonusSection = document.getElementById('bonus-section');
    bonusSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const redirectToHotmart = () => {
    window.open('https://pay.hotmart.com/P101688243T', '_blank');
  };

  const trackLead = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  const trackClickBotaoCheckout = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ClickBotaoCheckout');
    }
  };

  const trackViewContent = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent');
    }
  };

  const handleLeadButton = () => {
    trackLead();
    scrollToBonus();
  };

  const handleCheckoutButton = (url: string) => {
    trackClickBotaoCheckout();
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Apenas Imagem */}
      <section 
        className="h-48 md:h-72 flex items-center justify-center bg-contain bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('https://i.imgur.com/xrfioQw.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
        
      </section>

      {/* Content Section - Copy Principal */}
      <section id="content-section" className="py-12 bg-gradient-to-b from-white via-gray-50/50 to-white relative -mt-16 border-t-2 border-[#00C853] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
        
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00C853]/5 to-[#00E676]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#00E676]/5 to-[#00C853]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-100 to-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-bold mb-2 border border-green-200 shadow-lg animate-pulse">
              <Flame className="w-3 h-3" />
              ÚLTIMAS HORAS - Preço sobe amanhã ({tomorrowDate})
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-700 max-w-4xl mx-auto font-semibold">
            Uma imersão sobre o serviço digital mais necessário do mercado. Aqui você vai aprender como 
            <strong className="gradient-text"> multiplicar sua renda em pelo menos 2x</strong> e construir uma 
            transição de carreira segura, trabalhando <strong className="gradient-text">100% online</strong>.
          </p>
          
          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-[#00C853]/20 hover:border-[#00C853]/40">
              <Calendar className="w-8 h-8 text-[#00C853] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-bold text-gray-900">27 de Setembro</p>
              <p className="text-sm text-gray-600">2025</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-[#00C853]/20 hover:border-[#00C853]/40">
              <Monitor className="w-8 h-8 text-[#00C853] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-bold text-gray-900">100% Online</p>
              <p className="text-sm text-gray-600">Ao vivo</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-[#00C853]/20 hover:border-[#00C853]/40">
              <DollarSign className="w-8 h-8 text-[#00C853] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-bold text-gray-900">R$ 69,90</p>
              <p className="text-sm text-gray-600">Investimento</p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-12 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#00C853]/30">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 gradient-text leading-tight">
              "Mesmo começando do zero você pode ir longe."
            </h2>
            
            <div className="text-lg md:text-xl leading-relaxed space-y-6 text-gray-700 max-w-3xl mx-auto">
              <p className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
                Você não precisa de seguidores, fama ou promessas milagrosas.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
                Na Imersão Minha Profissão Digital, vou te mostrar, na prática, como criar uma renda sólida com um trabalho 100% online e com alta demanda.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
                Esse trabalho é necessário na sua cidade e em qualquer lugar do mundo.
                Com um computador e internet, você já consegue começar.
              </p>
            </div>
          </div>

          {/* CTA Hero */}
          <div className="relative">
            <button 
              onClick={handleLeadButton}
              className="bg-gradient-to-r from-[#00C853] to-[#00E676] hover:from-black hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden group animate-shine"
            >
              <span className="relative z-10">QUERO MEU LUGAR NA IMERSÃO</span>
            </button>
            <div className="mt-4 text-xs text-gray-500 max-w-md mx-auto">
              <p className="font-semibold mb-1">✅ Garantia de satisfação</p>
              <p className="leading-relaxed text-xs">
                Se até o fim da imersão você sentir que não aprendeu nada aplicável, devolvo seu dinheiro.
                <br />
                <span className="font-semibold">Risco zero, decisão segura.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-gradient-to-r from-[#00C853] via-[#00E676] to-[#00C853]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center text-white max-w-4xl mx-auto">
            <div className="group">
              <Users className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-4xl font-bold mb-2">{counters.students}+</div>
              <div className="text-sm md:text-lg opacity-90">Pessoas impactadas</div>
            </div>
            <div className="group">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-4xl font-bold mb-2 whitespace-nowrap">R$ {counters.earnings}+</div>
              <div className="text-sm md:text-lg opacity-90">Renda média mensal</div>
            </div>
            <div className="group">
              <Clock className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-4xl font-bold mb-2">{counters.days} dias</div>
              <div className="text-sm md:text-lg opacity-90">Para ver resultados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              O que você vai levar da imersão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdo prático e estratégias validadas para você começar sua jornada digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                emoji: "🚀",
                title: "Do zero à prática",
                text: "Ser iniciante não é problema. Você terá um caminho claro para seguir e aplicar."
              },
              {
                icon: <Target className="w-8 h-8" />,
                emoji: "💼",
                title: "Trabalho real e necessário",
                text: "Toda empresa precisa desse serviço para crescer. Demanda garantida no mercado."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                emoji: "📈",
                title: "Caminho validado",
                text: "Estratégia usada por milhares de negócios, agora simplificada para você aplicar."
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                emoji: "🔑",
                title: "Retorno rápido",
                text: "Com apenas um cliente, você já recupera o investimento da imersão e ainda lucra."
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-[#00C853]/20 hover:border-[#00C853] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00C853] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{benefit.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Duplicado */}
          <div className="text-center">
            <button 
              onClick={handleLeadButton}
              className="bg-gradient-to-r from-[#00C853] to-[#00E676] hover:from-black hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden group animate-shine"
            >
              <span className="relative z-10">QUERO MEU LUGAR NA IMERSÃO</span>
            </button>
            <div className="mt-4 text-xs text-gray-500 max-w-md mx-auto">
              <p className="font-semibold mb-1">✅ Garantia de satisfação</p>
              <p className="leading-relaxed text-xs">
                Se até o fim da imersão você sentir que não aprendeu nada aplicável, devolvo seu dinheiro.
                <br />
                <span className="font-semibold">Risco zero, decisão segura.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00C853]/5 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00E676]/5 rounded-full translate-x-40 translate-y-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00C853]/10 text-[#00C853] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              DEPOIMENTOS REAIS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              O que nossos alunos estão dizendo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de transformação e sucesso de quem já aplicou nossa metodologia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Maria Silva",
                role: "Ex-vendedora",
                text: "Em 3 meses saí do zero para R$ 4.200/mês. Nunca pensei que conseguiria trabalhar de casa e ter essa renda!",
                earnings: "R$ 4.200/mês"
              },
              {
                name: "João Santos",
                role: "Estudante universitário",
                text: "Consegui pagar minha faculdade e ainda ajudar em casa. O método funciona mesmo para quem não tem experiência.",
                earnings: "R$ 2.800/mês"
              },
              {
                name: "Ana Costa",
                role: "Mãe e empreendedora",
                text: "Trabalho no meu tempo, cuido dos filhos e ainda tenho uma renda que supera meu antigo emprego.",
                earnings: "R$ 5.500/mês"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-[#00C853]/20 hover:border-[#00C853] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
                
                <div className="bg-gradient-to-r from-[#00C853]/10 to-[#00E676]/10 rounded-2xl p-4 border border-[#00C853]/20">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#00C853]" />
                    <span className="font-bold text-[#00C853] text-lg">{testimonial.earnings}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Renda atual mensal</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carrossel de Prints de Feedbacks */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Veja mais resultados
              </h3>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll gap-4 md:gap-6 w-max">
                {[
                  "https://i.imgur.com/74Guzk0.jpeg",
                  "https://i.imgur.com/aQLC3Wv.jpeg", 
                  "https://i.imgur.com/hRetHuT.jpeg",
                  "https://i.imgur.com/lWPQvtk.jpeg",
                  "https://i.imgur.com/V14ta9T.png",
                  "https://i.imgur.com/W2zxRnW.jpeg",
                  "https://i.imgur.com/LV7HWbL.jpeg",
                  // Duplicação para loop infinito - conjunto 2
                  "https://i.imgur.com/74Guzk0.jpeg",
                  "https://i.imgur.com/aQLC3Wv.jpeg", 
                  "https://i.imgur.com/hRetHuT.jpeg",
                  "https://i.imgur.com/lWPQvtk.jpeg",
                  "https://i.imgur.com/V14ta9T.png",
                  "https://i.imgur.com/W2zxRnW.jpeg",
                  "https://i.imgur.com/LV7HWbL.jpeg",
                  // Duplicação para loop infinito - conjunto 3
                  "https://i.imgur.com/74Guzk0.jpeg",
                  "https://i.imgur.com/aQLC3Wv.jpeg", 
                  "https://i.imgur.com/hRetHuT.jpeg",
                  "https://i.imgur.com/lWPQvtk.jpeg",
                  "https://i.imgur.com/V14ta9T.png",
                  "https://i.imgur.com/W2zxRnW.jpeg",
                  "https://i.imgur.com/LV7HWbL.jpeg"
                ].map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-48 md:w-64 h-64 md:h-80 group">
                    <img 
                      src={image} 
                      alt={`Feedback de aluno ${(index % 7) + 1}`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-gray-200 group-hover:border-[#00C853] transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              
              {/* Gradientes nas bordas */}
              <div className="absolute top-0 left-0 w-16 md:w-24 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-16 md:w-24 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus and Pricing Section */}
      <section id="bonus-section" className="py-20 bg-gradient-to-br from-[#00C853]/5 via-white to-[#00E676]/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00C853]/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#00E676]/10 rounded-full translate-x-24 translate-y-24"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Bônus Section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 border-2 border-[#00C853] text-[#00C853] px-6 py-3 rounded-full text-lg font-bold mb-8 shadow-lg">
              🎁 BÔNUS ESPECIAL para quem se inscrever hoje
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm border-2 border-[#00C853]/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Suporte individual no Whatsapp</h3>
                <p className="text-gray-600">30 dias de suporte via WhatsApp para te ajudar nos seus resultados. Esse acompanhamento fará toda a diferença.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border-2 border-[#00C853]/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Acesso ao replay por 7 dias</h3>
                <p className="text-gray-600">Revise o conteúdo quantas vezes quiser nesse período.</p>
              </div>
            </div>
          </div>
          
          {/* Pricing Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#00C853]/30 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Um valor simbólico comparado ao que você pode faturar com esse conhecimento: 👇
            </p>
            
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-lg text-gray-600">Você pagaria</span>
                <div className="relative">
                  <span className="text-3xl font-bold text-red-500 line-through">R$ 397,90</span>
                  <div className="absolute inset-0 bg-red-500/20 transform rotate-12 rounded"></div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">Mas hoje você leva por...</h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#00C853]/10 to-[#00E676]/10 rounded-2xl p-8 border-2 border-[#00C853]/30 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 border-2 border-yellow-500 text-yellow-600 px-4 py-2 rounded-full text-sm font-bold mb-4 bg-transparent">
                  ⚡ ÚLTIMAS VAGAS
                </div>
                <div className="text-4xl md:text-6xl font-bold text-[#00C853] mb-4">
                  R$ 69,90
                </div>
                <div className="text-sm text-gray-600 text-center mb-4">
                  à vista ou 9x R$ 9,18
                </div>
                
                <div className="space-y-3 mb-6 text-left max-w-sm mx-auto">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Acesso à imersão ao vivo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Suporte individual no WhatsApp por 30 dias</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Acesso ao replay por 7 dias</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleCheckoutButton('https://pay.hotmart.com/P101688243T')}
                  className="w-full bg-gradient-to-r from-[#00C853] to-[#00E676] hover:from-black hover:to-gray-800 text-white font-bold py-4 px-6 rounded-xl text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl animate-shine relative overflow-hidden group mb-4"
                >
                  <span className="relative z-10 leading-tight">GARANTIR<br className="md:hidden" /> MEU LUGAR</span>
                </button>
              </div>
            </div>
            
            {/* Duas opções de preço lado a lado */}
            {/* Super Oferta */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute -top-3 -right-2 md:-right-4 transform rotate-12 border-2 border-red-500 text-red-600 px-3 py-1.5 rounded-full text-sm font-bold shadow-lg z-10 animate-pulse bg-red-500/15 whitespace-nowrap">
                🔥 SUPER OFERTA
              </div>
              <div className="bg-gradient-to-br from-[#00C853]/5 to-[#00E676]/5 border-4 border-[#00C853] rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Oferta Exclusiva</h3>
                    <p className="text-sm text-gray-600">apenas nesta página</p>
                  </div>
                  <div className="text-2xl font-bold text-[#00C853] mb-2">12x de R$ 10,03 *</div>
                  <div className="text-lg text-gray-600 text-center">Ou R$ 97,00 à vista</div>
                </div>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Acesso à imersão ao vivo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Acesso vitalício à gravação da imersão</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Suporte individual no WhatsApp por 60 dias</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Mentoria em grupo - 2 encontros (hora de tirar todas as dúvidas e ter suporte ao vivo)</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleCheckoutButton('https://pay.hotmart.com/P101688243T?off=5q9jmak9')}
                  className="w-full bg-gradient-to-r from-[#00C853] to-[#00E676] hover:from-black hover:to-gray-800 text-white font-bold py-4 px-6 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl animate-shine relative overflow-hidden group"
                >
                  <span className="relative z-10">EU ACEITO A OFERTA</span>
                </button>
                
                <div className="mt-3 text-center">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
                    💎 MAIS ESCOLHIDA
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-xs text-gray-500 max-w-md mx-auto">
                <p className="font-semibold mb-1">✅ Garantia de satisfação</p>
                <p className="leading-relaxed text-xs">
                  Se, até o fim da imersão, você sentir que não aprendeu nada aplicável, devolvo seu dinheiro.
                  <br />
                  <span className="font-semibold">Risco zero e decisão segura.</span>
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Objections Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Ainda com dúvidas?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#00C853]/20 rounded-full flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sem experiência?</h3>
              <p className="text-gray-300">Não precisa de conhecimento técnico prévio.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#00C853]/20 rounded-full flex items-center justify-center">
                <Video className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Não quer aparecer?</h3>
              <p className="text-gray-300">Trabalhe nos bastidores, sem exposição.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#00C853]/20 rounded-full flex items-center justify-center">
                <Wallet className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pouco dinheiro?</h3>
              <p className="text-gray-300">Investimento baixo para começar.</p>
            </div>
          </div>
          
          <div className="text-xl md:text-2xl leading-relaxed space-y-6 text-gray-300 max-w-3xl mx-auto">
            <p>
              A verdade é que esse serviço pode ser aprendido rapidamente e colocado em prática de imediato.
            </p>
            <p className="text-[#00C853] font-semibold">
              Eu vou te mostrar o jeito certo de começar, sem os erros que fazem muita gente desistir.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#00C853]/5 to-[#00E676]/5 border-4 border-[#00C853] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C853]/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00E676]/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Garantia Incondicional
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                Se, até o fim da imersão, você sentir que não aprendeu nada aplicável, 
                <strong className="text-[#00C853]"> devolvo seu dinheiro</strong>.
              </p>
              <p className="text-lg font-bold text-black mb-8 max-w-2xl mx-auto">
                Risco zero e decisão segura.
              </p>
              
              <button 
                onClick={() => handleCheckoutButton('https://pay.hotmart.com/P101688243T')}
                className="bg-gradient-to-r from-[#00C853] to-[#00E676] hover:from-black hover:to-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden group animate-shine"
              >
                <span className="relative z-10">QUERO MINHA VAGA</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Todos os direitos reservados © 2025 - Évi Pontes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;