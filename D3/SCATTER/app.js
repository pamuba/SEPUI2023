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
                     .range([0, dimensions.ctrWidth])

    //Draw Circles according to Enter Selection                  
    ctr.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', d => xScale(xAccessor(d)))
        .attr('cy', yAccessor)
        .attr('r', 5)
        .attr('fill', 'red')

}

draw();

//1. Get Data
//2. Draw the chart dimensions
//3. Draw the image

//Accessor functions
//they help access a property in a data object
