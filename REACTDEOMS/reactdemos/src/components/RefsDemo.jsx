import React, { Component} from 'react';
class RefsDemo extends Component{
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus();
        }
        // this.inputRef.current.focus();
        //this.inputRef.current.click();
    }
    clickHandler = () => {
        alert(this.inputRef.current.value);
        // this.inputRef.current.remove();
        //console.dir(this.inputRef.current);
    }
    render(){
        return(
            <>
                <input type="text" ref={this.setCbRef}/>
                <input type="text" value="Hello"/>
                <button  onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}
export default RefsDemo