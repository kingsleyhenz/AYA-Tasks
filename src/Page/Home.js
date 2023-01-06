import React, { useEffect, useState } from "react";
import Image from "../Image/Daggus1.webp";

const Home = () => {
  const [people, setPeople] = useState();
  const [page,setPage] = useState(1)
  const [count,setCount] = useState(0)
  const [character, setcharacter] = useState();
  const [loading,setLoading] = useState(false)
  const [visibility,setVisibility] = useState('hidden')
  const BASE_URL = "https://swapi.dev/api/people"
  function openModal(){
    setVisibility('visible')
  }
  function closeModal(){
    setVisibility('hidden')
  }
  function next(){
  setPage(page+1)
  }
  function prev(){
  setPage(page-1)
  }
  useEffect(() => {
    setLoading(true)
   fetch(BASE_URL+'?page='+page).then((body) =>
      body.json().then((val) => {setPeople(val.results)
      setCount(val.count)
      })
    );
    setLoading(false)
  }, [page]);

  return (
    <>
    {!loading &&
      <div className="wrapper">
        <div className="header">
          <div className="head">
            <h2>STAR WARS API TASK</h2>
          </div>
        </div>
        <div className="pagebtn">
            <button disabled={page==1} onClick={()=>prev()}>Back</button>
            <button disabled={page==Math.ceil(count/10)} onClick={()=>next()}>Forward</button>
        </div>
        <div className="content-wrap">
         {people?.map((person)=>(
             <div className="container">
             <img src={Image} alt="" />
             <div class="text-box">
               <div class="namebx">
                 <h5>Name: {person.name}</h5>
                 <h5 id="charnm"></h5>
               </div>
               <div class="text-icon">
                 <i class="bi bi-chevron-double-down"></i>
               </div>
               <button class="view" onClick={()=>{
                setcharacter(person)
                openModal()
               }}>View</button>
             </div>
           </div>
         ))}
        </div>
        <div class="single-wrap" style={{visibility}}>
          <div class="single">
            <img src={Image} alt="" />
            <div class="single-text-box">
              <div class="namebx">
                <h5>Name: {character?.name}</h5>
                <h5 id="charname"></h5>
              </div>
              <div class="heightbx">
                <h5>Height: {character?.height}</h5>
                <h5 id="charhght"></h5>
              </div>
              <div class="gdrbx">
                <h5>Gender: {character?.gender}</h5>
                <h5 id="chargnd"></h5>
              </div>
              <button class="close" onClick={()=>closeModal()}>Close</button>
            </div>
          </div>
        </div>
      </div>
}
    </>
         
  );
};

export default Home;