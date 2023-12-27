//weeks = (days % 365)/7;,a % b 将给出 a 除以 b 的余数。
//days = 1329;等號左邊先做
//days = days - ((years*365) + (weeks*7));減去年和周所佔的天數即可得到剩餘的天數
//years = days/365;天除以1年365及得到年
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