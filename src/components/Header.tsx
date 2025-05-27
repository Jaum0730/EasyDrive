
import { useState } from "react";
import { Menu, X, Car, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-brand-blue" />
            <span className="text-2xl font-bold text-gray-900">DriveEasy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors">Início</Link>
            <Link to="/search-models" className="text-gray-700 hover:text-brand-blue transition-colors">Buscar Carros</Link>
            <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">Contato</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-brand-blue text-white text-sm">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-gray-700 font-medium">{user.name.split(' ')[0]}</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>Meu Perfil</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="h-4 w-4" />
                      <span>Configurações</span>
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sair</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Entrar</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline">Cadastrar</Button>
                </Link>
              </>
            )}
            <Link to="/rent-vehicle">
              <Button className="bg-brand-blue hover:bg-blue-700">Alugar Agora</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors">Início</Link>
              <Link to="/search-models" className="text-gray-700 hover:text-brand-blue transition-colors">Buscar Carros</Link>
              <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">Contato</a>
              
              {user ? (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 pb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-brand-blue text-white text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </div>
                  <Link to="/profile" className="text-gray-700 hover:text-brand-blue transition-colors pl-10">
                    Meu Perfil
                  </Link>
                  <Link to="/settings" className="text-gray-700 hover:text-brand-blue transition-colors pl-10">
                    Configurações
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 transition-colors text-left pl-10"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link to="/login">
                    <Button variant="outline" className="w-full">Entrar</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline" className="w-full">Cadastrar</Button>
                  </Link>
                </div>
              )}
              
              <Link to="/rent-vehicle">
                <Button className="w-full bg-brand-blue hover:bg-blue-700">Alugar Agora</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
