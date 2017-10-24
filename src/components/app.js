import { h, Component } from 'preact';
import SearchContainer from '../containers/searchContainer';
import ResultsContainer from '../containers/resultsContainer';

export default class extends Component {
    render() {
        return (
            <div>
                <SearchContainer />
                <ResultsContainer />
            </div>
        );
    }
}
