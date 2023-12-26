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