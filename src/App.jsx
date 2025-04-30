import React, { useEffect } from 'react'
import sunIcon from './assets/images/icon-sun.svg'
import moonIcon from './assets/images/icon-moon.svg'
import logo from './assets/images/logo.svg'
import { useExtensionContext } from './context/BrowserExtensionContext'

const App = () => {
  const {
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
  } = useExtensionContext()


  useEffect(()=>{
    setFilteredDatas(datas)
    if (navState === 'active') {
      setFilteredDatas(datas?.filter((item)=>item?.isActive === true))
    }else if (navState === 'inActive'){
      setFilteredDatas(datas?.filter((item)=>item?.isActive === false))
    }
  },[datas])

  return (
    <div className='app' style={{background:isDark ? 'linear-gradient(180deg, #040918 0%, #091540 100%)' : 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)'}}>
      <div className="app-header" style={{background:isDark ? 'hsl(226, 25%, 17%)' : 'hsl(200, 60%, 99%)',boxShadow:isDark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}}>
        <nav>
          <img src={logo} />
          <p style={{color:isDark ? 'white' : 'hsl(226, 25%, 17%)'}}>Extensions</p>
        </nav>
        <aside style={{backgroundColor:isDark ? 'hsl(225, 23%, 24%)' : 'hsl(0, 0%, 93%)'}} onClick={()=>setMode(!isDark)}>
          {
            isDark ? <img src={sunIcon} /> : <img src={moonIcon} />
          }
        </aside>
      </div>
      <div className="app-secondLayer">
        <h5 style={{color:isDark ? 'white' : 'hsl(226, 25%, 17%)'}}>Extensions List</h5>
        <section>
          {
            isDark ? 
            <>
              <button onClick={onClickAll} style={{backgroundColor:navState === 'all'? 'hsl(3, 86%, 64%)' : 'hsl(225, 23%, 24%)', color:navState === 'all' ? 'black' : 'rgb(219, 218, 218)',borderColor:navState === ' all' ? 'hsl(3, 86%, 64%)' : 'rgb(78, 77, 77)'}}>All</button>
              <button onClick={onClickActive} style={{backgroundColor:navState === 'active'? 'hsl(3, 86%, 64%)' : 'hsl(225, 23%, 24%)', color:navState === 'active' ? 'black' : 'rgb(219, 218, 218)',borderColor:navState === ' active' ? 'hsl(3, 86%, 64%)' : 'rgb(78, 77, 77)'}}>Active</button>
              <button onClick={onClickInActive} style={{backgroundColor:navState === 'inActive'? 'hsl(3, 86%, 64%)' : 'hsl(225, 23%, 24%)', color:navState === 'inActive' ? 'black' : 'rgb(219, 218, 218)',borderColor:navState === ' inActive' ? 'hsl(3, 86%, 64%)' : 'rgb(78, 77, 77)'}}>Inactive</button>
            </>
            :
            <>
              <button onClick={onClickAll} style={{backgroundColor:navState === 'all'? 'hsl(3, 86%, 64%)' : 'white', color:navState === 'all' ? 'white' : 'black',borderColor:navState === ' all' ? 'hsl(3, 86%, 64%)' : 'gainsboro'}}>All</button>
              <button onClick={onClickActive} style={{backgroundColor:navState === 'active'? 'hsl(3, 86%, 64%)' : 'white', color:navState === 'active' ? 'white' : 'black',borderColor:navState === ' active' ? 'hsl(3, 86%, 64%)' : 'gainsboro'}}>Active</button>
              <button onClick={onClickInActive} style={{backgroundColor:navState === 'inActive'? 'hsl(3, 86%, 64%)' : 'white', color:navState === 'inActive' ? 'white' : 'black',borderColor:navState === ' inActive' ? 'hsl(3, 86%, 64%)' : 'gainsboro'}}>Inactive</button>
            </>
          }
          
        </section>
      </div>
      <div className="app-thirdLayer">
        {
          filteredDatas?.map((item,index)=>(
        <main key={index} style={{backgroundColor:isDark ? 'hsl(226, 25%, 17%)' : 'white',borderColor:isDark ? 'rgb(78, 77, 77)' : 'gainsboro',boxShadow:isDark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}}>
          <header>
            <nav>
              <img src={item?.logo} />
            </nav>
            <article>
              <h6 style={{color:isDark ? 'white' : 'hsl(226, 25%, 17%)'}}>{item?.name}</h6>
              <p style={{color:isDark ? 'white' : 'hsl(226, 11%, 37%)'}}>{item?.description}</p>
            </article>
          </header>
          <footer>
            <button style={{backgroundColor:isDark ? 'hsl(225, 23%, 24%)' : 'white',color:isDark ? 'rgb(219, 218, 218)' : 'hsl(225, 23%, 24%)',borderColor:isDark ? 'rgb(78, 77, 77)' : 'gainsboro'}} onClick={()=>removeItem(item?.id)}>Remove</button>
            <>
              {
                isDark ? 
            <aside style={{background:item?.isActive ? 'hsl(3, 71%, 56%)' : 'hsl(225, 23%, 24%)',flexDirection:item?.isActive ? 'row-reverse' : 'row'}}>
              <section></section>
              <div onClick={()=>setActiveState(item?.id)}></div>
            </aside>
            : 
            <aside style={{background:item?.isActive ? 'hsl(3, 71%, 56%)' : 'hsl(0, 0%, 78%)',flexDirection:item?.isActive ? 'row-reverse' : 'row'}}>
              <section></section>
              <div onClick={()=>setActiveState(item?.id)}></div>
            </aside>
              }
            </>
          </footer>
        </main>
          ))
        }
      </div>
    </div>
  )
}

export default App
