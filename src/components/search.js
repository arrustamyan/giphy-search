import { h, Component } from 'preact';
import './search.css';

export default class extends Component {
    render({ onResults }) {
        let input;

        function fetchGifts(e) {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=ImRtUNsFxlxqMZFCvIrSPB765ztwQmPG&q=${input.value}&limit=25&offset=0&rating=G&lang=en`)
                .then(response => response.json())
                .then(results => {
                    onResults(results.data);
                });
        }

        return (
            <form onSubmit={fetchGifts} class="search-form">
                <input type="text" class="search-form__input" placeholder="search giphies" ref={node => { input = node }} />
                <input type="submit" class="search-form__button" value="Search" />
            </form>
        )
    }
}