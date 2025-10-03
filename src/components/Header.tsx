import {navItems} from "../data.ts";
import Button from "./subComponents/Button.tsx";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full shadow-sm">
      <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between py-6">
        <h1 className="text-[40px] leading-[110%] tracking-[-3%] align-middle font-bold">
          <a href="#">Cuditech</a>
        </h1>
        <nav className="flex gap-12">
          {
            navItems.map((item, i) => {
              return <a key={i} href={item.href}
                        className="text-[#101828] text-xs sm:text-base leading-6">{item.name}</a>
            })
          }
        </nav>
        <Button children="Get Free Demo"
                className="bg-[#1A73E8] text-xs sm:text-base leading-6 text-white py-4 px-7 rounded-full"/>
      </div>
    </div>
  )
}

export default Header;