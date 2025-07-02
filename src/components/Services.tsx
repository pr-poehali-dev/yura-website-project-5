import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "FileText",
      title: "Учебные материалы",
      description:
        "Полный комплект учебных пособий, тестов и методических материалов для подготовки",
      features: [
        "Электронные учебники",
        "Тестовые задания",
        "Методички",
        "Видеолекции",
      ],
      price: "от 15 000 ₽",
    },
    {
      icon: "MessageCircle",
      title: "Индивидуальные консультации",
      description:
        "Персональные занятия с опытными преподавателями юридических вузов",
      features: [
        "1-на-1 занятия",
        "Разбор сложных тем",
        "Подготовка к экзаменам",
        "Гибкий график",
      ],
      price: "от 3 000 ₽/час",
    },
    {
      icon: "Users",
      title: "Групповые программы",
      description: "Интенсивные курсы подготовки в малых группах до 8 человек",
      features: [
        "Группы 4-8 человек",
        "Интенсив 3 месяца",
        "Практические занятия",
        "Пробные экзамены",
      ],
      price: "от 25 000 ₽",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-slate-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-opensans">
            Комплексная подготовка к поступлению в юридические вузы с
            индивидуальным подходом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-amber-400 transition-colors duration-300 hover:shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={28}
                    className="text-amber-600"
                  />
                </div>
                <CardTitle className="text-xl font-montserrat text-slate-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-opensans">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-slate-900">
                      {service.price}
                    </span>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <Icon
            name="Phone"
            size={48}
            className="text-amber-400 mx-auto mb-6"
          />
          <h3 className="text-3xl font-bold font-montserrat mb-4">
            Бесплатная консультация
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-opensans">
            Получите персональную консультацию по выбору программы обучения и
            поступлению в вуз
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-400 hover:bg-amber-500/10"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
