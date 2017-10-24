import { h, Component } from 'preact';
import './results.css';

export default class extends Component {

    render({ results }) {
        return (
            <ul>
                {results.map(result => (
                    <img src={result.images.preview_gif.url} />
                ))}
            </ul>
        )
    }

}
