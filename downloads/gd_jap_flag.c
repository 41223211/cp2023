#include <stdio.h>
#include <gd.h>
#include <math.h>

int main() {
    // 设置国旗的宽度和高度
    int width = 600;
    int height = 400;

    // 创建画布
    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 设置白色背景
    int white = gdImageColorAllocate(img, 255, 255, 255);
    gdImageFill(img, 0, 0, white);
  // 设置红色圆形
  int red = gdImageColorAllocate(img, 255, 0, 0);
  int centerX = width / 2;
  int centerY = height / 2;
  int radius = height / 4;  // 设置圆形的半径

  gdImageFilledEllipse(img, centerX, centerY, radius * 2, radius * 2, red);

  
    // 保存图片
    FILE *outputFile = fopen("japan_flag.png", "wb");
    gdImagePng(img, outputFile);
    fclose(outputFile);

    // 释放内存
    gdImageDestroy(img);

    printf("日本国旗已经绘制完成，保存为 japan_flag.png\n");

    return 0;
}