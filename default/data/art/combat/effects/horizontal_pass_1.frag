// -*- C++ -*-
uniform sampler2D source;

uniform float texture_width;

void main()
{
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    const float two_pixel_size = 2.0 / texture_width;
    color += texture2D(source, gl_TexCoord[0].st + vec2(-3.0 * two_pixel_size, 0.0)) *  1.0 / 32.0;
    color += texture2D(source, gl_TexCoord[0].st + vec2(-2.0 * two_pixel_size, 0.0)) *  5.0 / 32.0;
    color += texture2D(source, gl_TexCoord[0].st + vec2(-1.0 * two_pixel_size, 0.0)) * 15.0 / 32.0;
    color += texture2D(source, gl_TexCoord[0].st + vec2( 0.0 * two_pixel_size, 0.0)) * 22.0 / 32.0;
    color += texture2D(source, gl_TexCoord[0].st + vec2( 1.0 * two_pixel_size, 0.0)) * 15.0 / 32.0;
    color += texture2D(source, gl_TexCoord[0].st + vec2( 2.0 * two_pixel_size, 0.0)) *  5.0 / 32.0;
    color += texture2D(source, gl_TexCoord[0].st + vec2( 3.0 * two_pixel_size, 0.0)) *  1.0 / 32.0;

    gl_FragColor = color * 0.5;
}
