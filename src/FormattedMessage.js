import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";
import {TextContext} from "./TextProvider";

export class FormattedMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let messageString = this.context[this.props.id];
        for (const key in this.props.values) {
            messageString = messageString.replace("{" + key + "}", this.props.values[key]);
        }
        return (
            <Text>{messageString}</Text>
        );
    }
}
FormattedMessage.contextType = TextContext;

FormattedMessage.propTypes = {
    id: PropTypes.string,
    values: PropTypes.object
};
