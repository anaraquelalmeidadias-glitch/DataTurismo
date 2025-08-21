import React from 'react';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const About = () => {
  const education = [
    {
      degree: 'Mestranda em Inovação Tecnológica',
      institution: 'UNIFESP',
      year: '2024-2026',
      status: 'Em andamento'
    },
    {
      degree: 'MBA em Marketing',
      institution: 'USP/Esalq',
      year: '2020',
      status: 'Concluído'
    },
    {
      degree: 'Pós-graduação em Gestão Integrada',
      institution: 'Centro Universitário SENAC SP',
      year: '2014',
      status: 'Concluído'
    },
    {
      degree: 'Bacharelado em Turismo',
      institution: 'Faculdade do Guarujá',
      year: '2007',
      status: 'Concluído'
    }
  ];

  const experience = [
    {
      role: 'Consultora Educacional (Docente)',
      company: 'SENAC SP',
      period: '08/2011 – 07/2025',
      description: 'Planejamento e execução de projetos educacionais e turísticos. Atendimento às demandas de gestão pública em turismo. Palestrante em eventos do setor.'
    },
    {
      role: 'Consultora',
      company: 'Sistema de Gestão Integrada',
      period: '03/2013 – 07/2014',
      description: 'Implementação de sistemas de gestão integrados para empresas em busca de certificação ISO.'
    },
    {
      role: 'Agente de Atendimento',
      company: 'SESC SP',
      period: '10/2010 – 07/2012',
      description: 'Atendimento ao público e suporte operacional na Central de Atendimento do Sesc Bertioga.'
    },
    {
      role: 'Docente de Turismo',
      company: 'Governo Federal',
      period: '03/2009 – 05/2010',
      description: 'Ensino e capacitação em turismo para programas governamentais.'
    }
  ];

  const competencies = [
    'Gestão e Planejamento Estratégico de Projetos',
    'Elaboração e Atualização de Planos Diretores de Turismo',
    'Consultoria em Políticas Públicas para o Turismo',
    'Análise e diagnóstico de destinos turísticos',
    'Palestras sobre turismo, inovação e sustentabilidade',
    'Educação e Capacitação Profissional',
    'Implementação de Sistemas de Gestão Integrada',
    'Turismo de Base Comunitária',
    'Turismo Regenerativo'
  ];

  const certifications = [
    'Descomplicando a IA – Unifesp (2025)',
    'Inteligência de Marketing, Marcas e Customer Experience – Senac SP (2023)',
    'Brandinnovation – TOTEM Branding e UNWTO (2022)',
    'UX & Design – Alura (2021)',
    'Estratégias Didáticas para o Turismo Global – USP (2022)',
    'Auditora Interna em Sistemas de Gestão (2015)',
    'Formação para Educadores – Fundação Darcy Ribeiro (2009)'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ana Raquel Almeida Dias
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Consultora e Gestora de Projetos em Turismo | Especialista em 
              Planejamento e Inovação de Destinos Turísticos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                20+ Anos de Experiência
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Mestranda UNIFESP
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Especialista em Turismo Sustentável
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Resumo Profissional</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Profissional com mais de 20 anos de experiência no setor de turismo, destaca-se pela 
                vivência junto a órgãos públicos, consultorias e grandes empresas, com trajetória 
                marcada por liderança no desenvolvimento, coordenação e execução de projetos 
                estratégicos voltados ao planejamento, gestão e inovação em destinos turísticos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Reconhecida como referência em projetos colaborativos e em políticas inovadoras para 
                o turismo e a educação, possui ampla experiência na atualização e elaboração de Planos 
                Diretores de Turismo, planejamento de destinos e produção de conteúdos educacionais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estou disponível para projetos relacionados ao planejamento, consultoria e gestão de 
                projetos no setor de turismo, com foco especial em sustentabilidade e desenvolvimento 
                comunitário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <GraduationCap className="mr-3 h-8 w-8 text-primary" />
            Formação Acadêmica
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">
                    {edu.institution} • {edu.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant={edu.status === 'Em andamento' ? 'default' : 'secondary'}>
                    {edu.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Competencies */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Users className="mr-3 h-8 w-8 text-primary" />
            Competências e Áreas de Atuação
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {competencies.map((competency, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <BookOpen className="mr-3 h-8 w-8 text-primary" />
            Qualificações e Capacitações Complementares
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border">
                  <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-card-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Estou sempre aberta para discutir novos projetos e oportunidades de colaboração 
            no desenvolvimento sustentável do turismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-lg">
              <strong>Email:</strong> anaraquel.almeidadias@gmail.com
            </div>
            <div className="text-lg">
              <strong>Telefone:</strong> (13) 98810-9168
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

