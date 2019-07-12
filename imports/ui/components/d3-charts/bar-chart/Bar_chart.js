import d3 from 'd3'

import './Bar_chart.html'
import './Bar_chart.css'

import { data } from '/imports/api/data/barChartData.js'

let properties;

Template.Bar_chart.onRendered(() => {
	let category = 1;
	properties = setupBarChart(data, 'bar-chart-container', category);
	properties = update(data, properties, category);
});

Template.Bar_chart.events({
	'click .data-categoty-picker': (event, instance) => {
		const { category } = event.target.dataset;
		properties = update(data, properties, category);
	},
});

const setupBarChart = (data, element_ID, category) => {
	const selectedData = data.filter(d => d.category === category)
	const values = selectedData.map( e => e.value );
	const margin = {top: 40, right: 40, bottom: 40, left: 40};
	const element = $(`#${element_ID}`);
	const width = element.width() - margin.left - margin.right;
	const height = element.height() - margin.top - margin.bottom;
	const sizes = {margin, width, height}

    let svg = d3.select(`#${element_ID}`).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);

	let yScale = d3.scaleLinear()
			.domain([0, d3.max(values)])
			.range([height, 0]);

	let xScale = d3.scaleBand()
			.range([0, width])
			.padding(0.2);

	let xAxis = d3.axisBottom()
		.scale(xScale);

	let yAxis = d3.axisLeft()
		.scale(yScale)
		.ticks(4);

	svg.append('g')
		.attr('transform', 'translate(0,' + height + ')')
		.attr('class', 'x axis')

 	svg.append('g')
		.attr('class', 'y axis')
		
	return { yScale, xScale, xAxis, yAxis, svg, sizes }
};

const update = (data, properties, category) => {
	let { yScale, xScale, xAxis, yAxis, svg, sizes } = properties;
	let { height } = sizes;
	const duration = 600;
	const easeLinear = d3.easeLinear;
	const easeBack = d3.easeBack;
	const selectedData = data.filter(d => d.category === parseInt(category, 10))
	const values = selectedData.map( e => e.value );
	xScale.domain(selectedData.map(d => d.title ));
	yScale.domain([0, d3.max(values)]);

	let bars = svg.selectAll('.bar').data(selectedData);

	bars.enter()
		.append('rect')
		.attr('class', 'bar')
        .attr('fill', '#b0dbd6')
        .attr('width', xScale.bandwidth())
        .attr('height', 0)
		.attr('y', height)
		.attr('x', (d) => xScale(d.title))
        .merge(bars)
			.transition()
			.ease(easeLinear)
			.duration(duration)
			.attr('height', (d) => height - yScale(d.value))
			.attr('y', (d) => yScale(d.value))
			.attr('width', xScale.bandwidth());

	bars.exit()
		.transition()
		.ease(easeLinear)
        .duration(duration)
        .attr('height', 0)
        .attr('y', height)
		.remove();

	let labels = svg.selectAll('.label')
        .data(selectedData);

    let new_labels = labels.enter()
        .append('text')
        .attr('class', 'label')
        .attr('opacity', 0)
		.attr('y', height)
		.attr('x', (d) => xScale(d.title) + xScale.bandwidth() / 2)
        .attr('fill', 'white')
		.attr('text-anchor', 'middle')
		.style('font-weight', 'bold');

    new_labels.merge(labels)
		.transition()
		.ease(easeLinear)
        .duration(duration)
        .attr('opacity', 1)
        .attr('y', (d) => yScale(d.value) + 30)
        .text((d) => d.title);

    labels.exit()
		.transition()
		.ease(easeLinear)
        .duration(duration)
        .attr('y', height)
        .attr('opacity', 0)
        .remove();
		
	svg.select('.x.axis')
		.transition()
		.ease(easeBack)
        .duration(duration)
        .call(xAxis);

    svg.select('.y.axis')
		.transition()
		.ease(easeBack)
        .duration(duration)
		.call(yAxis);
	
	return  { yScale, xScale, xAxis, yAxis, svg, sizes };
};