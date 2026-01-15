import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Страница не найдена
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует. 
            Возможно, она была перемещена или удалена.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-hero inline-flex items-center justify-center gap-2"
            >
              <Home className="h-5 w-5" />
              На главную
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              Назад
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
