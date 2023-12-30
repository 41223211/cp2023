//==左右相等,>大於,<小於,>=大於或等於,<=小於或等於,!=不等於
// printf( " a == b is %d \n", a == b ); 判斷是否為真,真顯示1,假顯示0
#include <stdio.h> 
 int main() 
 { 
  int     a = 10, b = 5; 

  printf( " a == b is %d \n", a == b ); 
  printf( " a > b is %d \n", a > b ); 
  printf( " a < b is %d \n", a < b ); 
  printf( " a >= b is %d \n", a >= b ); 
  printf( " a <= b is %d \n", a <= b ); 
  printf( " a != b is %d \n", a != b ); 

  printf( "\n" ); 

  b = 10; 

  printf( " a == b is %d \n", a == b ); 
  printf( " a > b is %d \n", a > b ); 
  printf( " a < b is %d \n", a < b ); 
  printf( " a >= b is %d \n", a >= b ); 
  printf( " a <= b is %d \n", a <= b ); 
  printf( " a != b is %d \n", a != b ); 

  return 0; 
 }