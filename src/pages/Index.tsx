import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: '',
    attending: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо!",
      description: "Мы получили ваш ответ. До встречи на празднике! 💕",
    });
    setFormData({ name: '', guests: '', message: '', attending: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="text-center z-10 max-w-4xl animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/5f40b119-09e2-4582-9d94-2dd1969ddc76/files/d4db3caa-142c-49dc-bc92-ee3d9a040e8a.jpg" 
              alt="Цветы" 
              className="w-64 h-64 mx-auto object-contain mb-8 animate-float"
            />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-light mb-6 text-primary">
            Настя <span className="text-5xl md:text-7xl mx-4">&</span> Миша
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-primary/30"></div>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground">6 августа 2026</p>
            <div className="h-px w-20 bg-primary/30"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            Приглашаем вас разделить с нами этот особенный день
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection('details')}
            >
              Подробнее
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={() => scrollToSection('rsvp')}
            >
              Подтвердить участие
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-primary">О событии</h2>
            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full"></div>
          </div>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://cdn.poehali.dev/projects/5f40b119-09e2-4582-9d94-2dd1969ddc76/files/84b713ba-d18f-4882-bb66-4fa4cea06ddd.jpg" 
                  alt="Свадьба" 
                  className="rounded-2xl w-full object-cover shadow-lg"
                />
              </div>
              
              <div className="md:w-1/2 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Мы рады пригласить вас на наше торжество! Этот день станет началом нашей совместной истории, 
                  и мы будем счастливы разделить его с самыми близкими людьми.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Heart" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Празднование</h3>
                      <p className="text-muted-foreground">Торжественная церемония и банкет в одном из лучших залов города</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Music" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Развлечения</h3>
                      <p className="text-muted-foreground">Живая музыка, танцы и незабываемая атмосфера веселья</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Особенная атмосфера</h3>
                      <p className="text-muted-foreground">Романтический декор и незабываемые моменты</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="details" className="py-20 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-primary">Дата и место</h2>
            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/10 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Icon name="Calendar" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-4">Дата</h3>
                <p className="text-3xl font-light text-primary mb-2">6 августа</p>
                <p className="text-xl text-muted-foreground">2026 года</p>
                <p className="text-lg text-muted-foreground mt-4">Среда</p>
              </div>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/10 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Icon name="MapPin" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-4">Место</h3>
                <p className="text-2xl font-light text-primary mb-2">Bankhov</p>
                <p className="text-lg text-muted-foreground mb-4">Банкетный зал</p>
                <p className="text-muted-foreground">Начало в 17:00</p>
              </div>
            </Card>
          </div>
          
          <Card className="mt-6 p-8 bg-accent/30 backdrop-blur border-accent/20">
            <div className="flex items-start gap-4">
              <Icon name="Gift" className="text-primary mt-1 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-semibold mb-3">Подарки</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ваше присутствие — лучший подарок для нас! Если вы хотите порадовать молодожёнов, 
                  мы будем благодарны за денежный подарок, который поможет нам в создании нашего семейного гнёздышка.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-primary">Фотогалерея</h2>
            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="aspect-square overflow-hidden border-primary/10 hover:scale-105 transition-transform">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="Image" className="text-primary/40" size={48} />
                </div>
              </Card>
            ))}
          </div>
          
          <p className="text-center mt-8 text-muted-foreground text-lg">
            Скоро здесь появятся наши фотографии 📸
          </p>
        </div>
      </section>

      <section id="rsvp" className="py-20 px-4 bg-secondary/10">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-primary">RSVP</h2>
            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6">
              Пожалуйста, подтвердите ваше присутствие до 1 июля 2026
            </p>
          </div>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg">Ваше имя *</Label>
                <Input 
                  id="name"
                  required
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="guests" className="text-lg">Количество гостей *</Label>
                <Input 
                  id="guests"
                  type="number"
                  required
                  min="1"
                  placeholder="Сколько человек придёт?"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="attending" className="text-lg">Придёте? *</Label>
                <select
                  id="attending"
                  required
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Выберите ответ</option>
                  <option value="yes">Да, обязательно буду!</option>
                  <option value="no">К сожалению, не смогу</option>
                  <option value="maybe">Пока не уверен(а)</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-lg">Пожелания молодожёнам</Label>
                <Textarea 
                  id="message"
                  placeholder="Напишите ваши пожелания..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 min-h-32"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full text-lg">
                Отправить ответ
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 text-center border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/5f40b119-09e2-4582-9d94-2dd1969ddc76/files/d4db3caa-142c-49dc-bc92-ee3d9a040e8a.jpg" 
              alt="Цветы" 
              className="w-24 h-24 mx-auto object-contain opacity-60"
            />
          </div>
          
          <p className="text-3xl font-light text-primary mb-2">Настя & Миша</p>
          <p className="text-lg text-muted-foreground mb-6">6 августа 2026</p>
          
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Heart" className="text-primary" size={24} />
            <Icon name="Sparkles" className="text-primary" size={24} />
            <Icon name="Heart" className="text-primary" size={24} />
          </div>
          
          <p className="text-muted-foreground">
            С любовью и нетерпением ждём встречи с вами!
          </p>
        </div>
      </footer>
    </div>
  );
}
