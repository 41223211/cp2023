//#include <stdio.h>將sidio.h的檔案內容加進來
//int main()
//{}表示一個區塊的開始和結束
//printf()把框框內的文字列印到螢幕上
//;分號代表句子的結束
//\n表示換行
//return(0);回傳0這個值
//int是一個整數
//int integer是一個變數
//scanf表示從鍵盤讀入資料
//%d表示十進位的整數
//&是取址運算
#include <stdio.h>
int main(){
  int integer1;
  int integer2;
  int integer3;
  int sum;
  printf("Please enter first integer: ");
  scanf("%d", &integer1);
  printf("Please enter second integer: ");
  scanf("%d", &integer2);
  printf("Please enter second integer: ");
  scanf("%d", &integer3);
  sum = integer1+integer2+integer3;
  printf("Sum is %d.\n", sum);
  return(0);
}