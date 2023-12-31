//%f轉小數點
//scanf("%d", &this_is_a_number1);scanf("%d", &this_is_a_number2); 鍵盤讀取輸入的數字
// printf("You entered %f\n", this_is_a_number2);total = this_is_a_number1 + this_is_a_number2;將變數相加,印出結果
 printf("total is %f\n", total);
#include<stdio.h>
 int main()
 {
 float this_is_a_number1, this_is_a_number2, total;
 printf("Please enter a number:\n ");
 scanf("%f", &this_is_a_number1); 
 printf("You entered %f\n", this_is_a_number1);
 printf("Please enter another number: \n");
 scanf("%f", &this_is_a_number2); 
 printf("You entered %f\n", this_is_a_number2);
 total = this_is_a_number1 + this_is_a_number2;
 printf("total is %f\n", total);
 return 0;
 }
