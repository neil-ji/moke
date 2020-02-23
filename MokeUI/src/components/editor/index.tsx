import React from "react";
import BraftEditor, { EditorState } from "braft-editor";
import "braft-editor/dist/index.css";

export interface IMokeEditorProps {

}

export interface IMokeEditorState {
    editorState: EditorState;
}

export class MokeEditor extends React.Component<IMokeEditorProps, IMokeEditorState> {
    constructor(props: IMokeEditorProps) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(null)
        };
    }

    public render() {
        return <BraftEditor value={this.state.editorState} onChange={this.onChange} />;
    }

    private onChange = (editorState: EditorState): void => {
        this.setState({
            editorState
        });
    }
}