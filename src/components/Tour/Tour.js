import React, {Component} from 'react';
import "./Tour.scss";

class Tour extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    };

    render() {
        const {id, city, img, name, info, newAdded, price, sale} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt=""/>
                    <span className="close-btn" onClick={
                        () => {
                            removeTour(id)
                        }}>
                        <i className="fas fa-window-close"/>
                    </span>
                    {newAdded ? <div className="new">
                        New!
                    </div> : null}
                </div>
                <div className="tour-info">
                    <div className="leftstr">
                        <h3 >{city}</h3>
                        <h4>{name}</h4>

                    </div>

                    <div className={'priceTag'}>
                        {sale !== 0
                            ? <div><h6 className="rightstr">${price / 100 * (1 - sale / 100)}</h6><p>${price / 100}</p></div>
                            : <h6>${price / 100}</h6>}
                    </div>

                    <h5>info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                        {this.state.showInfo && <p>{info}</p>}
                    </h5>
                </div>


            </article>
        );
    }
}

export default Tour;