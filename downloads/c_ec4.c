//char input,output;字元
//scanf鍵盤輸入的值
//output = input + 32;(ABC等等連號跟小寫差32)
//printf("%c\n", output);把結果印出
#include <stdio.h>
int main(){
  char input,output;
  scanf("%c",&input);
  output = input + 32;
  printf("%c\n", output);
  return(0);
}