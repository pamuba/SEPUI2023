async function draw(){
    const dataset = await d3.json('data.json');
    const xAccessor = (d) => d.currently.humidity;
    const yAccessor = (d) => d.currently.apparentTemperature;
    //Dimensions
    let dimensions = {
        width:800,
        height:800,
        margin:{
            top:50,
            bottom:50,
            left:50,
            righ:50
        }
    }

    dimensions.ctrWidth = dimensions.width - dimensions.margin.left - dimensions.margin.righ
    dimensions.ctrHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

    //Draw Image
    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)


    const ctr = svg.append('g')
                    .attr(
                        'transform',
                        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
                    )
    
    const xScale = d3.scaleLinear()
                     .domain(d3.extent(dataset, xAccessor))
                     .rangeRound([0, dimensions.ctrWidth])
    
    const yScale = d3.scaleLinear()
                    .domain(d3.extent(dataset, yAccessor))
                    .rangeRound([dimensions.ctrHeight, 0])
                    .nice()
                    .clamp(true)

    //Draw Circles according to Enter Selection                  
    ctr.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', d => xScale(xAccessor(d)))
        .attr('cy', d => yScale(yAccessor(d)))
        .attr('r', 5)
        .attr('fill', 'red')
        .attr('temp', yAccessor)

    //Axes
    const xAxis = d3.axisBottom(xScale)
                    .ticks(5)
                    .tickFormat((d) => d * 100 + '%')
                    //.tickValues([0, 0.4, 0.6, 0.8, 1.0])

    const xAxisGroup = ctr.append('g')
       .call(xAxis)
       .style('transform',`translateY(${dimensions.ctrHeight}px)`)
       .classed('axis', true)
    
    xAxisGroup.append('text')
               .attr('x', dimensions.ctrWidth /2 )
               .attr('y', dimensions.margin.bottom - 5)
               .attr('fill', 'black')
               .text('Humidity')

    const yAxis = d3.axisLeft(yScale)

    const yAxisGroup = ctr.append('g')
       .call(yAxis)
       .classed('axis', true)

    yAxisGroup.append('text')
              .attr('x', -dimensions.ctrHeight /2 )
              .attr('y', -dimensions.margin.left + 15)
              .attr('fill', 'black')
              .html('Temperature &deg; F')
              .style('transform', 'rotate(270deg)')
              .style('text-anchor','middle')
}

draw();

//1. Get Data
//2. Draw the chart dimensions
//3. Draw the image

//Accessor functions
//they help access a property in a data object
//const svg = d3.create("svg")
//.attr("viewBox", [0, 0, width, height]);
