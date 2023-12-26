#include <stdio.h>
#include <math.h>

typedef struct {
    int x;
    int y;
} Point;

void findIntersectionPoints(int ellipseCenterX, int ellipseCenterY, int ellipseMajorAxis, int ellipseMinorAxis,
                             int lineX1, int lineY1, int lineX2, int lineY2) {
    // 计算线段的斜率
    double slope = (double)(lineY2 - lineY1) / (lineX2 - lineX1);

    // 椭圆参数
    double a = ellipseMajorAxis / 2.0;
    double b = ellipseMinorAxis / 2.0;

    // 将椭圆和线段移动至原点，方便计算
    double cx = lineX1 - ellipseCenterX;
    double cy = lineY1 - ellipseCenterY;

    // 计算椭圆和线段的交点
    double A = b * b + a * a * slope * slope;
    double B = 2 * a * a * slope * cy - 2 * a * a * slope * slope * cx;
    double C = a * a * slope * slope * cx * cx - a * a * b * b + a * a * cy * cy;

    // 计算交点的横坐标
    double x1 = (-B + sqrt(B * B - 4 * A * C)) / (2 * A);
    double x2 = (-B - sqrt(B * B - 4 * A * C)) / (2 * A);

    // 计算交点的纵坐标
    double y1 = slope * (x1 - cx) + cy;
    double y2 = slope * (x2 - cx) + cy;

    // 将交点坐标移动回原坐标系
    x1 += ellipseCenterX;
    x2 += ellipseCenterX;
    y1 += ellipseCenterY;
    y2 += ellipseCenterY;

    // 输出交点坐标
    printf("Intersection Point 1: (%.2f, %.2f)\n", x1, y1);
    printf("Intersection Point 2: (%.2f, %.2f)\n", x2, y2);
}

int main() {
    // 椭圆参数
    int ellipseCenterX = 429;
    int ellipseCenterY = 125;
    int ellipseMajorAxis = 100;
    int ellipseMinorAxis = 60;

    // 线段端点坐标
    int lineX1 = 429;
    int lineY1 = 125;
    int lineX2 = 279;
    int lineY2 = 165;

    // 寻找交点
    findIntersectionPoints(ellipseCenterX, ellipseCenterY, ellipseMajorAxis, ellipseMinorAxis,
                           lineX1, lineY1, lineX2, lineY2);

    return 0;
}
