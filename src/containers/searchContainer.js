import { connect } from 'preact-redux';
import { results } from '../actions';
import Search from '../components/search';

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        onResults: gifs => {
            dispatch(results(gifs));
        }
    };
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;