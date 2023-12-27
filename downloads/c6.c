//int是一個整數
//int integer是一個變數
//scanf表示從鍵盤讀入資料
//%d表示十進位的整數
//&是取址運算
#include <stdio.h>
int main(){
  int integer1;
  int integer2;
  int sum;
  printf("Please enter first integer: ");
  scanf("%d", &integer1);
  printf("Please enter second integer: ");
  scanf("%d", &integer2);
  sum = integer1+integer2;
  printf("Sum is %d.\n", sum);
  return(0);
}