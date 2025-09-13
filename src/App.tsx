import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Calendar,
  FileText,
  Linkedin,
  Mail,
  Megaphone,
  UserCheck,
  Star,
  Phone,
  MessageCircle,
  ChevronRight,
  Award,
  Target,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Globe,
  BookOpen,
  Briefcase,
  TrendingDown,
  CheckCircle2,
  Quote
} from 'lucide-react';

function App() {
  const [animationClass, setAnimationClass] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    setAnimationClass('animate-fade-in');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FileText,
      title: "كتابة وتعديل السيرة الذاتية",
      description: "سيرة ذاتية احترافية متوافقة مع أنظمة ATS تبرز إنجازاتك ومهاراتك بطريقة مقنعة لأصحاب العمل",
      features: ["متوافقة مع أنظمة ATS", "تصاميم احترافية متنوعة", "إبراز الإنجازات والمهارات", "مراجعة مجانية"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Linkedin,
      title: "تحسين صفحات لينكدإن",
      description: "تطوير حضورك المهني على لينكدإن بمحتوى جذاب وكلمات مفتاحية تزيد من ظهورك للموظفين",
      features: ["ملف شخصي احترافي", "كلمات مفتاحية مدروسة", "محتوى جذاب ومؤثر", "استراتيجية التواصل"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Mail,
      title: "إعداد خطابات التوظيف",
      description: "خطابات تعريفية مخصصة لكل وظيفة تربط مهاراتك بمتطلبات العمل وتزيد فرص قبولك",
      features: ["خطابات مخصصة لكل وظيفة", "ربط المهارات بالمتطلبات", "أسلوب مقنع ومؤثر", "قوالب متعددة"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Megaphone,
      title: "خدمات الدعاية والإعلان",
      description: "بناء هوية مهنية متكاملة وتصميم مواد دعائية تعكس احترافيتك وتميزك في السوق",
      features: ["تصميم هوية مهنية", "مواد دعائية احترافية", "استراتيجية تسويق شخصي", "تصاميم إبداعية"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  const stats = [
    { number: "500+", label: "عميل راضي", icon: Users, color: "text-blue-600" },
    { number: "95%", label: "نسبة نجاح المقابلات", icon: TrendingUp, color: "text-green-600" },
    { number: "4+", label: "سنوات خبرة", icon: Calendar, color: "text-purple-600" },
    { number: "2.5", label: "أشهر متوسط الحصول على عمل", icon: Award, color: "text-orange-600" }
  ];

  const testimonials = [
    {
      name: "سارة أحمد المطيري",
      location: "جدة، السعودية",
      position: "مديرة تسويق",
      text: "بعد تعديل سيرتي الذاتية مع فريق جاهز للتوظيف، حصلت على 5 مقابلات عمل خلال شهر واحد فقط! الاحترافية في التعامل والجودة العالية جعلتني أحصل على الوظيفة التي أحلم بها.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "أحمد محمد العتيبي",
      location: "الرياض، السعودية", 
      position: "مطور برمجيات",
      text: "ملفي على لينكدإن أصبح يظهر في أول نتائج البحث، وبدأت أتلقى عروض عمل يومياً من شركات محلية وعالمية. الخدمة تستحق كل ريال دفعته!",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "فاطمة الزهراني",
      location: "الدمام، السعودية",
      position: "محاسبة قانونية",
      text: "الخطاب الوظيفي الذي أعدوه لي كان المفتاح للحصول على وظيفة أحلامي في إحدى الشركات الكبرى. أسلوبهم المهني وفهمهم العميق للسوق السعودي مميز جداً.",
      rating: 5,
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "هل خدماتكم متوافقة مع أنظمة الفرز الآلي ATS؟",
      answer: "نعم، جميع السير الذاتية التي نعدها متوافقة 100% مع أنظمة ATS المستخدمة في الشركات السعودية والخليجية، مما يضمن وصول سيرتك الذاتية لفريق التوظيف."
    },
    {
      question: "كم من الوقت تستغرق خدماتكم؟",
      answer: "نحرص على تقديم خدمة سريعة وعالية الجودة. السيرة الذاتية تستغرق 2-3 أيام عمل، تحسين لينكدإن 3-5 أيام، والخطاب الوظيفي يوم واحد فقط."
    },
    {
      question: "هل تضمنون الحصول على وظيفة؟",
      answer: "نحن نضمن تقديم أفضل عرض احترافي لخبراتك ومهاراتك بما يزيد فرص قبولك بشكل كبير. 95% من عملائنا حصلوا على مقابلات عمل خلال 3 أشهر من استخدام خدماتنا."
    },
    {
      question: "هل تقدمون خدمات المراجعة والتعديل؟",
      answer: "نعم، نقدم مراجعة مجانية واحدة لكل خدمة، وإمكانية التعديل حسب ملاحظاتك. هدفنا أن تكون راضياً تماماً عن النتيجة النهائية."
    },
    {
      question: "هل خدماتكم مناسبة لجميع التخصصات؟",
      answer: "بالطبع! لدينا خبرة واسعة في جميع المجالات والتخصصات، من التقنية والطب والهندسة إلى الإدارة والتسويق والتعليم. كل سيرة ذاتية تُصمم خصيصاً حسب مجال العمل."
    }
  ];

  const blogPosts = [
    {
      title: "5 أخطاء في السيرة الذاتية تبعدك عن الوظيفة",
      excerpt: "تعرف على الأخطاء الشائعة التي يقع فيها الباحثون عن عمل وكيفية تجنبها",
      readTime: "5 دقائق",
      category: "نصائح"
    },
    {
      title: "كيف تجهز نفسك لمقابلة عمل في السعودية",
      excerpt: "دليل شامل للاستعداد للمقابلات الشخصية في السوق السعودي",
      readTime: "8 دقائق",
      category: "مقابلات"
    },
    {
      title: "أهمية لينكدإن في الحصول على فرصة عمل ضمن رؤية 2030",
      excerpt: "كيف تستفيد من لينكدإن لتطوير مسيرتك المهنية في ظل التحول الرقمي",
      readTime: "6 دقائق",
      category: "لينكدإن"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">جاهز للتوظيف</span>
                <div className="text-xs text-blue-600 font-medium">شريكك في النجاح المهني</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="nav-link text-gray-700 hover:text-blue-600 font-medium">الرئيسية</a>
              <a href="#about" className="nav-link text-gray-700 hover:text-blue-600 font-medium">من نحن</a>
              <a href="#services" className="nav-link text-gray-700 hover:text-blue-600 font-medium">خدماتنا</a>
              <a href="#success" className="nav-link text-gray-700 hover:text-blue-600 font-medium">قصص النجاح</a>
              <a href="#blog" className="nav-link text-gray-700 hover:text-blue-600 font-medium">المدونة</a>
              <a href="#contact" className="nav-link text-gray-700 hover:text-blue-600 font-medium">تواصل معنا</a>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              ابدأ الآن
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center py-24">
            <div className={`${animationClass} max-w-5xl mx-auto`}>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce-in">
                <Zap className="w-4 h-4" />
                <span>أكثر من 500 عميل حصل على وظيفة أحلامه</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-slide-up">
                <span className="text-gradient block mb-2">
                  جاهز للتوظيف
                </span>
                <span className="text-3xl md:text-5xl text-gray-700 font-semibold">
                  نصنع لك سيرة ذاتية وصفحة لينكدإن وخطاب توظيفي
                </span>
                <span className="block text-2xl md:text-4xl text-blue-600 mt-4 font-bold">
                  يفتح لك أبواب الفرص في السوق السعودي
                </span>
              </h1>
              
              <p className="hero-text text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay-1">
                نجمع بين الخبرة العملية والمعايير العالمية لنقدّم لك هوية مهنية متكاملة تليق بك وتجذب أصحاب العمل. 
                <span className="text-blue-600 font-semibold"> رحلتك نحو الوظيفة المثالية تبدأ من هنا!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-delay-2">
                <button className="btn-primary flex items-center gap-3 text-lg px-8 py-4">
                  <Sparkles className="w-6 h-6" />
                  ابدأ رحلتك الآن
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-secondary flex items-center gap-3 text-lg px-8 py-4">
                  <BookOpen className="w-6 h-6" />
                  شاهد خدماتنا
                </button>
              </div>
            </div>
          </div>

          {/* Quick Services Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 animate-slide-up-delay-3">
            {[
              { icon: CheckCircle2, text: "كتابة وتعديل السيرة الذاتية (ATS)", color: "text-green-600" },
              { icon: CheckCircle2, text: "تحسين صفحات لينكدإن", color: "text-blue-600" },
              { icon: CheckCircle2, text: "إعداد خطاب التوظيف", color: "text-purple-600" },
              { icon: CheckCircle2, text: "خدمات الدعاية والإعلان", color: "text-orange-600" }
            ].map((item, index) => (
              <div key={index} className="card-hover bg-white p-6 rounded-2xl shadow-elegant border border-gray-100">
                <div className="flex items-center gap-4">
                  <item.icon className={`w-8 h-8 ${item.color} flex-shrink-0`} />
                  <span className="text-gray-700 font-semibold text-sm leading-tight">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">أرقام تتحدث عن نجاحنا</h2>
            <p className="text-xl text-blue-100">إنجازات حقيقية مع عملائنا الكرام</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="w-10 h-10" />
                  </div>
                </div>
                <div className="stats-counter mb-3">{stat.number}</div>
                <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 bg-gray-50 fade-in-section ${isVisible.about ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>قصتنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">من نحن</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">منصة متخصصة في دعم الباحثين عن عمل</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                في <span className="text-blue-600 font-semibold">جاهز للتوظيف</span>، نحن منصة متخصصة في دعم الباحثين عن عمل وتمكينهم من تقديم أنفسهم بأفضل صورة مهنية.
                مهمتنا أن نحول مهاراتك وخبراتك إلى قصة نجاح مقنعة يراها أصحاب العمل، سواء عبر سيرتك الذاتية أو حضورك على لينكدإن أو خطابك التعريفي.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Target, title: "الجودة العالية", desc: "محتوى دقيق ومؤثر يحقق النتائج", color: "bg-blue-100 text-blue-600" },
                  { icon: Award, title: "الاحترافية", desc: "أعلى المعايير العالمية", color: "bg-green-100 text-green-600" },
                  { icon: Clock, title: "السرعة في التنفيذ", desc: "إنجاز سريع دون التنازل عن الجودة", color: "bg-purple-100 text-purple-600" },
                  { icon: Shield, title: "الثقة والأمان", desc: "شراكة حقيقية في رحلة نجاحك", color: "bg-orange-100 text-orange-600" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 card-hover">
                    <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <value.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-left">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <Globe className="w-12 h-12 text-blue-200 mb-6" />
                  <h4 className="text-2xl font-bold mb-6">رسالتنا</h4>
                  <p className="text-blue-100 leading-relaxed text-lg mb-8">
                    بناء جسر يربط بين الكفاءات والفرص الوظيفية في السوق السعودي، من خلال أدوات احترافية ومعايير عالمية تواكب رؤية المملكة 2030.
                  </p>
                  <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <Star className="w-6 h-6 text-yellow-300" />
                    <span className="font-medium">معتمدون من أكثر من 100 شركة كبرى في المملكة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 bg-white fade-in-section ${isVisible.services ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>خدماتنا المتميزة</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">خدماتنا</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نقدم لك مجموعة شاملة من الخدمات المهنية المصممة خصيصاً لتعزيز فرصك الوظيفية في السوق السعودي
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-hover bg-white border border-gray-100 rounded-3xl p-8 shadow-elegant group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${service.bgColor} ${service.textColor} py-4 rounded-xl hover:bg-gradient-to-r ${service.color} hover:text-white transition-all duration-300 font-semibold text-lg`}>
                  اطلب الخدمة الآن
                </button>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <UserCheck className="w-16 h-16 mx-auto mb-6 animate-float" />
                <h3 className="text-3xl font-bold mb-4">الاستشارات المهنية</h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">نصائح وإرشادات شخصية مخصصة لتطوير مسيرتك المهنية وتحقيق أهدافك</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm card-hover">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-bold mb-3 text-lg">نصائح المقابلات</h4>
                  <p className="text-blue-100">تجاوز المقابلات بثقة واحترافية</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm card-hover">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-bold mb-3 text-lg">خطط التطوير</h4>
                  <p className="text-blue-100">مسار واضح للنمو المهني المستدام</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm card-hover">
                  <Target className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-bold mb-3 text-lg">استثمار المهارات</h4>
                  <p className="text-blue-100">إرشاد عملي متخصص لتحقيق أهدافك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className={`py-24 bg-gray-50 fade-in-section ${isVisible.success ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>نجاحات حقيقية</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">قصص النجاح</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">شاهد كيف غيرنا حياة عملائنا المهنية وساعدناهم في تحقيق أحلامهم</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card animate-fade-in-up"
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="profile-image"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results Numbers */}
          <div className="bg-white rounded-3xl p-10 shadow-elegant border border-gray-100">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">أرقام ونتائج تتحدث عن نفسها</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="animate-fade-in-up">
                <div className="text-5xl font-bold text-blue-600 mb-4">350+</div>
                <div className="text-gray-700 font-semibold text-lg">سيرة ذاتية معدلة</div>
                <div className="text-gray-500">خلال العام الماضي</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-5xl font-bold text-green-600 mb-4">200+</div>
                <div className="text-gray-700 font-semibold text-lg">ملف لينكدإن محسّن</div>
                <div className="text-gray-500">بنتائج ممتازة</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="text-5xl font-bold text-orange-600 mb-4">150+</div>
                <div className="text-gray-700 font-semibold text-lg">خطاب توظيفي</div>
                <div className="text-gray-500">مصمم خصيصاً</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-24 bg-white fade-in-section ${isVisible.blog ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>مقالات مفيدة</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">المدونة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">نصائح وإرشادات مهنية لمساعدتك في رحلة البحث عن عمل</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="card-hover bg-white border border-gray-100 rounded-2xl p-8 shadow-elegant"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
                  اقرأ المزيد
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>أسئلة شائعة</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-600">إجابات على أكثر الأسئلة التي يطرحها عملاؤنا</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-8 mb-6 shadow-elegant border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <ChevronRight className="w-6 h-6 text-blue-600" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 pr-9 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden fade-in-section ${isVisible.contact ? 'is-visible' : ''}`}>
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Phone className="w-4 h-4" />
              <span>تواصل معنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">ابدأ رحلتك المهنية الآن واحصل على استشارة مجانية</p>
            <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-slide-right">
              <h3 className="text-3xl font-bold mb-10">معلومات الاتصال</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-sm card-hover">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">البريد الإلكتروني</div>
                    <a href="mailto:jahez.team.info@gmail.com" className="text-blue-100 hover:text-white transition-colors text-lg">
                      jahez.team.info@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-sm card-hover">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">واتساب مباشر</div>
                    <a href="https://wa.me/201280539725" className="text-blue-100 hover:text-white transition-colors text-lg">
                      +20 128 053 9725
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-sm card-hover">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">لينكدإن</div>
                    <a href="https://www.linkedin.com/company/106268986/" className="text-blue-100 hover:text-white transition-colors text-lg">
                      صفحة الشركة
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-4">لماذا تختارنا؟</h4>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">خبرة 4+ سنوات في السوق السعودي</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">معايير عالمية ونتائج مضمونة</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">دعم مستمر حتى الحصول على عمل</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-left">
              <div className="glass rounded-3xl p-10">
                <h3 className="text-3xl font-bold mb-8">احجز استشارتك المجانية</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium mb-3">الاسم الكامل</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input w-full px-6 py-4 rounded-xl text-white placeholder-white/70 text-lg"
                      placeholder="اسمك الكامل"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium mb-3">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input w-full px-6 py-4 rounded-xl text-white placeholder-white/70 text-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium mb-3">الخدمة المطلوبة</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-input w-full px-6 py-4 rounded-xl text-white text-lg"
                      required
                    >
                      <option value="" className="text-gray-800">اختر الخدمة</option>
                      <option value="cv" className="text-gray-800">كتابة السيرة الذاتية</option>
                      <option value="linkedin" className="text-gray-800">تحسين لينكدإن</option>
                      <option value="cover-letter" className="text-gray-800">خطاب التوظيف</option>
                      <option value="consulting" className="text-gray-800">استشارة مهنية</option>
                      <option value="all" className="text-gray-800">جميع الخدمات</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium mb-3">رسالة</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="form-input w-full px-6 py-4 rounded-xl text-white placeholder-white/70 resize-none text-lg"
                      placeholder="أخبرنا المزيد عن احتياجاتك وأهدافك المهنية..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <Sparkles className="w-6 h-6" />
                    إرسال الطلب الآن
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">جاهز للتوظيف</span>
                <div className="text-sm text-blue-400">شريكك في النجاح المهني</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              شريكك الموثوق في رحلة البحث عن عمل. نساعدك على تقديم أفضل نسخة من نفسك للحصول على الوظيفة التي تستحقها في السوق السعودي.
            </p>
            <div className="flex justify-center gap-8 mb-10">
              <a href="mailto:jahez.team.info@gmail.com" className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800 rounded-xl hover:bg-gray-700">
                <Mail className="w-7 h-7" />
              </a>
              <a href="https://wa.me/201280539725" className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800 rounded-xl hover:bg-gray-700">
                <Phone className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/company/106268986/" className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800 rounded-xl hover:bg-gray-700">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 جاهز للتوظيف. جميع الحقوق محفوظة. | صُنع بـ <Heart className="w-4 h-4 inline text-red-500" /> في المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;