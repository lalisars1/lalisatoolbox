import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Binary } from "lucide-react";

export default function Nav() {
  const menu = [
    {
      category: {
        name: "Anuncios",
        content: [
          {
            icon: <Binary size={18} />,
            name: "Início",
            href: "/",
          }
        ],
      },
    },
    {
      category: {
        name: "Programas",
        content: [
          {
            icon: <Binary size={18} />,
            name: "Utilitários",
            href: "/download/utils",
          },
          {
            icon: <Binary size={18} />,
            name: "Drivers",
            href: "/download/drivers",
          },
        ],
      },
    },
    {
      category: {
        name: "",
        content: [
          {
            icon: <Binary size={18} />,
            name: "Downloads",
            href: "/downloads",
          },
        ],
      },
    },
  ];
  let location = useLocation();

  useEffect(() => {}, []);

  return (
    <div className="w-[250px]">
      {menu.map((menu, index) => (
        <div className="w-full" key={index}>
          <div className="px-3 py-2">
            <div className="w-full text-left mb-2 px-4 text-lg font-semibold tracking-tight">
              {menu.category.name}
            </div>
            {menu.category.content != undefined &&
              menu.category.content.map((category, index2) => (
                <Link
                  to={category.href}
                  key={index2}
                  className={`${
                    category.href === location.pathname && "bg-secondary"
                  } m-[2px] inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 b text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start`}
                >
                  <div className="flex items-center gap-1">
                    <div>{category.icon !== undefined && category.icon}</div>
                    <div>{category.name}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
