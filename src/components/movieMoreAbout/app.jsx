// import React, { useState } from "react";
// import css from "./style.module.css";

// export const MovieMoreAbout = (props) => {
//     const { movieUserWanted, setOrder } = props;
//     const { tsagaaSongoh, takeUserInput, TakeOrder } = props.zahialgaAvahFuntions

//     const thisChairSelected = (e) => {
//         if (e.target.disabled === false) {
//             e.target.disabled = true;
//         }
//     }

//     return (
//         <div className={css.MovieMoreAbout}>
//             <div className={css.movieAbout}>
//                 <img src={movieUserWanted.image} />
//                 <h1>{movieUserWanted.MovieName}</h1>
//             </div>

//             <div className={css.Purchasing}>
//                 <label>Захиалгын хэсэг</label>
//                 <label>Нэр</label>
//                 <input onChange={takeUserInput} name="Нэр" type="ner" />
//                 <label>Утас</label>
//                 <input onChange={takeUserInput} name="Утасны дугаар" type="utas" />
//                 <label>ИМайл</label>
//                 <input onChange={takeUserInput} name="ИМайл" type="email" />
//                 <label>Том хүн</label>
//                 <button>-</button>
//                 <input onChange={takeUserInput}  name="Том Хүн" />
//                 <button>+</button>
//                 <label>Хүүхэд</label>
//                 <button>-</button>
//                 <input onChange={takeUserInput}  name="Хүүхэд" />
//                 <button>+</button>

//                 <label>Цагаа сонгоно уу</label>
//                 <button onClick={(e) => tsagaaSongoh(e)} name="Үзэх Цаг">11:10</button>
//                 <button onClick={(e) => tsagaaSongoh(e)} name="Үзэх Цаг">12:10</button>
//                 <button onClick={(e) => tsagaaSongoh(e)} name="Үзэх Цаг">14:10</button>

//                 <div className="Suudaluud">
//                     <label>Суудлууд</label>
//                     <input id="1" disabled={false} onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="2" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="3" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="4" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="5" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="6" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="7" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="8" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="9" disabled={false}  onClick={thisChairSelected} onChange={takeUserInput} name="Суудал" type="checkbox" />
//                     <input id="10" disabled={false} onClick={thisChairSelected}  onChange={takeUserInput} name="Суудал" type="checkbox" />
//                 </div>

//                 <button onClick={TakeOrder}>Захиалах</button>

//             </div>
//         </div>
//     )
// }