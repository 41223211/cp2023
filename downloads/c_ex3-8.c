//&&!一樣是不等於
//結果為真傳1,假傳0假傳0
//#include <stdio.h> 
// void  main() 
 //{ 
 // printf("%d\n", 1 && 3 ); 
 // printf("%d\n", 0 && 0 ); 
  //printf("%d\n", 2 && 2 ); 
 //} 
#include <stdio.h>
int main()
{
  int days,years,weeks;
  days = 1329;
  years = days/365;
  weeks = (days % 365)/7;
  days = days - ((years*365) + (weeks*7));
  printf("Years: %d\n",years);
  printf("Weeks: %d\n",weeks);
  printf("Days: %d\n",days);
  return (0);
}