'use client';

import { useLanguage } from '@/context/LanguageContext';
import BackgroundLayer from '@/components/BackgroundLayer';
import Image from 'next/image';
import { Instagram, Heart, HandHeart, Sparkles } from 'lucide-react';

export default function FundacaoPage() {
  const { language, t } = useLanguage();
  const isPT = language === 'pt';

  const values = isPT
    ? [
        { icon: Heart, title: 'Acolher', desc: 'Ser um abraço aberto a cada família que chega, oferecendo presença e escuta desde o primeiro momento.' },
        { icon: HandHeart, title: 'Apoiar', desc: 'Caminhar junto com a comunidade imigrante, conectando pessoas a recursos, orientação e solidariedade.' },
        { icon: Sparkles, title: 'Esperar e crer', desc: 'Levar esperança e fé, acreditando que toda história tem um futuro — e que ninguém deve caminhar sozinho.' },
      ]
    : [
        { icon: Heart, title: 'Welcome', desc: 'Be an open embrace to every family that arrives, offering presence and listening from the very first moment.' },
        { icon: HandHeart, title: 'Support', desc: 'Walk alongside the immigrant community, connecting people to resources, guidance, and solidarity.' },
        { icon: Sparkles, title: 'Hope and faith', desc: 'Bring hope and faith, believing that every story has a future — and that no one should walk alone.' },
      ];

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-base/10 rounded-full blur-3xl" />
                <Image
                  src="/logo/selo-foundation-transparente.png"
                  alt="VISA OFFICE FOUNDATION"
                  width={140}
                  height={140}
                  className="relative w-28 h-28 md:w-36 md:h-36 mx-auto"
                  priority
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-base/10 border border-gold-base/30 mb-8">
              <Heart className="w-4 h-4 text-gold-base" />
              <span className="text-gold-base text-xs font-semibold tracking-widest uppercase">
                {isPT ? 'Braço Social do Grupo' : 'Social Arm of the Group'}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-wide">
              {isPT ? (
                <>VISA OFFICE <span className="text-gold-base">FOUNDATION</span></>
              ) : (
                <>VISA OFFICE <span className="text-gold-base">FOUNDATION</span></>
              )}
            </h1>

            <p className="text-gold-soft text-lg md:text-xl font-medium italic mb-6">
              {t('slogan')}
            </p>

            <p className="text-lg md:text-xl text-gray-text mb-10 leading-relaxed max-w-3xl mx-auto">
              {isPT
                ? 'O braço de acolhimento e apoio à comunidade imigrante. A fundação nasceu do desejo de ir além do processo documental — de acolher, apoiar e levar esperança às famílias que buscam um novo começo nos Estados Unidos.'
                : 'The welcoming and supportive arm for the immigrant community. The foundation was born from the desire to go beyond the documentary process — to welcome, support, and bring hope to families seeking a new beginning in the United States.'}
            </p>

            <a
              href="https://instagram.com/visaofficefoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-gold-base border-2 border-gold-base/60 rounded-lg hover:bg-gold-base/10 hover:border-gold-base transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              {isPT ? 'Seguir @visaofficefoundation' : 'Follow @visaofficefoundation'}
            </a>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                {isPT ? <>Nossa <span className="text-gold-base">Missão</span></> : <>Our <span className="text-gold-base">Mission</span></>}
              </h2>
              <div className="section-divider max-w-xs mx-auto" />
            </div>

            <div className="card-premium space-y-6">
              <p className="text-gray-text leading-relaxed">
                {isPT
                  ? 'A VISA OFFICE FOUNDATION existe para acolher, apoiar e levar esperança às famílias imigrantes. Acreditamos que por trás de cada processo há uma história, uma vida e um futuro — e que ninguém deveria enfrentar essa jornada sozinho.'
                  : 'VISA OFFICE FOUNDATION exists to welcome, support, and bring hope to immigrant families. We believe that behind every process there is a story, a life, and a future — and that no one should face this journey alone.'}
              </p>
              <p className="text-gray-text leading-relaxed">
                {isPT
                  ? 'Somos o braço social da Visa Office Group. Enquanto o escritório cuida da preparação documental, a fundação cuida das pessoas — oferecendo acolhimento, conexão com recursos comunitários e um espaço de fé e esperança.'
                  : 'We are the social arm of Visa Office Group. While the office handles document preparation, the foundation cares for the people — offering welcome, connection to community resources, and a space of faith and hope.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
              {isPT ? <>O que nos <span className="text-gold-base">move</span></> : <>What <span className="text-gold-base">moves us</span></>}
            </h2>
            <p className="text-gray-text max-w-2xl mx-auto">
              {isPT ? 'Três princípios que guiam cada ação da fundação' : 'Three principles that guide every action of the foundation'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-premium text-center">
                  <div className="flex items-center justify-center w-14 h-14 bg-gold-base/10 rounded-full mx-auto mb-5">
                    <Icon className="text-gold-base" size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-text/70 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELO + INSTAGRAM CTA */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto card-premium text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-base/10 rounded-full blur-2xl" />
                <Image
                  src="/logo/selo-foundation-transparente.png"
                  alt="VISA OFFICE FOUNDATION"
                  width={100}
                  height={100}
                  className="relative w-20 h-20 mx-auto"
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
              {isPT ? 'Junte-se a nós' : 'Join us'}
            </h2>
            <p className="text-gray-text mb-8 leading-relaxed max-w-xl mx-auto">
              {isPT
                ? 'Siga a VISA OFFICE FOUNDATION no Instagram e acompanhe nossas histórias de acolhimento, fé e esperança.'
                : 'Follow VISA OFFICE FOUNDATION on Instagram and follow our stories of welcome, faith, and hope.'}
            </p>

            <a
              href="https://instagram.com/visaofficefoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-navy-deep bg-gold-base rounded-lg hover:bg-gold-600 transition-all duration-300 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              {isPT ? '@visaofficefoundation' : '@visaofficefoundation'}
            </a>

            <p className="text-gold-soft text-sm font-medium italic mt-8">
              {t('slogan')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
