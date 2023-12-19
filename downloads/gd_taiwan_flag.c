#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_taiwan_flag(gdImagePtr img) {
    // 设置图像宽度和高度
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    // 分配颜色
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 206, 17, 38);
    int blue = gdImageColorAllocate(img, 0, 56, 168);

    // 填充整个图像为白色
    gdImageFill(img, 0, 0, white);

    // 绘制蓝色矩形
    int rectangle_height = height / 3;
    gdImageFilledRectangle(img, 0, 0, width, rectangle_height, blue);

    // 绘制红色矩形
    int rectangle_width = width / 7;
    gdImageFilledRectangle(img, 0, 0, rectangle_width, height, red);
}

int main() {
    // 设置图像宽度和高度
    int width = 600;  // 可根据需要调整
    int height = 400;  // 可根据需要调整

    // 创建画布
    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 确保画布成功创建
    if (img == NULL) {
        fprintf(stderr, "画布创建失败\n");
        return 1;  // 返回错误代码
    }

    // 绘制台湾国旗
    draw_taiwan_flag(img);

    // 保存图片
    FILE *outputFile = fopen("taiwan_flag.png", "wb");
    gdImagePng(img, outputFile);
    fclose(outputFile);

    // 释放内存
    gdImageDestroy(img);

    printf("台湾国旗已经绘制完成，保存为 taiwan_flag.png\n");

    return 0;
}