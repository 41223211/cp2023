var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'ROC', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n } \n', 'tags': '', 'url': 'ROC.html'}, {'title': 'ANSIC', 'text': '', 'tags': '', 'url': 'ANSIC.html'}, {'title': '1.', 'text': '//#include <stdio.h>將sidio.h的檔案內容加進來\n//int main()\n//{}表示一個區塊的開始和結束\n//printf()把框框內的文字列印到螢幕上\n//;分號代表句子的結束\n//\\n表示換行\n//return(0);回傳0這個值\n#include <stdio.h>\nint main()\n{\nprintf("Name :王凱瑞\\n");\nprintf("DOB :April 24, 2005\\n");\nprintf("Mobile :0966-636-108\\n");\nreturn(0);  \n} \n \n \n \n', 'tags': '', 'url': '1..html'}, {'title': '2.', 'text': '//#include <stdio.h>將sidio.h的檔案內容加進來\n//int main(int argc, char *argv)argc 表示命令行参数的数量\n//{}表示一個區塊的開始和結束\n//#if __STDC_VERSION__ >= 201710L 檢查 C 標準版本是否大於或等於 C18 (2017)。如果為真，則會列印「我們正在使用 C18！」。\n//printf()把框框內的文字列印到螢幕上\n//;分號代表句子的結束\n//\\n表示換行\n//return(0);回傳0這個值\n#include <stdio.h>\nint main(int argc, char** argv)\n{\n  #if __STDC_VERSION__ >= 202200L\nprintf("We are in c20!\\n");\n  #elif __STDC_VERSION__ >= 201710L\nprintf("We are in c17!\\n");\n  #elif __STDC_VERSION__ >= 199901L\nprintf("We are in c99!\\n");\n  #else\nprintf("We are in c89/c90!\\n");\n  #endif\n  \nreturn(0);\n} \n \n', 'tags': '', 'url': '2..html'}, {'title': '3.', 'text': '//#include <stdio.h>將sidio.h的檔案內容加進來\n//int main()\n//{}表示一個區塊的開始和結束\n//printf()把框框內的文字列印到螢幕上\n//;分號代表句子的結束\n//\\n表示換行\n//return(0);回傳0這個值\n#include <stdio.h>\nint main(){\nprintf("          ######\\n");\nprintf("        ##      ##\\n");\nprintf("       ##        ##\\n");\nprintf("      ##          ##\\n");\nprintf("     ################\\n");\nprintf("    ##              ##\\n");\nprintf("   ##                ##\\n");\nprintf("  ##                  ##\\n");\n  \nreturn(0);\n} \n \n', 'tags': '', 'url': '3..html'}, {'title': '4', 'text': '//#include <stdio.h>將sidio.h的檔案內容加進來\n//int main()\n//char a = \'A\'\n//{}表示一個區塊的開始和結束\n//printf()把框框內的文字列印到螢幕上\n//%c是字元型態\n//;分號代表句子的結束\n//return(0);回傳0這個值\n#include <stdio.h>\n\nint main(){\nchar x1 = \'A\';\nchar x2 = \'B\';\nchar x3 = \'C\';\n  printf("The reverse of %c%c%c is%c%c%c",x1,x2,x3,x3,x2,x1);\n  return(0);\n  \n} \n \n', 'tags': '', 'url': '4.html'}, {'title': '5', 'text': '', 'tags': '', 'url': '5.html'}, {'title': 'UK', 'text': '#include <stdio.h>\n#include <gd.h>\n\nint main() {\n    FILE *out;\n    gdImagePtr im;\n    int blue, red, white;\n\n    // 创建一个600x400像素的图像\n    im = gdImageCreate(600, 400);\n\n    // 为蓝色、红色和白色分配颜色\n    blue = gdImageColorAllocate(im, 16, 17, 181); // 蓝色的RGB值\n    red = gdImageColorAllocate(im, 206, 17, 38);   // 红色的RGB值\n    white = gdImageColorAllocate(im, 255, 255, 255); // 白色的RGB值\n\n    // 用蓝色填充整个画布\n    gdImageFilledRectangle(im, 0, 0, 599, 399, blue);\n\n    // 设置线的粗细\n    int thicknessVertical = 100;\n    int thicknessHorizontal = 100;\n    int thicknessDiagonal = 50;\n    int thicknessred = 70; // Adjust the thickness of the white line\n  int thicknessreds = 30;\n\n    // 在中间绘制一条红色垂直线\n    int x = 300;\n    gdImageSetThickness(im, thicknessVertical);\n    gdImageLine(im, x, 0, x, 399, white);\n\n    // 在中间绘制一条红色水平线\n    int y = 200;\n    gdImageSetThickness(im, thicknessHorizontal);\n  \n    gdImageLine(im, 0, y, 599, y, white);\n\n    //gdImageSetThickness(im, thicknessred);\n  //gdImageLine(im, 0, y, 599, y, red);\n    \n    // 绘制第一条对角线\n    gdImageSetThickness(im, thicknessDiagonal);\n    gdImageLine(im, 0, 0, 599,399, white);\n  \n  gdImageSetThickness(im, thicknessreds);\n    gdImageLine(im, 0, 0, 599, 399, red);\n\n    // 绘制第二条对角线\n    gdImageSetThickness(im, thicknessDiagonal);\n    gdImageLine(im, 0, 399, 599, 0, white);\n    gdImageSetThickness(im, thicknessreds);\n    gdImageLine(im, 0, 399, 599, 0, red);\n  \n\n    // 设置白色线的粗细\n    gdImageSetThickness(im, thicknessred);\n\n    // 在中间绘制一条白色垂直线\n    gdImageLine(im, x, 0, x, 399, red);\n  gdImageLine(im,  0, 200, 599 , 200, red);\n  \n  \n  \n \n \n    // 恢复线的粗细\n    gdImageSetThickness(im, thicknessVertical);\n\n    // 将图像保存到文件\n    out = fopen("uk_flag_with_lines.png", "wb");\n    gdImagePng(im, out);\n    fclose(out);\n\n    // 释放内存\n    gdImageDestroy(im);\n\n    return 0;\n}\n \n \n', 'tags': '', 'url': 'UK.html'}, {'title': 'W15', 'text': '#include <stdio.h> \n#include <gd.h> \n#include <數學.h> \n \n無效draw_roc_flag（gdImagePtr img）； \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color); \n \nint main() { \n    整數寬度=1200； \n    int 高度 = (int)(寬度 * 2.0 / 3.0); \n \n    gdImagePtr img = gdImageCreateTrueColor(寬度, 高度); \n    gdImageAlphaBlending(img, 0); \n \n    繪製_roc_flag（img）； \n \n    int 白色 = gdImageColorAllocate(img, 255, 255, 255); \n    gdImageLine(img, 429, 125, 279, 165, 白色);  // A 到 B \n    gdImageLine(img, 279, 165, 170, 274, 白色);  // B 到 E \n    gdImageLine(img, 170, 274, 429, 125, 白色);  // E 到 D \n \n    FILE *outputFile = fopen("roc_flag_in_gd.png", "wb"); \n    如果（輸出檔== NULL）{ \n        fprintf(stderr, "開啟輸出檔時發生錯誤。\\n"); \n        返回1； \n    } \n    gdImagePngEx(img, 輸出檔, 9); \n    fclose(輸出檔); \n    gdImageDestroy(img); \n    返回0； \n} \n \n無效draw_roc_flag（gdImagePtr img）{ \n    int 寬度 = gdImageSX(img); \n    int 高度 = gdImageSY(img); \n    int 紅、白、藍； \n    int center_x = (int)(寬度/4); \n    int center_y = (int)(高度 / 4); \n    int sun_radius = (int)(寬度/8); \n    int White_circle_dia = sun_radius; \n    int 藍色圓直徑 = 白色圓直徑 + 白色圓直徑 * 2 / 15; \n \n    紅色 = gdImageColorAllocate(img, 255, 0, 0); \n    白色 = gdImageColorAllocate(img, 255, 255, 255); \n    藍色 = gdImageColorAllocate(img, 0, 0, 149); \n \n    gdImageFilledRectangle(img, 0, 0, 寬度, 高度, 紅色); \n    gdImageFilledRectangle(img, 0, 0, (int)(寬度 / 2.0), (int)(高度 / 2.0), 藍色); \n \n    draw_white_sun(img, center_x, center_y, sun_radius, 白色); \n \n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, 藍色); \n    gdImageFilledEllipse（img，center_x，center_y，white_circle_dia，white_circle_dia，白色）； \n} \n \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) { \n    浮點數 = M_PI / 180; \n \n    int ax = center_x; \n    int ay = center_y - sun_radius； \n \n    gdPoint點[4]； \n    點[0].x = ax + sun_radius * sin(30 * deg); \n    點[0].y = ay + sun_radius - sun_radius * cos(30 * deg); \n \n    點[1].x = ax - sun_radius * tan(15 * deg) + sun_radius * 2 - sun_radius * 2 * cos(30 * deg); \n    點[1].y = ay + sun_radius * 2 * sin(30 * deg); \n \n    點[2].x = ax - sun_radius * sin(30 * deg); \n    點[2].y = ay + sun_radius - (sun_radius - sun_radius * cos(30 * deg)); \n \n    點[3].x = ax + sun_radius * 2 - sun_radius * 2 * cos(30 * deg); \n    點[3].y = ay - sun_radius * 2 * sin(30 * deg); \n \n    gdImageLine(img, 點[0].x, 點[0].y, 點[1].x, 點[1].y, 顏色); \n    gdImageLine(img, 點[1].x, 點[1].y, 點[2].x, 點[2].y, 顏色); \n    gdImageLine(img, 點[2].x, 點[2].y, 點[3].x, 點[3].y, 顏色); \n    gdImageLine(img, 點[3].x, 點[3].y, 點[0].x, 點[0].y, 顏色); \n} \n \n \n \n \n #include <stdio.h>\n#include <math.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nvoid findIntersectionPoints(int ellipseCenterX, int ellipseCenterY, int ellipseMajorAxis, int ellipseMinorAxis,\n                             int lineX1, int lineY1, int lineX2, int lineY2) {\n    // 计算线段的斜率\n    double slope = (double)(lineY2 - lineY1) / (lineX2 - lineX1);\n\n    // 椭圆参数\n    double a = ellipseMajorAxis / 2.0;\n    double b = ellipseMinorAxis / 2.0;\n\n    // 将椭圆和线段移动至原点，方便计算\n    double cx = lineX1 - ellipseCenterX;\n    double cy = lineY1 - ellipseCenterY;\n\n    // 计算椭圆和线段的交点\n    double A = b * b + a * a * slope * slope;\n    double B = 2 * a * a * slope * cy - 2 * a * a * slope * slope * cx;\n    double C = a * a * slope * slope * cx * cx - a * a * b * b + a * a * cy * cy;\n\n    // 计算交点的横坐标\n    double x1 = (-B + sqrt(B * B - 4 * A * C)) / (2 * A);\n    double x2 = (-B - sqrt(B * B - 4 * A * C)) / (2 * A);\n\n    // 计算交点的纵坐标\n    double y1 = slope * (x1 - cx) + cy;\n    double y2 = slope * (x2 - cx) + cy;\n\n    // 将交点坐标移动回原坐标系\n    x1 += ellipseCenterX;\n    x2 += ellipseCenterX;\n    y1 += ellipseCenterY;\n    y2 += ellipseCenterY;\n\n    // 输出交点坐标\n    printf("Intersection Point 1: (%.2f, %.2f)\\n", x1, y1);\n    printf("Intersection Point 2: (%.2f, %.2f)\\n", x2, y2);\n}\n\nint main() {\n    // 椭圆参数\n    int ellipseCenterX = 429;\n    int ellipseCenterY = 125;\n    int ellipseMajorAxis = 100;\n    int ellipseMinorAxis = 60;\n\n    // 线段端点坐标\n    int lineX1 = 429;\n    int lineY1 = 125;\n    int lineX2 = 279;\n    int lineY2 = 165;\n\n    // 寻找交点\n    findIntersectionPoints(ellipseCenterX, ellipseCenterY, ellipseMajorAxis, ellipseMinorAxis,\n                           lineX1, lineY1, lineX2, lineY2);\n\n    return 0;\n}\n \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': 'PROC', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\ngdPoint *drawThinStar(int x, int y, int radius, int numPoints);\n\nvoid draw_star_circle(gdImagePtr img);\n\nint main() {\n    // 设置图像宽度和高度\n    int width = 900;  // 可根据需要调整\n    int height = 600;  // 可根据需要调整\n\n    // 创建画布\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    // 设置红色背景\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    gdImageFill(img, 0, 0, red);\n\n    // 确保画布成功创建\n    if (img == NULL) {\n        fprintf(stderr, "画布创建失败\\n");\n        return 1;  // 返回错误代码\n    }\n\n    // 绘制星星圈\n    draw_star_circle(img);\n\n    // 保存图片\n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    gdImagePng(img, outputFile);\n    fclose(outputFile);\n\n    // 释放内存\n    gdImageDestroy(img);\n\n    printf("星星圈已经绘制完成，保存为 proc_flag.png\\n");\n\n    return 0;\n}\n\nvoid draw_star_circle(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 分配颜色\n    int yellow = gdImageColorAllocate(img, 255, 223, 0);  // 中黄色\n\n    // 获取中心坐标\n    int centerX = 110;\n    int centerY = 170;\n\n    // 半径和数量，调整半径以控制星星的间距\n    int radius = height / 4;  // 调整为高度的四分之一\n    int numStars = 4;  // 修改为4颗星星\n\n    // 绘制星星圈\n    for (int i = 0; i < numStars; i++) {\n        double angle = 3 * M_PI / 2 + (M_PI * i) / numStars + (M_PI / 12) + (M_PI / 10) - (M_PI / 18);  // Starting angle adjusted for the second quadrant and rotated counterclockwise by 5 degrees\n\n        // 计算星星位置\n        int starX = centerX + cos(angle) * radius;\n        int starY = centerY + sin(angle) * radius;\n\n        // 绘制五角星\n        gdImageFilledPolygon(img, drawThinStar(starX, starY, height / 30, 5), 10, yellow);\n    }\n  int extraStarX = centerX;\n  int extraStarY = centerY;\n\n  gdImageFilledPolygon(img, drawThinStar(extraStarX, extraStarY, height / 10, 5), 10, yellow);\n}\n\ngdPoint *drawThinStar(int x, int y, int radius, int numPoints) {\n    int i;\n    static gdPoint star[11];\n\n    for (i = 0; i < 2 * numPoints; i++) {\n        double outerRadius = (i % 2 == 0) ? radius * 1.5 : radius * 0.5;  // 调整星星尖角的长度\n        double angle = M_PI * i / numPoints;\n        star[i].x = x + cos(angle) * outerRadius;\n        star[i].y = y + sin(angle) * outerRadius;\n    }\n\n    // 将最后一个点连接到第一个点，形成闭合的多边形\n    star[2 * numPoints] = star[0];\n\n    return star;\n} \n \n', 'tags': '', 'url': 'PROC.html'}, {'title': 'EU', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\ngdPoint *drawThinStar(int x, int y, int radius, int numPoints);\n\nvoid draw_star_circle(gdImagePtr img);\n\nint main() {\n    // 设置图像宽度和高度\n    int width = 900;  // 可根据需要调整\n    int height = 600;  // 可根据需要调整\n\n    // 创建画布\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    // 设置白色背景\n    int blue = gdImageColorAllocate(img, 0, 0, 150);\n    gdImageFill(img, 0, 0, blue);\n\n    // 确保画布成功创建\n    if (img == NULL) {\n        fprintf(stderr, "画布创建失败\\n");\n        return 1;  // 返回错误代码\n    }\n\n    // 绘制星星圈\n    draw_star_circle(img);\n\n    // 保存图片\n    FILE *outputFile = fopen("thin_star_circle.png", "wb");\n    gdImagePng(img, outputFile);\n    fclose(outputFile);\n\n    // 释放内存\n    gdImageDestroy(img);\n\n    printf("星星圈已经绘制完成，保存为 thin_star_circle.png\\n");\n\n    return 0;\n}\n\nvoid draw_star_circle(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 分配颜色\n    int yellow = gdImageColorAllocate(img, 255, 223, 0);  // 中黄色\n\n    // 获取中心坐标\n    int centerX = width / 2;\n    int centerY = height / 2;\n\n    // 半径和数量\n    int radius = height / 3;\n    int numStars = 12;\n\n    // 绘制星星圈\n    for (int i = 0; i < numStars; i++) {\n        double angle = (2 * M_PI * i) / numStars;\n\n        // 计算星星位置\n        int starX = centerX + cos(angle) * radius;\n        int starY = centerY + sin(angle) * radius;\n\n        // 绘制五角星\n        gdImageFilledPolygon(img, drawThinStar(starX, starY, height / 30, 5), 10, yellow);\n    }\n}\n\ngdPoint *drawThinStar(int x, int y, int radius, int numPoints) {\n    int i;\n    static gdPoint star[11];\n\n    for (i = 0; i < 2 * numPoints; i++) {\n        double outerRadius = (i % 2 == 0) ? radius * 1.5 : radius * 0.5;  // 调整星星尖角的长度\n        double angle = M_PI * i / numPoints;\n        star[i].x = x + cos(angle) * outerRadius;\n        star[i].y = y + sin(angle) * outerRadius;\n    }\n\n    // 将最后一个点连接到第一个点，形成闭合的多边形\n    star[2 * numPoints] = star[0];\n\n    return star;\n} \n 1 \n \n', 'tags': '', 'url': 'EU.html'}, {'title': 'JAP', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nint main() {\n    // 设置国旗的宽度和高度\n    int width = 600;\n    int height = 400;\n\n    // 创建画布\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n\n    // 设置白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFill(img, 0, 0, white);\n  // 设置红色圆形\n  int red = gdImageColorAllocate(img, 255, 0, 0);\n  int centerX = width / 2;\n  int centerY = height / 2;\n  int radius = height / 4;  // 设置圆形的半径\n\n  gdImageFilledEllipse(img, centerX, centerY, radius * 2, radius * 2, red);\n\n  \n    // 保存图片\n    FILE *outputFile = fopen("japan_flag.png", "wb");\n    gdImagePng(img, outputFile);\n    fclose(outputFile);\n\n    // 释放内存\n    gdImageDestroy(img);\n\n    printf("日本国旗已经绘制完成，保存为 japan_flag.png\\n");\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'JAP.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};