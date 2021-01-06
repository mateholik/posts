import React from "react";
import { connect } from "react-redux";
import { createPost } from "./../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;

    if (!title.trim()) return; //

    const newPost = {
      title,
      date: Date.now().toString(),
    };

    this.props.createPost(newPost);
    this.setState({ title: "" });
  };
  inputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={this.inputHandler}
            value={this.state.title}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost: createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
