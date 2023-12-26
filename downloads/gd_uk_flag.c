#include <stdio.h>
#include <gd.h>

int main() {
    FILE *out;
    gdImagePtr im;
    int blue, red, white;

    // 创建一个600x400像素的图像
    im = gdImageCreate(600, 400);

    // 为蓝色、红色和白色分配颜色
    blue = gdImageColorAllocate(im, 16, 17, 181); // 蓝色的RGB值
    red = gdImageColorAllocate(im, 206, 17, 38);   // 红色的RGB值
    white = gdImageColorAllocate(im, 255, 255, 255); // 白色的RGB值

    // 用蓝色填充整个画布
    gdImageFilledRectangle(im, 0, 0, 599, 399, blue);

    // 设置线的粗细
    int thicknessVertical = 100;
    int thicknessHorizontal = 100;
    int thicknessDiagonal = 50;
    int thicknessred = 70; // Adjust the thickness of the white line
  int thicknessreds = 30;

    // 在中间绘制一条红色垂直线
    int x = 300;
    gdImageSetThickness(im, thicknessVertical);
    gdImageLine(im, x, 0, x, 399, white);

    // 在中间绘制一条红色水平线
    int y = 200;
    gdImageSetThickness(im, thicknessHorizontal);
  
    gdImageLine(im, 0, y, 599, y, white);

    //gdImageSetThickness(im, thicknessred);
  //gdImageLine(im, 0, y, 599, y, red);
    
    // 绘制第一条对角线
    gdImageSetThickness(im, thicknessDiagonal);
    gdImageLine(im, 0, 0, 599,399, white);
  
  gdImageSetThickness(im, thicknessreds);
    gdImageLine(im, 0, 0, 599, 399, red);

    // 绘制第二条对角线
    gdImageSetThickness(im, thicknessDiagonal);
    gdImageLine(im, 0, 399, 599, 0, white);
    gdImageSetThickness(im, thicknessreds);
    gdImageLine(im, 0, 399, 599, 0, red);
  

    // 设置白色线的粗细
    gdImageSetThickness(im, thicknessred);

    // 在中间绘制一条白色垂直线
    gdImageLine(im, x, 0, x, 399, red);
  gdImageLine(im,  0, 200, 599 , 200, red);
  
  
  
 
 
    // 恢复线的粗细
    gdImageSetThickness(im, thicknessVertical);

    // 将图像保存到文件
    out = fopen("uk_flag_with_lines.png", "wb");
    gdImagePng(im, out);
    fclose(out);

    // 释放内存
    gdImageDestroy(im);

    return 0;
}
