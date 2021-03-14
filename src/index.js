module.exports = function check(str, bracketsConfig) {
  str=str.split("");
  stack=[];
  for (i=0; i<str.length; i++){
    for (j=0;j<bracketsConfig.length;j++){
      if (str[i]==bracketsConfig[j][0]&&bracketsConfig[j][0]==bracketsConfig[j][1]&&stack[stack.length-1]==bracketsConfig[j][0]){stack.pop(); j=bracketsConfig.length}
      else if (str[i]==bracketsConfig[j][0]) {stack.push(str[i]); j=bracketsConfig.length}
      else if (str[i]==bracketsConfig[j][1] && stack[stack.length-1]==bracketsConfig[j][0]) {stack.pop(); j=bracketsConfig.length}
    }
  }
  return (stack.length == 0);
}
