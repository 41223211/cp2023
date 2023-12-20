#include <stdio.h>
#include <gd.h>
#include <math.h>

gdPoint *drawThinStar(int x, int y, int radius, int numPoints);

void draw_star_circle(gdImagePtr img);

int main() {
    // 设置图像宽度和高度
    int width = 900;  // 可根据需要调整
    int height = 600;  // 可根据需要调整

    // 创建画布
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    // 设置红色背景
    int red = gdImageColorAllocate(img, 255, 0, 0);
    gdImageFill(img, 0, 0, red);

    // 确保画布成功创建
    if (img == NULL) {
        fprintf(stderr, "画布创建失败\n");
        return 1;  // 返回错误代码
    }

    // 绘制星星圈
    draw_star_circle(img);

    // 保存图片
    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");
    gdImagePng(img, outputFile);
    fclose(outputFile);

    // 释放内存
    gdImageDestroy(img);

    printf("星星圈已经绘制完成，保存为 proc_flag.png\n");

    return 0;
}

void draw_star_circle(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    // 分配颜色
    int yellow = gdImageColorAllocate(img, 255, 223, 0);  // 中黄色

    // 获取中心坐标
    int centerX = 110;
    int centerY = 170;

    // 半径和数量，调整半径以控制星星的间距
    int radius = height / 4;  // 调整为高度的四分之一
    int numStars = 4;  // 修改为4颗星星

    // 绘制星星圈
    for (int i = 0; i < numStars; i++) {
        double angle = 3 * M_PI / 2 + (M_PI * i) / numStars + (M_PI / 12) + (M_PI / 10) - (M_PI / 18);  // Starting angle adjusted for the second quadrant and rotated counterclockwise by 5 degrees

        // 计算星星位置
        int starX = centerX + cos(angle) * radius;
        int starY = centerY + sin(angle) * radius;

        // 绘制五角星
        gdImageFilledPolygon(img, drawThinStar(starX, starY, height / 30, 5), 10, yellow);
    }
  int extraStarX = centerX;
  int extraStarY = centerY;

  gdImageFilledPolygon(img, drawThinStar(extraStarX, extraStarY, height / 10, 5), 10, yellow);
}

gdPoint *drawThinStar(int x, int y, int radius, int numPoints) {
    int i;
    static gdPoint star[11];

    for (i = 0; i < 2 * numPoints; i++) {
        double outerRadius = (i % 2 == 0) ? radius * 1.5 : radius * 0.5;  // 调整星星尖角的长度
        double angle = M_PI * i / numPoints;
        star[i].x = x + cos(angle) * outerRadius;
        star[i].y = y + sin(angle) * outerRadius;
    }

    // 将最后一个点连接到第一个点，形成闭合的多边形
    star[2 * numPoints] = star[0];

    return star;
}