import React, { Component } from "react";
import API from "../../utils/API";

class NewArticle extends Component {

    handleSaveArticle = event => {
        event.preventDefault();
        API.saveArticle({
        title: this.props.title,
        author: this.props.author,
        synopsis: this.props.synopsis,
        url: this.props.url
        })
        .then(res => this.props.loadArticles)
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <a href={this.props.url} target='blank'>
                <h3>{this.props.title}</h3></a>
                <h4>by {this.props.author}</h4>
                <p>{this.props.synopsis}</p>
                <button onClick={this.handleSaveArticle}>SAVE</button>
            </div>
        );
    }
}
export default NewArticle;