//float浮點數
//double倍精準浮點數  
//int整數
//float a =0.5;double b = 1.2;int c = 3;定義代號
//b = a+c+b;機算完帶入b
//printf("a=%3.1f,b=%3.1f,c=%3.1d",a,b,c);印出
#include <stdio.h>
void main(){
  float a =0.5;
  double b = 1.2;
  int c = 3;
  b = a+c+b;
  printf("a=%3.1f,b=%3.1f,c=%3.1d",a,b,c);

}