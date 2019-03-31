import React from 'react';
import './StarRating.scss';


class StarRating extends React.Component {
    render() {
        const { value } = this.props;
        const style={width:value}
        return (
            <div className="star-ratings-css">
                <div className="star-ratings-css-top" style={style}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
        )
    }
}


export default StarRating;
// export default connect(LoginModalWrapped;