import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../../actions';

class NotesList extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }
    renderEmptyListMessage() {
        return (
            <p className="text-center">
                No notes Found. <br/>
                Create new Note by clicking &nbsp;
                <Link to='/notes/create'>here</Link>
            </p>
        );
    }
    renderList() {
        return this.props.notes.map(note => {
            return (
                <Link to={`/note/${note.id}`} key={note.id} className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{note.title}</h5>
                    </div>
                    <p className="mb-1">{note.description}</p>
                </Link>
            );
        })
    }

    render() {
        const containsData = this.props.notes.length > 0
        return (
            <div className="jumbotron">
                <h1>Notes</h1>
                <br/>
                <div className="list-group">
                    {containsData ? this.renderList() : this.renderEmptyListMessage()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: Object.values(state.notes)
    };
}

export default connect(mapStateToProps, { fetchNotes })(NotesList);