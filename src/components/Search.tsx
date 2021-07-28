import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createBundle } from "typescript";
import { Character, Page } from "./ap";

// export function Search({ cb = Function.prototype }): JSX.Element {
//     const [value, setValue] = useState('');
  
//     function handleKey(e: any) {
//         if (e.key === 'Enter') {
//             handleSubmit();
//         }
//     };

//     const handleSubmit = () => {
//         cb(value);
//     };

//     return (
//         <Form className="d-flex">
//             <input
//                 className="mr-2"
//                 type='search'
//                 id='search-field'
//                 placeholder='search'
//                 onKeyDown={handleKey}
//                 onChange={(e) => setValue(e.target.value)}
//                 value={value}
//             >
//             </input>
//             <button onClick={handleSubmit} className="btn btn-outline-warning">Search</button>
//             {/* <div>{filteredCatalog}</div> */}
//         </Form>
//     )
// }

// export function Search({ cb = Function.prototype }) {
//     const [value, setValue] = useState('');

//     function handleKey(e: any) {
//         if (e.key === 'Enter') {
//             handleSubmit();
//         }
//     };

//     const handleSubmit = () => {
//         cb(value);
//     };

//     return (
//         <Form className="d-flex">                  
//             <input 
//                 className="mr-2"
//                 type='search'
//                 id='search-field'
//                 placeholder='search'
//                 onKeyDown={handleKey}
//                 onChange={(e) => setValue(e.target.value)}
//                 value={value}
//             >
//             </input>
//             <button onClick={handleSubmit} className="btn btn-outline-warning">Search</button>
//         </Form>
//     )
// }