'use client';

import { useState, FormEvent } from 'react';
import BackgroundLayer from '@/components/BackgroundLayer';
import { Briefcase, MapPin, DollarSign, CheckCircle2, AlertTriangle, Loader2, Send, ArrowRight, Info } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export type Job = {
  id: string;
  role: string;
  area: string;
  location: string;
  wage: string;
  duties: string;
};

export const jobs: Job[] = [
  {
    id: 'crew-maine',
    role: 'Crew Member',
    area: 'Alimentação / Restaurante',
    location: 'Old Town, Maine',
    wage: 'US$ 14,15/hora',
    duties: 'Atendimento e preparo de pedidos.',
  },
  {
    id: 'crew-ny',
    role: 'Crew Member',
    area: 'Alimentação / Restaurante',
    location: 'Long Island, Nova York',
    wage: 'US$ 15,00/hora',
    duties: 'Atendimento e preparo de pedidos.',
  },
  {
    id: 'material-handler-pa',
    role: 'Material Handler',
    area: 'Produção / Logística',
    location: 'Duquesne, Pensilvânia',
    wage: 'US$ 15,53/hora',
    duties: 'Embalagem e organização de materiais.',
  },
  {
    id: 'food-prep-sc',
    role: 'Food Prep Worker',
    area: 'Preparo de Alimentos',
    location: 'Columbia, Carolina do Sul',
    wage: 'US$ 10,25/hora',
    duties: 'Preparo de alimentos frios.',
  },
  {
    id: 'hotel-clerk-tx',
    role: 'Hotel Desk Clerk',
    area: 'Hotelaria',
    location: 'Eagle Pass, Texas',
    wage: 'US$ 10,00/hora',
    duties: 'Atendimento e recepção de hóspedes.',
  },
  {
    id: 'assembler-ut',
    role: 'Assembler',
    area: 'Produção',
    location: 'Salt Lake City, Utah',
    wage: 'US$ 15,27/hora',
    duties: 'Montagem e apoio à produção.',
  },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function VagasEB3Content() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const scrollToForm = (job?: Job) => {
    if (job) setSelectedJob(job);
    document.getElementById('formulario-elegibilidade')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      location: String(formData.get('location') || ''),
      job_id: selectedJob?.id || null,
      job_title: selectedJob?.role || null,
      experience: String(formData.get('experience') || ''),
      english_level: String(formData.get('english_level') || ''),
      education: String(formData.get('education') || ''),
      message: String(formData.get('message') || ''),
      language: 'pt',
    };

    try {
      const { error } = await supabase.from('eb3_eligibility_submissions').insert([payload]);
      if (error) throw error;
      setStatus('success');
      form.reset();
      setSelectedJob(null);
    } catch (err) {
      console.error('EB-3 submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-base/10 border border-gold-base/30 mb-8">
              <Briefcase className="w-4 h-4 text-gold-base" />
              <span className="text-gold-base text-xs font-semibold tracking-widest uppercase">Programa EB-3</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-wide">
              Trabalhe nos Estados Unidos com{' '}
              <span className="text-gold-base">Patrocínio de Empregador Americano</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-text mb-8 leading-relaxed max-w-3xl mx-auto">
              Conheça vagas reais em empresas americanas que participam de programas de patrocínio para green card
              (categoria EB-3), e conte com a Visa Office Group para verificar sua elegibilidade e organizar sua
              documentação.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => scrollToForm()}
                className="btn-primary w-full sm:w-auto"
              >
                Verificar Minha Elegibilidade
              </button>
              <a href="#vagas-disponiveis" className="btn-secondary w-full sm:w-auto">
                Ver Vagas Disponíveis
              </a>
            </div>

            <div className="flex items-start justify-center gap-2 max-w-2xl mx-auto text-left">
              <AlertTriangle className="w-4 h-4 text-gold-soft mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-text/70 leading-relaxed">
                A contratação, o patrocínio e o processo migratório dependem de análise de elegibilidade,
                disponibilidade da vaga e aprovação das autoridades americanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É O PROGRAMA EB-3 */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                O que é o programa <span className="text-gold-base">EB-3</span>
              </h2>
              <div className="section-divider max-w-xs mx-auto" />
            </div>

            <div className="card-premium space-y-6">
              <p className="text-gray-text leading-relaxed">
                O EB-3 é uma categoria de imigração baseada em emprego, em que empresas americanas patrocinam
                trabalhadores estrangeiros para posições permanentes de tempo integral. Quando os requisitos são
                cumpridos, o processo pode levar à residência permanente (green card) nos Estados Unidos.
              </p>
              <p className="text-gray-text leading-relaxed">
                A categoria abrange trabalhadores qualificados, profissionais e outros trabalhadores, e envolve
                etapas como certificação trabalhista (PERM), petição do empregador e, por fim, o ajuste de status ou
                processo consular do candidato.
              </p>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gold-base/5 border border-gold-base/20">
                <Info className="w-5 h-5 text-gold-base mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-text/90 leading-relaxed">
                  Nem todo candidato é elegível. Fatores como histórico migratório, status atual e documentação
                  influenciam o processo. A análise de elegibilidade é individual e essencial antes de qualquer
                  iniciativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VAGAS DISPONÍVEIS */}
      <section id="vagas-disponiveis" className="relative py-24 overflow-hidden scroll-mt-32">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
              Vagas <span className="text-gold-base">Disponíveis</span>
            </h2>
            <p className="text-gray-text max-w-2xl mx-auto mb-6">
              Conheça as posições com patrocínio EB-3 atualmente abertas. Cada vaga tem requisitos próprios — a
              verificação de elegibilidade confirma se você se enquadra.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-deep/60 border border-white/10">
              <AlertTriangle className="w-3.5 h-3.5 text-gold-soft flex-shrink-0" />
              <span className="text-xs text-gray-text/80">
                Vagas sujeitas a disponibilidade e atualização — consulte a data de verificação com nossa equipe.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobs.map((job) => (
              <div key={job.id} className="card-premium flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 bg-gold-base/10 rounded-lg mb-5">
                  <Briefcase className="text-gold-base" size={24} />
                </div>

                <span className="text-xs font-semibold text-gold-soft uppercase tracking-wider mb-2">
                  {job.area}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{job.role}</h3>

                <div className="space-y-2 mb-5 text-sm">
                  <div className="flex items-center gap-2 text-gray-text/90">
                    <MapPin className="w-4 h-4 text-gold-base flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-text/90">
                    <DollarSign className="w-4 h-4 text-gold-base flex-shrink-0" />
                    <span>{job.wage}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-text/70 leading-relaxed mb-6">{job.duties}</p>

                <button
                  onClick={() => scrollToForm(job)}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-navy-deep bg-gold-base rounded-lg hover:bg-gold-600 transition-all duration-300"
                >
                  Tenho Interesse
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE ELEGIBILIDADE */}
      <section id="formulario-elegibilidade" className="relative py-24 overflow-hidden scroll-mt-32">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                Verifique sua <span className="text-gold-base">Elegibilidade</span>
              </h2>
              <p className="text-gray-text max-w-xl mx-auto">
                Preencha o formulário abaixo. Nossa equipe entrará em contato para uma análise inicial do seu
                perfil para o programa EB-3.
              </p>
            </div>

            <div className="card-premium">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold-base/10 rounded-full mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-gold-base" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Recebemos sua solicitação!</h3>
                  <p className="text-gray-text mb-8 max-w-md mx-auto">
                    Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve para dar continuidade à
                    análise de elegibilidade.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {selectedJob && (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gold-base/10 border border-gold-base/20">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gold-base" />
                        <span className="text-sm text-white font-medium">
                          Vaga selecionada: {selectedJob.role} — {selectedJob.location}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="text-xs text-gray-text hover:text-gold-base transition-colors"
                      >
                        Remover
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-text mb-2">
                        Nome completo *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white placeholder-gray-text/40 focus:outline-none focus:border-gold-base/50 transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-text mb-2">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white placeholder-gray-text/40 focus:outline-none focus:border-gold-base/50 transition-colors"
                        placeholder="+55 (00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-text mb-2">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white placeholder-gray-text/40 focus:outline-none focus:border-gold-base/50 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-text mb-2">
                        Cidade / País atual
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white placeholder-gray-text/40 focus:outline-none focus:border-gold-base/50 transition-colors"
                        placeholder="Onde você mora"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-text mb-2">
                        Escolaridade
                      </label>
                      <select
                        id="education"
                        name="education"
                        className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-base/50 transition-colors"
                      >
                        <option value="" className="bg-navy-deep">Selecione...</option>
                        <option value="ensino-fundamental" className="bg-navy-deep">Ensino Fundamental</option>
                        <option value="ensino-medio" className="bg-navy-deep">Ensino Médio</option>
                        <option value="tecnico" className="bg-navy-deep">Ensino Técnico</option>
                        <option value="superior" className="bg-navy-deep">Ensino Superior</option>
                        <option value="pos-graduacao" className="bg-navy-deep">Pós-Graduação</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="english_level" className="block text-sm font-medium text-gray-text mb-2">
                        Nível de inglês
                      </label>
                      <select
                        id="english_level"
                        name="english_level"
                        className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-base/50 transition-colors"
                      >
                        <option value="" className="bg-navy-deep">Selecione...</option>
                        <option value="basico" className="bg-navy-deep">Básico</option>
                        <option value="intermediario" className="bg-navy-deep">Intermediário</option>
                        <option value="avancado" className="bg-navy-deep">Avançado</option>
                        <option value="fluente" className="bg-navy-deep">Fluente</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-text mb-2">
                      Experiência profissional relevante
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white placeholder-gray-text/40 focus:outline-none focus:border-gold-base/50 transition-colors resize-none"
                      placeholder="Resuma sua experiência relacionada às vagas de interesse."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-text mb-2">
                      Mensagem adicional
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white placeholder-gray-text/40 focus:outline-none focus:border-gold-base/50 transition-colors resize-none"
                      placeholder="Alguma observação que considere relevante (opcional)."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-red-news/10 border border-red-news/30">
                      <AlertTriangle className="w-4 h-4 text-red-news mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-news">
                        Ocorreu um erro ao enviar. Tente novamente em instantes.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-base text-navy-deep font-semibold rounded-lg hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Solicitação
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-text/60 text-center leading-relaxed">
                    Ao enviar, você concorda em compartilhar suas informações com a Visa Office Group para fins de
                    análise de elegibilidade. Não fornecemos aconselhamento jurídico.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
