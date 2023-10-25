import { FC, ReactNode, useRef, useState } from "react";
import "./styles.css";
import {
  ArrowDown,
  ArrowToLeft,
  ArrowToRight,
  ArrowUp,
  Home,
  User,
} from "../../assets/Icons";

const menuItems = [
  {
    name: "Home",
    icon: <User />,
  },
  {
    name: "Settings",
    icon: <User />,
    items: ["Display", "Editor"],
  },
  {
    name: "Create",
    icon: <User />,
    items: ["Article", "Document", "Report"],
  },
  {
    name: "Account",
    icon: <User />,
    items: ["Dashboard", "Logout"],
  },
  {
    name: "Products",
    icon: <User />,
  },
  {
    name: "Favourites",
    icon: <User />,
  },
  {
    name: "Search",
    icon: <User />,
  },
  {
    name: "Users",
    icon: <User />,
  },
];

type Item = {
  name: string;
  icon: ReactNode;
  items: string[];
};

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(true);
  const handleClick = (item: string) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className={`sidebar ${isShow ? "sidebar-open" : "sidebar-close"} `}>
      <NavHeader isShow={isShow} setIsShow={setIsShow} />
      {menuItems.map((item) => (
        <>
          {!item.items && (
            <NavButton
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
              isShow={isShow}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
                isShow={isShow}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
                isShow={isShow}
              />
            </>
          )}
        </>
      ))}
    </aside>
  );
};
const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}) => (
  <header className="sidebar-header">
    {isShow ? (
      <div className="header">
        <button type="button">
          <Icon icon={<Home />} />
        </button>
        <span> Admin</span>
      </div>
    ) : (
      ""
    )}
    <button type="button" onClick={() => setIsShow(!isShow)}>
      <Icon icon={isShow ? <ArrowToRight /> : <ArrowToLeft />} />
    </button>
  </header>
);

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: ReactNode;
  isActive: boolean;
  hasSubNav?: boolean;
  isShow?: boolean;
};

const NavButton: FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
  isShow,
}) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{isShow ? name : ""}</span>
    {hasSubNav && (
      <Icon icon={isShow ? isActive ? <ArrowDown /> : <ArrowUp /> : ""} />
    )}
  </button>
);

type SubMenuProps = {
  item: Item;
  activeItem: string;
  handleClick: (args0: string) => void;
  isShow: boolean;
};

const SubMenu: FC<SubMenuProps> = ({
  item,
  activeItem,
  handleClick,
  isShow,
}) => {
  const navRef = useRef<HTMLDivElement>(null);

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => (
          <NavButton
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
            isShow={isShow}
          />
        ))}
      </div>
    </div>
  );
};
