import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchNote, editNote } from '../../actions';
import NoteForm from './NoteForm';
import LoadingSpinner from '../LoadingSpinner';

class NoteEdit extends React.Component {
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchNote(id);
    }
    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.editNote(id, formValues);
    }
    render() {
        if (!this.props.note) {
            return <LoadingSpinner />
        }
        return (
            <div className="jumbotron">
                <h1>Edit a Note</h1>
                <NoteForm 
                    initialValues={_.pick(this.props.note, 'title', 'description')}
                    onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        note: state.notes[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchNote, editNote })(NoteEdit);