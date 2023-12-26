//#include <stdio.h>將sidio.h的檔案內容加進來
//int main(int argc, char *argv)argc 表示命令行参数的数量
//{}表示一個區塊的開始和結束
//#if __STDC_VERSION__ >= 201710L 檢查 C 標準版本是否大於或等於 C18 (2017)。如果為真，則會列印「我們正在使用 C18！」。
//printf()把框框內的文字列印到螢幕上
//;分號代表句子的結束
//\n表示換行
//return(0);回傳0這個值
#include <stdio.h>
int main(int argc, char** argv)
{
  #if __STDC_VERSION__ >= 202200L
printf("We are in c20!\n");
  #elif __STDC_VERSION__ >= 201710L
printf("We are in c17!\n");
  #elif __STDC_VERSION__ >= 199901L
printf("We are in c99!\n");
  #else
printf("We are in c89/c90!\n");
  #endif
  
return(0);
}