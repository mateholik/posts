import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const newPost = {
      title,
      date: Date.now().toString(),
    };
    console.log(newPost);
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
