import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtnLeft } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    title: '',
    author: '',
    synopsis: '',
    url: '',
    requestParams: {
      topic: '',
      startDate: '',
      endDate: '',
    },
  };

  componentDidMount() {
    this.loadArticles();
  }

  findArticles = () => {
    API.retrieveNewArticles(this.state.requestParams)
      .then(res => {
        console.log(res.data);
        this.setState({ 
          topic: '',
          startDate: '',
          endDate: '', 
        })
      })
      .catch(err => console.log(err));
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSaveArticle = event => {
    event.preventDefault();
    API.saveArticle({
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis,
      url: this.state.url
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1>What Articles Should I Find?</h1>
              <form>
                <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Topic"
                />
                <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Start Date"
                />
                <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="title"
                placeholder="End Date"
                />
                <FormBtnLeft
                  onClick={this.findArticles}
                >
                  Search Articles
                </FormBtnLeft>
              </form>
          </Col>
          <Col size="md-6 sm-12">
            <h1>Articles On My List</h1>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
