// // export default function Home() {
// //   return (
// //     <div>
// //       <div className=" flex gap-3 p-10">
// //         <Card1 />
// //         <Card2 />
// //         <Card3 />
// //       </div>
// //     </div>
// //   );
// // }
// // function Card2() {
// //   return (
// //     <div className="border-2 bg-amber-300 border-gray-700 shadow-lg rounded-3xl w-[300px] h-[300px] overflow-auto">
// //       <img src="https://www.purina.com.au/dw/image/v2/BKFD_PRD/on/demandware.static/-/Library-Sites-purina-shared-library/default/dw597f2b33/images/Finding-a-pet/Pet-breeds/Dog-breeds/Labrador%20Retriever.png"></img>
// //       <p>Best Dog Breeds for a Family</p>
// //     </div>
// //   );
// // }
// // function Card1() {
// //   return (
// //     <div className="border-2 bg-indigo-400 border-black shadow-lg rounded-2xl w-[300px] h-[300px] overflow-auto">
// //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4-JLqqi-TFwZCN5_skhRBl8_tZecE3AZ_g&s"></img>
// //     </div>
// //   );
// // }
// // function Card3() {
// //   return (
// //     <div className="border-2 bg-indigo-400 border-black shadow-lg rounded-2xl w-[290px] h-[300px] overflow-auto">
// //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zW-Nk-USv5nkjac24UoiDPR1cke2Y6p22g&s"></img>
// //       <p></p>
// //     </div>
// //   );
// // }
// import { Card } from "@/app/components/Box";
// const Home = () => {
//   return (
//     <div className="flex gap-10">
//       <h1>Hello</h1>
//       <Card
//         texts="Keeping dogs properly Deutscher"
//         text="Card1"
//         color="green"
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zW-Nk-USv5nkjac24UoiDPR1cke2Y6p22g&s"
//       ></Card>
//       <Card
//         texts="Ferrari unveils new supercar, "
//         text="Card2 "
//         color="yellow"
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEfXCiOlz140PO98Z70Ppc7mJ0_8agry1Fg&s"
//       ></Card>
//       <Card
//         texts="Relaxing Music To Relieve Anxiety"
//         text="Card3"
//         color="gray"
//         image="https://i.ytimg.com/vi/IvadBHNwVV0/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLBEj8U1V-pIprcDULmmnFFnYzqLiA"
//       ></Card>
//     </div>
//   );
// };
// export default Home;

// const colorTheme = [
//   "white",
//   "green",
//   "yellow",
//   "red",
//   "black",
//   "blue",
//   "purple",
//   "orenge",
// ];
// export default function Home() {
//   return (
//     <div className="flex gap-4 w-screen h-screen justify-center items-center">
//       {colorTheme.map((color, index) => (
//         <Balloon key={index + Math.random} color={color}></Balloon>
//       ))}
//     </div>
//   );
// }
// // import Todo from "@/app/components/Todo";
// // export default function Home() {
// //   return (
// //     <div className="flex justify-center items-center h-screen w-screen">
// //       <Todo></Todo>
// //     </div>
// //   );
// // // // }
// "use client";
// import { useState } from "react";
// export default function Home() {
//   const [number, setNumber] = useState(10);

//   const handleIncrease = () => {
//     setNumber(number + 1);
//   };
//   const Xacax = () => {
//     setNumber(number - 1);
//   };
//   const Reset = () => {
//     setNumber(0);
//   };
//   return (
//     <div className=" flex justify-center items-center gap-[10px]">
//       <p className="text-2xl">Hello-{number}</p>
//       <button
//         className="px-4 py-2 bg-green-500 cursor-pointer rounded-md"
//         onClick={handleIncrease}
//       >
//         Increase
//       </button>
//       <button
//         className="px-4 py-2 bg-blue-500 cursor-pointer rounded-md"
//         onClick={Reset}
//       >
//         Reset
//       </button>
//       <button
//         className="px-4 py-2 bg-yellow-500 cursor-pointer rounded-md"
//         onClick={Xacax}
//       >
//         Xacax
//       </button>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [number, setNumber] = useState(0);
//   const [value, setValue] = useState("hello");
//   return (
//     <div className="p-10 flex gap-10">
//       <button className="py-[14px] px-[30px] bg-green-600 rounded-3xl text-white ">
//         1
//       </button>
//       <button className=" py-[20] px-[30px] bg-amber-600 rounded-3xl ]">
//         2
//       </button>
//       <button className="py-[14px] px-[30px] bg-green-600 rounded-3xl text-white ">
//         3
//       </button>
//       <button className=" py-[20] px-[30px] bg-amber-600 rounded-3xl ]">
//         4
//       </button>
//     </div>
//   );
// }
