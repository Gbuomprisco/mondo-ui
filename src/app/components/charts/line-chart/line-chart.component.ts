import {
    Component,
    Input,
    ElementRef,
    Renderer
} from '@angular/core';

import * as d3 from 'd3';
import { scaleTime, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { extent } from 'd3-array';

declare interface Data {
    key: Date;
    value: number;
}

const margin = {
    top: 0,
    right: 25,
    bottom: 40,
    left: 25
};

@Component({
    selector: 'line-chart',
    template: '',
    styles: [ require('./line-chart.style.scss').toString() ]
})
export class LineChart {
    @Input() data: Data[];
    @Input() area: boolean = true;

    private svg;
    private x;
    private y;

    constructor(private $element: ElementRef, private renderer: Renderer) {}

    ngOnInit() {
        this.createSvg(this.data);

        // render again on resize
        // this.renderer.listen(window, 'resize', this.update.bind(this));
    }

    private createSvg(data: Data[]): LineChart {
        const { width, height } = this.getSize();

        this.svg = d3.select(this.$element.nativeElement)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        this.createXAxis(data)
            .createYAxis(data)
            .createLine(data);

        if (this.area) {
            this.createArea();
        }

        return this;
    }

    private setSvgSize(): LineChart {
        const { width, height } = this.getSize();

        this.svg
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        return this;
    }

    private getSize(): {width: number, height: number} {
        const element = this.$element.nativeElement,
            width = element.parentElement.clientWidth - margin.left - margin.right,
            height = element.parentElement.clientHeight - margin.top - margin.bottom;

        return {width, height};
    }

    private createXAxis(data: Data[]): LineChart {
        const { width, height } = this.getSize();
        this.x = scaleTime().range([0, width]).nice();

        this.updateXAxis(data);

        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + height + ')')
            .call(axisBottom(this.x));

        return this;
    }

    private createYAxis(data: Data[]): LineChart {
        const { height } = this.getSize();
        this.y = scaleLinear().range([height, 0]).nice();

        this.updateYAxis(data);

        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(axisLeft(this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 2)
            .attr('dy', '.71em')
            .style('text-anchor', 'end');

        return this;
    }

    private updateXAxis(data: Data[]): LineChart {
        this.x.domain(extent(data, d => d.key));
        return this;
    }

    private updateYAxis(data: Data[]): LineChart {
        this.y.domain(extent(data, (d: {value: number}) => d.value));
        return this;
    }

    private createLine(data: Data[]): LineChart {
        const chart = d3.line()
            .x(d => this.x(d.key))
            .y(d => this.y(d.value));

        this.svg.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', chart);

        return this;
    }

    private createArea(): LineChart {
        const data = this.data,
            area = d3.area()
                .x(d => this.x(d.key))
                .y0(this.getSize().height)
                .y1(d => this.y(d.value));

        this.svg.append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('d', area);

        return this;
    }
}
