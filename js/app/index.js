/**
 * Created by Administrator on 2015/4/3.
 */
$(function () {
    var svg = d3.select('#infovizDiv')
        .append('svg')
        .attr('height', 500)
        .attr('width', 500);
    var gg = svg
        .append('g');

    var circle = gg
        .append('circle')
        .attr('cx', '50')
        .attr('cy', '50')
        .attr('r', 10);
    circle.style('fill', '#f00');
    circle.style('stroke', '#0f0');
    circle.style('stroke-width', 10);
    //.style('fill', '#f00');

    //gg.append('text')
    //    .text('this is a circle');
    gg.transition().attr('transform', 'translate(100,100) scale(3)')
});