import { connect } from 'preact-redux';
import Results from '../components/results';

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

const mapDispatchToProps = () => {
    return {};
}

const ResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);

export default ResultsContainer;