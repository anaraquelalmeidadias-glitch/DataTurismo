import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Contato', href: '/contato' },
  ];

  const services = [
    'Planos Diretores de Turismo',
    'Turismo de Base Comunitária',
    'Turismo Regenerativo',
    'Observatórios de Turismo',
    'Cursos e Palestras',
    'Consultoria em Gestão Pública'
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AD</span>
              </div>
              <div>
Data Turismo
                <p className="text-sm opacity-80">Planejamento de Turismo na Gestão Pública</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6 max-w-md">
              Especializada em desenvolvimento sustentável do turismo, com mais de 20 anos 
              de experiência em projetos colaborativos e políticas inovadoras para o setor.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <a href="mailto:anaraquel.almeidadias@gmail.com" className="text-sm hover:text-primary transition-colors">
                  anaraquel.almeidadias@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <a href="tel:+5513988109168" className="text-sm hover:text-primary transition-colors">
                  (13) 98810-9168
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">Baixada Santista, SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-4 w-4 opacity-80" />
                <a 
                  href="https://www.linkedin.com/in/ana-raquel-almeida-dias-8859b246" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors flex items-center"
                >
                  LinkedIn
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/servicos" 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} Data Turismo. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm opacity-80">
              <span>Turismo Sustentável</span>
              <span>•</span>
              <span>Gestão Pública</span>
              <span>•</span>
              <span>Inovação</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

