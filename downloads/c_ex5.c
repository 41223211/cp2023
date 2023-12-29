// char 宣告,字元是用單引號括起來
//  y = (char)97;ASCII 中, 字元 97
//printf("x=%c, y=%c,ASCII of y = %d",x,y,y);把結果印出來
#include <stdio.h>
int main(){
  char x,y;
  x = 'a';
  y = (char)97;
  printf("x=%c, y=%c,ASCII of y = %d",x,y,y);
  return(0);

}