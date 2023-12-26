#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_roc_flag(gdImagePtr img);
void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color);

int main() {
    int width = 1200;
    int height = (int)(width * 2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_roc_flag(img);

    int white = gdImageColorAllocate(img, 255, 255, 255);
    gdImageLine(img, 429, 125, 279, 165, white);  // A to B
    gdImageLine(img, 279, 165, 170, 274, white);  // B to E
    gdImageLine(img, 170, 274, 429, 125, white);  // E to D

    FILE *outputFile = fopen("roc_flag_in_gd.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_roc_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, white, blue;
    int center_x = (int)(width / 4);
    int center_y = (int)(height / 4);
    int sun_radius = (int)(width / 8);
    int white_circle_dia = sun_radius;
    int blue_circle_dia = white_circle_dia + white_circle_dia * 2 / 15;

    red = gdImageColorAllocate(img, 255, 0, 0);
    white = gdImageColorAllocate(img, 255, 255, 255);
    blue = gdImageColorAllocate(img, 0, 0, 149);

    gdImageFilledRectangle(img, 0, 0, width, height, red);
    gdImageFilledRectangle(img, 0, 0, (int)(width / 2.0), (int)(height / 2.0), blue);

    draw_white_sun(img, center_x, center_y, sun_radius, white);

    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);
    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);
}

void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {
    float deg = M_PI / 180;

    int ax = center_x;
    int ay = center_y - sun_radius;

    gdPoint points[4];
    points[0].x = ax + sun_radius * sin(30 * deg);
    points[0].y = ay + sun_radius - sun_radius * cos(30 * deg);

    points[1].x = ax - sun_radius * tan(15 * deg) + sun_radius * 2 - sun_radius * 2 * cos(30 * deg);
    points[1].y = ay + sun_radius * 2 * sin(30 * deg);

    points[2].x = ax - sun_radius * sin(30 * deg);
    points[2].y = ay + sun_radius - (sun_radius - sun_radius * cos(30 * deg));

    points[3].x = ax + sun_radius * 2 - sun_radius * 2 * cos(30 * deg);
    points[3].y = ay - sun_radius * 2 * sin(30 * deg);

    gdImageLine(img, points[0].x, points[0].y, points[1].x, points[1].y, color);
    gdImageLine(img, points[1].x, points[1].y, points[2].x, points[2].y, color);
    gdImageLine(img, points[2].x, points[2].y, points[3].x, points[3].y, color);
    gdImageLine(img, points[3].x, points[3].y, points[0].x, points[0].y, color);
}
