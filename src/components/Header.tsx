import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Scale" size={28} className="text-amber-400" />
          <h1 className="text-2xl font-bold font-montserrat">ЮрПроф</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="hover:text-amber-400 transition-colors"
          >
            Услуги
          </a>
          <a href="#prices" className="hover:text-amber-400 transition-colors">
            Цены
          </a>
          <a
            href="#programs"
            className="hover:text-amber-400 transition-colors"
          >
            Программы
          </a>
          <a
            href="#contacts"
            className="hover:text-amber-400 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
          Записаться
        </Button>
      </div>
    </header>
  );
};

export default Header;
