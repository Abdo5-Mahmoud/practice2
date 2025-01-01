import logo from "../imges/logo.png";
import Button from "../ui/Button";
const menu = ["MENU", "LOACTION", "ABOUT", "CONTACT"];

function Navbar() {
  return (
    <nav className="flex max-w-[80%] items-center justify-between bg-slate-50 p-2 m-auto">
      <img src={logo} width={76} height={50} alt="" />
      <ul className="flex items-center justify-between space-x-2 font-mono">
        {menu.map((link, index) => (
          <li
            className="rounded-md p-1 transition hover:bg-slate-200 hover:font-semibold"
            key={index}
          >
            {link}
          </li>
        ))}
      </ul>
      <Button type="red">Login</Button>
    </nav>
  );
}

export default Navbar;
