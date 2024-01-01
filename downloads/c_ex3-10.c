// int 是代表用了 area 這個函數後, 會傳回一個整數回去
//return result;這一行是把 result 傳回去.

#include <stdio.h> 
 
 int      rect( int x, int y ) 
 { 
  int      result; 
  result = x*y; 
  return result;           
 } 
 void   main() 
 { 
  int x = 100, y = 40; 
  int a; 

  a = rect( x, y ); 
  printf( "100*40 的面積是 %d", a ); 
 }