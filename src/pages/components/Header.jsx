import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SubPerformance</div>
        <nav>
          <ul className="flex space-x-4">
            {["Home", "About", "Performance", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Button variant="ghost" className="text-white hover:text-blue-200">{item}</Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;