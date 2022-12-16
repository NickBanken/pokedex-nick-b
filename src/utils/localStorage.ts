// export const favouriteKey = "favourite-pokedex-wisemen";
// export const teamKey = "favourite-pokedex-wisemen";

// const checkIfFavourite = (item: number | undefined) => {
//   let arr = JSON.parse(localStorage.getItem(favouriteKey) || "[]");
//   if (arr.includes(item)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// export const getLocalStorage = (key: string) => {
//   console.log(JSON.parse(localStorage.getItem(favouriteKey)!));
//   return JSON.parse(localStorage.getItem(favouriteKey)!);
// };

// export const handleFavourite = (val: boolean, item: number | undefined) => {
//   switch (val) {
//     case true:
//       console.log("save");
//       if (!localStorage.getItem(favouriteKey)) {
//         let arr = [];
//         arr.push(item);
//         localStorage.setItem(favouriteKey, JSON.stringify(arr));
//         return;
//       }

//       let arr = JSON.parse(localStorage.getItem(favouriteKey)!);
//       if (!arr.includes(item)) {
//         arr.push(item);
//         localStorage.setItem(favouriteKey, JSON.stringify(arr));
//       }
//       break;

//     case false:
//       console.log("remove");

//       if (localStorage.getItem("favouriteKey")) {
//         let arr = JSON.parse(localStorage.getItem(favouriteKey)!);

//         arr = arr.filter((val: number) => {
//           return val != item;
//         });
//         localStorage.setItem("favouriteKey", JSON.stringify(arr));
//       }
//       break;
//   }
// };

// export const countTotal = (title: string) => {
//   if (!localStorage.getItem(title)) {
//     return 0;
//   }

//   let arr = JSON.parse(localStorage.getItem(title)!);

//   return arr.length;
// };
