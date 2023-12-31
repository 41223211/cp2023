//float this_is_a_number1, this_is_a_number2, total;變數有小數點
//scanf("%d", &this_is_a_number1);scanf("%d", &this_is_a_number2); 鍵盤讀取輸入的數字
//total = this_is_a_number1 * this_is_a_number2;將變數相乘
 //printf("product is %f\n", total);印出結果
#include <stdio.h>

 int main()
 {
 float this_is_a_number1, this_is_a_number2, total;
 printf("Please enter a number:\n ");
 scanf("%f", &this_is_a_number1); 
 printf("You entered %f\n", this_is_a_number1);
 printf("Please enter another number: \n");
 scanf("%f", &this_is_a_number2); 
 printf("You entered %f\n", this_is_a_number2);
 total = this_is_a_number1 * this_is_a_number2;
 printf("product is %f\n", total);
 return 0;
 }