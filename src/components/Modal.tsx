// import { useState } from "react";
// import {
//   Modal,
//   TextInput,
//   NumberInput,
//   Select,
//   Button,
//   Stack,
// } from "@mantine/core";

// type AddExpenseModalProps = {
//   opened: boolean;
//   onClose: () => void;
//   onAdd: (
//     name: string, 
//     amount: number | string, 
//     category: string
//   ) => void;
// };

// export default function AddExpenseModal({ Modal,
//   TextInput,
//   NumberInput,
//   Select,
//   Button,
//   Stack,}: any) {
//   const [name, setName] = useState<string>("");
//   const [amount, setAmount] = useState<string | number>(0);
//   const [category, setCategory] = useState<string | null>(null);
//   const [isAmountOk,setamount] = useState(false);
//   const [isSetNameOK,setNameOk] = useState(false);
//   const [isSelect,setSelect] = useState(false);
//   // const checkIsOK = () =>{

//   // }
//   const setnameItem = (event: React.ChangeEvent<HTMLInputElement>) =>{
//      setName(event.target.value);
//   }
//   const setAmountItem = (event: React.ChangeEvent<HTMLInputElement>) =>{
//     setamount(true)
//     setAmount(event.target.value);
//   }
//   const selectCate = (event: React.ChangeEvent<HTMLSelectElement>) =>{
//     setCategory(event.target.value)
//   }
//   const handleSubmit = () => {
//     if(name !== ""){
//       setNameOk(true);
//     }
//     if(amount !== null){
//       setamount(true)
//     }
//     if(isSelect){
//       setSelect(true)
//     }
//   };
//   if(isAmountOk && isSelect && isSetNameOK){
//     alert(
//         `Registration complete. Please pay money for 0 THB.`
//       );
//   }
// // const toltalCost = () =>{

// // }
// // const categoriesCost = () =>{
  
// // }

//   // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
//   // let val_number: number = Number("500.0");
//   // console.log(val_number + 100); // 600.0

//   return (
//     <Stack>
//       <TextInput>
//         Food: {} Bath
//         Transport: {} Bath
//         Entertainment: {} Bath
//       </TextInput>
//     </Stack>
//   );
//     /* Type additional text here. */




// }
