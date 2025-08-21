import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Tag, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

// Importar as novas imagens do Brasil para o portfólio
import projectImage1 from '../assets/projeto1_brasil.jpg';
import projectImage2 from '../assets/projeto2_brasil.jpg';
import projectImage3 from '../assets/projeto3_brasil.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Plano Diretor de Turismo de São Vicente',
      year: '2022',
      location: 'São Vicente, SP',
      description: 'Elaboração do novo Plano Diretor de Turismo de São Vicente, definindo metas e diretrizes para o desenvolvimento do setor até 2027.',
      image: projectImage1,
    },
    {
      title: 'Plano Diretor de Turismo de Santos',
      year: '2023',
      location: 'Santos, SP',
      description: 'Revisão e atualização do documento que orienta o desenvolvimento sustentável do turismo em Santos até 2027, com foco em inovação e economia criativa.',
      image: projectImage2,
    },
    {
      title: 'Academia de Turismo - Baixada Santista',
      year: '2024',
      location: 'Baixada Santista, SP',
      description: 'Participação como palestrante no evento da Secretaria de Turismo do estado de SP, contribuindo para a qualificação regional do setor turístico.',
      image: projectImage3,
    },
  ];

  const lectures = [
    {
      title: 'Turismo Regenerativo: Co-criando o Futuro do Turismo',
      event: 'WTM 2025',
      year: '2025',
      description: 'Palestra sobre turismo regenerativo e suas aplicações práticas no desenvolvimento de destinos sustentáveis.',
    },
    {
      title: 'Turismo Regenerativo',
      event: 'Festival da Mata Atlântica',
      year: '2024',
      location: 'Bertioga, SP',
      description: 'Apresentação sobre práticas de turismo regenerativo durante o 10º Festival da Mata Atlântica em Bertioga.',
    },
    {
      title: 'Turismo de Experiência - O Bem Receber',
      event: 'Semana Sabor de SP',
      year: '2024',
      description: 'Palestra sobre turismo de experiência e a importância do bem receber no desenvolvimento turístico.',
    },
  ];



  const impactStats = [
    { number: '7+', label: 'Municípios Atendidos' },
    { number: '12+', label: 'Projetos Realizados' },
    { number: '25+', label: 'Palestras Ministradas' },
    { number: '250+', label: 'Profissionais Capacitados' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portfólio
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Conheça os principais projetos realizados e contribuições para o desenvolvimento do turismo sustentável.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg md:text-xl">
              {impactStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="font-bold">{stat.number}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-10">Principais Projetos</h2>
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div 
                    className="h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{project.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lectures Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-10">Palestras e Apresentações</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lectures.map((lecture, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{lecture.title}</CardTitle>
                  <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{lecture.year}</span>
                    </div>
                    {lecture.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{lecture.location}</span>
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{lecture.description}</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer Fazer Parte dos Nossos Próximos Projetos?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato com a Data Turismo para discutir como podemos colaborar no desenvolvimento do turismo sustentável em sua região.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
            <Link to="/contato">
              Iniciar Conversa
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;


