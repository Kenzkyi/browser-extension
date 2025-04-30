import React, { createContext, useContext, useState } from 'react'
import data from '../data'

const extensionContext = createContext()

export const useExtensionContext = ()=> useContext(extensionContext)

const BrowserExtensionContext = ({children}) => {
    const [datas,setDatas] = useState(data)
    const [isDark,setIsDark] = useState(true)
    const [navState,setNavState] = useState('all')
    const [filteredDatas,setFilteredDatas] = useState(data)

    const setMode = ()=>{
        setIsDark(!isDark)
    }

    const onClickAll = ()=>{
        setNavState('all');
        setFilteredDatas(datas)
    }

    const onClickActive = ()=>{
       setNavState('active')
       setFilteredDatas(datas?.filter((item)=>item?.isActive === true))
    }

    const onClickInActive = ()=>{
       setNavState('inActive')
       setFilteredDatas(datas?.filter((item)=>item?.isActive === false))
    }

    const setActiveState = (id)=>{
       const updatedArrayWithState = datas?.map((item)=>item?.id === id ? {...item,isActive: !item?.isActive} : item)
       setDatas(updatedArrayWithState)
       setFilteredDatas(filteredDatas?.map((item)=>item?.id === id ? {...item,isActive: !item?.isActive} : item))
    }

    const removeItem = (id)=>{
       setDatas(datas.filter((item)=>item?.id !== id))
    }
    
    const defaultValue = {
        onClickAll,
        onClickActive,
        onClickInActive,
        setActiveState,
        removeItem,
        setFilteredDatas,
        setMode,
        isDark,
        navState,
        datas,
        filteredDatas
    }
  return (
    <extensionContext.Provider value={defaultValue}>
      {children}
    </extensionContext.Provider>
  )
}

export default BrowserExtensionContext
