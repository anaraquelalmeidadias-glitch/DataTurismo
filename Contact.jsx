import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'anaraquel.almeidadias@gmail.com',
      description: 'Resposta em até 24 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(13) 98810-9168',
      description: 'WhatsApp disponível'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Baixada Santista, SP',
      description: 'Atendimento presencial e remoto'
    },
    {
      icon: Globe,
      title: 'LinkedIn',
      value: 'ana-raquel-almeida-dias',
      description: 'Conecte-se conosco'
    }
  ];

  const services = [
    'Planos Diretores de Turismo',
    'Turismo de Base Comunitária',
    'Turismo Regenerativo',
    'Observatórios de Turismo',
    'Cursos e Palestras',
    'Consultoria em Gestão Pública',
    'Outro'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Vamos conversar sobre como podemos ajudar a desenvolver o turismo 
              sustentável em sua região ou organização.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Clock className="h-5 w-5" />
              <span>Resposta garantida em até 24 horas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Solicite uma Consultoria</h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo com detalhes sobre seu projeto ou necessidade. 
                Entraremos em contato para agendar uma conversa inicial.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="organization">Organização/Empresa</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Nome da sua organização"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Serviço de Interesse</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Descreva seu projeto, necessidades ou dúvidas..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-muted-foreground mb-8">
                Estamos sempre disponíveis para conversar sobre novos projetos e 
                oportunidades de colaboração.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                          <CardDescription>{info.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-medium">{info.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Options */}
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contato Rápido</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:anaraquel.almeidadias@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Email
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://wa.me/5513988109168" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.linkedin.com/in/ana-raquel-almeida-dias-8859b246" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Como funciona o processo de consultoria?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Iniciamos com um diagnóstico completo, seguido pelo planejamento estratégico, 
                  implementação das ações e monitoramento contínuo dos resultados.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Qual o prazo médio dos projetos?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  O prazo varia conforme a complexidade do projeto. Planos Diretores levam 
                  de 6 a 12 meses, enquanto consultorias pontuais podem ser de 1 a 3 meses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Atendem projetos em todo o Brasil?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim, atendemos projetos em todo o território nacional, com modalidades 
                  presencial, remota ou híbrida, conforme a necessidade do cliente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Oferecem capacitação para equipes?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim, oferecemos cursos, workshops e palestras para capacitação de equipes 
                  técnicas em turismo sustentável e gestão de destinos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Não perca tempo! Entre em contato hoje mesmo e vamos juntos transformar 
            o turismo em sua região através de práticas sustentáveis e inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
              <a href="mailto:anaraquel.almeidadias@gmail.com">
                Enviar Email Agora
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
              <a href="https://wa.me/5513988109168" target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

