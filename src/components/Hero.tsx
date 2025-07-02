import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-amber-500/10 p-4 rounded-full">
            <Icon name="GraduationCap" size={48} className="text-amber-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
          Подготовительные курсы
          <span className="block text-amber-400">по юриспруденции</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-opensans">
          Профессиональная подготовка к поступлению в юридические вузы с
          гарантией качества
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Начать обучение
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-4 text-lg"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Консультация
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <Icon
              name="Users"
              size={32}
              className="text-amber-400 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-gray-300">Успешных поступлений</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <Icon
              name="Award"
              size={32}
              className="text-amber-400 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">95%</h3>
            <p className="text-gray-300">Процент поступления</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <Icon
              name="Clock"
              size={32}
              className="text-amber-400 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="text-gray-300">Поддержка студентов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
