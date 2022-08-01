// 1 clean the rooom function 
function neatify(Array) {
  const ascendArray = Array.sort(function (a,b) {return a - b});
  const emptyArray = [];
  let tag = 0;
  let stringArray = []; // for string
  for (let i=0; i < ascendArray.length + 1; i++) {
    if (ascendArray[i] != ascendArray[i - 1] && i != 0) {
      let intArray = []; // for int
      for (tag; tag < i; tag++) {
        if (typeof ascendArray[tag] == "number"){
          intArray.push(ascendArray[tag]);
          } else {
            stringArray.push(ascendArray[tag])
          }
      }
      tag = i;
      if (intArray.length > 0){
        emptyArray.push(intArray);
      }
    }
  }
  if (stringArray.length > 0){
    emptyArray.push(stringArray);
  }
  return emptyArray;
}

// 2 HEX To RGB

function HexToRGB(hex) {
  const hexaValue = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15,
  }
  const red = hexaValue[hex[0]] * 16 + hexaValue[hex[1]] * 1
  const green = hexaValue[hex[2]] * 16 + hexaValue[hex[3]] * 1
  const blue = hexaValue[hex[4]] * 16 + hexaValue[hex[5]] * 1
  return `(${red}, ${green}, ${blue})`
}
