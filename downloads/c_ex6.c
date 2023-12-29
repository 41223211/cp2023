// 0x40代表的是一個16進位的數字
//0x40 與 10 進位的 64 值相同
//64L代表的是64這個數值的type(型態)是long
//printf("%d,%d,%ld",a,b,c);把結果印出
#include <stdio.h>
int main(){
  int a =64;
  int b =0x40;
  long c =64L;
  printf("%d,%d,%ld",a,b,c);
  return(0);
  
}
