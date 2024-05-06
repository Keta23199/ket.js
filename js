const L1 = 5;
const L2 = 3;
const L3 = 7;

if (L1 === L2 & L1 === L3 & L2 ===L3){
    console.log("triangulo Equilatero");
} else if(L1 === L2 || L1 === L3 || L2 === L3){
    console.log("trangulo Isóscele");
 } else {
    console.log("trangulo Escaleno");
 }
