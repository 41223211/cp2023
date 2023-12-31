//c = getchar();：這一行代碼用於獲取用戶輸入的字符，getchar函數從標準輸入中讀取一個字符，並將其賦值給變數c
//printf("Character entered: ");：這是另一個輸出語句，提示即將顯示用戶輸入的字符。

#include <stdio.h>
 int main () {
 char c;
 printf("Enter character: ");
 c = getchar(); 
 printf("Character entered: ");
 putchar(c); 
 return(0);
 }