import React,{useState} from "react";
import "./Style.css";
import Menu from './menuApi'
import MenuCard  from "./MenuCard";
import Navbar from "./Navbar";

const UniqueList = [...new Set(
  Menu.map((currElem) =>{
     return currElem.category;
})
),
"All"
];


const Resturent = () => {

  //UseState 

  const [menuData,setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(UniqueList);
 

  const filterItem = (category) => {
  
    if (category==="All"){
      setMenuData(Menu)
      return ;
    }
  const upDatedList = Menu.filter((currElem)=>{

    return currElem.category === category;
  });
  setMenuData(upDatedList);
  
  }
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
     <MenuCard menuData ={menuData}/>
    </>
  );
};

export default Resturent;
