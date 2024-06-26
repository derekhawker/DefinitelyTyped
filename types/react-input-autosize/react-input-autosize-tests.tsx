import * as React from "react";
import AutosizeInput, { AutosizeInputProps } from "react-input-autosize";

class Test extends React.Component<AutosizeInputProps> {
    input: HTMLInputElement | null = null;
    auto: AutosizeInput;

    inputRef = (ref: HTMLInputElement | null) => {
        this.input = ref;
    };

    onChange: React.ChangeEventHandler<HTMLInputElement> = _event => {
        const input = this.auto.getInput();
        input.blur();
    };

    render() {
        return (
            <AutosizeInput
                {...this.props}
                defaultValue="hello"
                value="goodbye"
                minWidth="400"
                ref={React.createRef<AutosizeInput & HTMLInputElement>()}
                inputRef={this.inputRef}
                id="testInput"
                placeholder="Testing 1, 2, 3"
                placeholderIsMinWidth
                onChange={this.onChange}
                extraWidth={64}
                injectStyles
            />
        );
    }
}
