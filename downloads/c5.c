//#include <stdio.h>將sidio.h的檔案內容加進來
//int main()
//int width寬
//int height高
//int area面積
//perimeter周長
//{}表示一個區塊的開始和結束
//printf()把框框內的文字列印到螢幕上
//;分號代表句子的結束
//\n表示換行
//return(0);回傳0這個值
#include <stdio.h>
int width;
int height;
int area;
int perimeter;
int main(){
  height = 7;
  width = 5;
  perimeter = 2*(height+width);
  printf("Perimeter of the rectangle = %d inches\n",perimeter);
  area = height*width;
  printf("Area of the rectangle = %d square inches\n",area);
  return(0);
}