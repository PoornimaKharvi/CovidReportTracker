// import React, { useEffect } from 'react';
// const Covid =()=>{
//      const getCovidData=async()=>
//      {
//         try{
//             const res=await fetch('https://api.covid19india.org/data.json');
//             console.log(res);
//         }
//         catch(err)
//         {
//           console.log(err);
//         }
//      }
//     useEffect(()=>
//     {
//       getCovidData();
//     },[]);
//     return(
//         <>
//             <h1>LIVE</h1>
//             <h1>COVID-19 CORONA VIRUS TRACKER</h1>
//         </>
//     )
// }

// export default Covid;
// import React, { useState } from 'react';

// function FormExample() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Submitting Name: ${name} Email: ${email}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
import react,{useState} from 'react';
function FormExample(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const onSubmitClick=(event)=>{
    event.preventDefault();
    console.log(`Submitting values Name:${name} Email:${email}`);
  }
  return(
    <form onSubmit={onSubmitClick}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
export default FormExample;
