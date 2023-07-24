import React from 'react'
import { Fragment } from 'react';
import { MenuList, SaiderBarContadiner, SiderBar } from './styled.menu';

const DropDownMenu = () => {

  const MakeButton = [
    {
      to: "dashboard/home",
      icon: <i className='fa-solid fa-house'> </i>,
      title: "Dashboard"
    },
    {
      to: "dashboard/profile",
      icon: <i className='fa-solid fa-id-card'> </i>,
      title: "Profile",
      subBtn: ["Passwords", "Mail", "Accounts"]
    },
    {
      to: "dashboard/features",
      icon: <i className='fa-solid fa-bag-shopping'> </i>,
      title: "Features",
      subBtn: ["Page", "Elements", "Portafolio"]
    },
    {
      to: "dashboard/revenue",
      icon: <i className='fa-solid fa-square-poll-vertical'> </i>,
      title: "Revenue"
    },
    {
      to: "dashboard/analytics",
      icon: <i className='fa-solid fa-chart-pie'> </i>,
      title: "Analytics"
    },
    {
      to: "dashboard/calendar",
      icon: <i className='fa-solid fa-calendar-days'> </i>,
      title: "Calendar"
    },
    {
      to: "dashboard/messages",
      icon: <i className='fa-solid fa-comment'> </i>,
      title: "Messages"
    },
    {
      to: "dashboard/wallets",
      icon: <i className='fa-solid fa-comment'> </i>,
      title: "Wallets"
    },  
    
  ]
  return ( 
    <Fragment>
      <SaiderBarContadiner>
        <SiderBar>
          <MenuList>

          </MenuList>
        </SiderBar>
      </SaiderBarContadiner>
    </Fragment>
  );
}

export default DropDownMenu;