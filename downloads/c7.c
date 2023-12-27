//#include <stdio.h>將sidio.h的檔案內容加進來
//int main()
//int radius半徑
//int area面積
//perimeter周長
//perimeter = 2*3.14*radius;計算圓周
//{}表示一個區塊的開始和結束
//printf()把框框內的文字列印到螢幕上
//;分號代表句子的結束
//\n表示換行
//return(0);回傳0這個值
#include <stdio.h>
int main(){
int radius;
float area, perimeter;
radius = 5;
perimeter = 2*3.14*radius;
printf("Perimeter of the Circle = %f inches\n", perimeter);
area = 3.14 * radius * radius;
printf("Area of the Circle = %f square inches\n", area);
return(0);
}