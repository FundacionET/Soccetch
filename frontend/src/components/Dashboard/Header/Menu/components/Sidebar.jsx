import { AiOutlineLeft, AiOutlineHome, AiOutlineApartment, AiOutlineSetting} from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ContainerMain, Divider, LinkContainer, Linkicon, Logocontent, Sidebarbutton } from "./style.sidebar";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <ContainerMain isOpen={sidebarOpen}>
      <Sidebarbutton onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </Sidebarbutton>
      <Logocontent>
        
      </Logocontent>
      {linksArray.map(({ icon, label, to }) => (
        <LinkContainer key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
            <Linkicon>{icon}</Linkicon>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </LinkContainer>
      ))}
      <Divider/>
      {secondarylinksArray.map(({ icon, label, to }) => (
        <LinkContainer key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <Linkicon>{icon}</Linkicon>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </LinkContainer>
      ))}
      <Divider />
      
    </ContainerMain>
  );
}
//#region Data links
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Estadisticas",
    icon: <MdOutlineAnalytics />,
    to: "/estadisticas",
  },
  {
    label: "Productos",
    icon: <AiOutlineApartment />,
    to: "/productos",
  },
  {
    label: "Diagramas",
    icon: <MdOutlineAnalytics />,
    to: "/diagramas",
  },
  {
    label: "Reportes",
    icon: <MdOutlineAnalytics />,
    to: "/reportes",
  },
];
const secondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/null",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
  },
];
//#endregion

//#region STYLED COMPONENTS
