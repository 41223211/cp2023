/*for (i = 0;i < 10;i++)
 {

 for (j = 0;j < 2;j++)
 {
 printf("Please enter a number:\n ");
 scanf("%f", &this_is_a_number);
 total = total + this_is_a_number;
 }
 }*///外層循環遍歷10次，而內層循環每次外層循環迭代運行兩次
//total = total + this_is_a_number;把20次結果加起來
 
   #include<stdio.h>
 
 main()
 {
 float this_is_a_number, total;
 int i, j;
 total = 0;

 for (i = 0;i < 10;i++)
 {

 for (j = 0;j < 2;j++)
 {
 printf("Please enter a number:\n ");
 scanf("%f", &this_is_a_number);
 total = total + this_is_a_number;
 }
 }
 printf("Total Sum is = %f\n", total);
 }