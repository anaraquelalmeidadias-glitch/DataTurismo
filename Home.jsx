import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Lightbulb, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

import serviceImage1 from '../assets/P5YiirYxDbul.jpg';
import serviceImage2 from '../assets/54fvhrBwaaJQ.jpg';
import serviceImage3 from '../assets/PF1geC73lefL.jpg';

const Home = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Planos Diretores de Turismo',
      description: 'Elaboração e atualização de planos estratégicos para o desenvolvimento sustentável do turismo municipal.',
      image: serviceImage1,
    },
    {
      icon: Users,
      title: 'Turismo de Base Comunitária',
      description: 'Desenvolvimento de projetos que envolvem e beneficiam diretamente as comunidades locais.',
      image: serviceImage2,
    },
    {
      icon: Lightbulb,
      title: 'Turismo Regenerativo',
      description: 'Implementação de práticas turísticas que regeneram e fortalecem os destinos e suas comunidades.',
      image: serviceImage3,
    },
  ];

  const stats = [
    { number: '20+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Projetos Realizados' },
    { number: '15+', label: 'Municípios Atendidos' },
    { number: '100+', label: 'Palestras Ministradas' },
  ];

  return (
    <div className="min-h-screen">


      {/* Stats Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Services Preview Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para o desenvolvimento sustentável do turismo, 
              com foco na gestão pública e no envolvimento comunitário.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <service.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar seu Destino?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar a desenvolver 
            o turismo sustentável em sua região.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
            <Link to="/contato">
              Solicitar Consultoria
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

