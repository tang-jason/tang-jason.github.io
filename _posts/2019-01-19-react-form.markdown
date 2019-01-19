---
layout: post
title: "React - Form"
date: 2019-01-19
lang: en-us
---

### {{ page.title }}

Form in Reract is a bit different. using the `name` property of an element can be reduce a lot of code inside the `handleChange` method.

```javascript
  class App extends React.Component {
    constructor() {
      super(); // bring down the goodies from parent component to this component
      this.state = {
        firstName: "",
        lastName: "",
        isFriendly: false,
        gender: "",
        favColor: "",
      }
    }

    handleChange = (event) => {
      // destructure event.target
      const { name, value, type, checked } = event.target;
      this.setState({
        [name]: type === "checkbox" ? checked : value
      });
    }

    render() {
      const { firstName, lastName, isFriendly, gender } = this.state;

      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
            <br />
            <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
            <p>{firstName} {lastName}</p>
          </label>

          <hr />

          <label>
            <input type="checkbox" name="isFriendly" checked={isFriendly} onChange={this.handleChange} />
            is friendly?
          </label>

          <hr />
          <label>
            <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={this.handleChange} />
            male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={this.handleChange} />
            female
          </label>
          <p>You're a {gender}</p>

          <hr />
          <label>
            <select value={this.state.favColor} name="favColor" onChange={this.handleChange}>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="white">White</option>
            </select>
          </label>
          <p>Your favorite color is {this.state.favColor}</p>
        </form>
      );
    };
  }

  ReactDOM.render(<App />, mountNode);
```